import { Box } from "@mui/material";
import React, { useState } from "react";

const QuestionAnswer = ({ question, answer, index, isDesktop }) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const toggleAnswerVisibility = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };

  return (
    <div
      className={`${
        isDesktop ? "col-12 mt-5 mb-2" : "col-12 col-md-12 mt-5 mb-2"
      }`}
    >
      <Box
        component={"section"}
        bgcolor={"info.orange"}
        color={"text.secondary"}
        className={`questionSection col-12 col-md-12 ${
          isAnswerVisible ? "borderbottom " : isDesktop ? "" : ""
        }`}
        onClick={toggleAnswerVisibility}
      >
        <span className="border-round">{index}</span>
        <span>{question}</span>
      </Box>
      {isAnswerVisible && (
        <Box
          bgcolor={"info.orange"}
          color={"text.secondary"}
          component={"section"}
          className={`${
            isDesktop == true
              ? "questionSectionAnswer visible"
              : "questionSectionAnswer visible"
          }`}
        >
          {answer}
        </Box>
      )}
    </div>
  );
};

export default QuestionAnswer;
