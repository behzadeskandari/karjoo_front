import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Stepper from "../../components/Stepper/Stepper";
import "../../components/Stepper/Stepper.css";
import axios from "axios";

export default function MBTITest() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5029/api/MBTI/questions").then((response) => {
      console.log(response.data);
      setQuestions(response.data);
    });
  }, []);

  const handleChange = (questionId, value) => {
    setAnswers({
      ...answers,
      [questionId]: value,
    });
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:5029/api/MBTI/submit", answers)
      .then((response) => {
        navigate("/result", { state: { result: response.data } });
      });
  };

  const questionComponents = questions.map((q) => (
    <div key={q.id}>
      <p>{q.questionText}</p>
      <input
        type="radio"
        value="yes"
        name={q.id}
        onChange={() => handleChange(q.id, "yes")}
      />{" "}
      Yes
      <input
        type="radio"
        value="no"
        name={q.id}
        onChange={() => handleChange(q.id, "no")}
      />{" "}
      No
    </div>
  ));

  return (
    <div>
      <Stepper
        ComponentList={questionComponents}
        ComponentLength={questionComponents.length}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
