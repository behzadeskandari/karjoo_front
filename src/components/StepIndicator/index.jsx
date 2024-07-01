import React, { useEffect, useState } from "react";
import "./StepIndicator.css";

const StepIndicator = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    checkExtremes();
  }, [currentStep]);

  const checkExtremes = () => {
    const prevButton = window.document.querySelector('[data-action="prev"]');
    const nextButton = window.document.querySelector('[data-action="next"]');

    if (currentStep <= 0) {
      prevButton.disabled = true;
    } else {
      prevButton.disabled = false;
    }

    if (currentStep >= steps - 1) {
      nextButton.disabled = true;
    } else {
      nextButton.disabled = false;
    }
  };

  const handleButtonClick = (action) => {
    if (action === "prev" && currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else if (action === "next" && currentStep < steps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <form
      className=""
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="step-indicator">
        <div className="steps">
          {[...Array(steps)].map((_, index) => (
            <div
              key={index}
              className={`step-inside ${currentStep === index ? "active" : ""}`}
            >
              <div className="step-number">{index + 1}</div>
              <div className="step-name">Step {index + 1}</div>
              {index < steps - 1 && <div className="connector"></div>}
            </div>
          ))}
        </div>
        <div className="btn-group">
          <button
            data-action="prev"
            onClick={(e) => {
              e.preventDefault();
              handleButtonClick("prev");
            }}
          >
            Previous
          </button>
          <button
            data-action="next"
            onClick={(e) => {
              e.preventDefault();
              handleButtonClick("next");
            }}
          >
            Next
          </button>
        </div>
      </div>
    </form>
  );
};

export default StepIndicator;
