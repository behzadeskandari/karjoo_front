import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React, { useState } from "react";

function QuestionAnswerWhyUs({ question, answer, index, isDesktop }) {
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
      <section
        className={`questionSectionWhyUs ${
          isAnswerVisible ? " " : isDesktop ? "" : ""
        }`}
        onClick={toggleAnswerVisibility}
      >
        {/* <span className="border-round">{index}</span> */}
        <div className="d-flex justify-content-between">
          <span>{question}</span>
          <span>
            {isAnswerVisible ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowLeftIcon />
            )}
          </span>
        </div>
      </section>
      {isAnswerVisible && (
        <section
          className={`questionSectionAnswerWhyUs ${
            isAnswerVisible ? "visible" : isDesktop ? "" : ""
          }`}
        >
          <div className={`${isDesktop == true ? " " : " "}`}></div>
          <div className="color-grey">{answer}</div>
        </section>
      )}
    </div>
  );
}

export default QuestionAnswerWhyUs;
