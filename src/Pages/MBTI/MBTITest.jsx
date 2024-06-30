import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Stepper from "../../components/Stepper/Stepper";
import "../../components/Stepper/Stepper.css";
import axios from "axios";
import Dexie from "dexie";

const db = new Dexie("MBTITestDB");
db.version(1).stores({
  answers: "++id,questionId,value",
});

export default function MBTITest() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [currentStep, setCurrentStep] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 minutes in seconds
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5029/api/MBTI/questions")
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the questions!", error);
      });

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(interval);
          handleSubmit();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Load answers from IndexedDB on mount
    db.answers.toArray().then((savedAnswers) => {
      const answersObj = {};
      savedAnswers.forEach((answer) => {
        answersObj[answer.questionId] = answer.value;
      });
      setAnswers(answersObj);
    });
  }, []);

  const handleChange = (questionId, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: value,
    }));
    // Save answer to IndexedDB
    db.answers.put({ questionId, value });
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:5029/api/MBTI/submit", answers)
      .then((response) => {
        navigate("/result", { state: { result: response.data } });
      })
      .catch((error) => {
        console.error("There was an error submitting the answers!", error);
      });
  };

  const questionComponents = questions.map((q) => (
    <div key={q.id}>
      <p>{q.questionText}</p>
      <input
        type="radio"
        value="yes"
        name={q.id}
        checked={answers[q.id] === "yes"}
        onChange={() => handleChange(q.id, "yes")}
      />{" "}
      Yes
      <input
        type="radio"
        value="no"
        name={q.id}
        checked={answers[q.id] === "no"}
        onChange={() => handleChange(q.id, "no")}
      />{" "}
      No
    </div>
  ));

  return (
    <div className="d-flex justify-content-center">
      <Stepper
        ComponentList={questionComponents}
        ComponentLength={questionComponents.length}
        handleSubmit={handleSubmit}
        currentStep={currentStep}
        setStep={setCurrentStep}
        timeLeft={timeLeft}
        setTimeLeft={setTimeLeft}
      />
    </div>
  );
}
