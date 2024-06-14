import React, { useState } from "react";

const QuestionAnswer = ({ question, answer, index, isDesktop }) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const toggleAnswerVisibility = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };

  return (
    <div className="mt-2 mb-2">
      <section
        className={`questionSection ${
          isAnswerVisible
            ? "borderbottom width-90"
            : isDesktop
            ? "width-80"
            : "width-90"
        }`}
        onClick={toggleAnswerVisibility}
      >
        <span className="border-round">{index}</span>
        <span>{question}</span>
      </section>
      {isAnswerVisible && (
        <section
          className={`${
            isDesktop == true
              ? "questionSectionAnswer width-80"
              : "questionSectionAnswer width-90"
          }`}
        >
          {answer}
        </section>
      )}
    </div>
  );
};

export default QuestionAnswer;
