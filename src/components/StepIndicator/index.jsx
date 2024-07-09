import React, { useEffect, useState } from "react";
import "./StepIndicator.scss";

const StepIndicator = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    checkExtremes();
    displayStep(currentStep);
  }, [currentStep]);

  const displayStep = (targetStep) => {
    const stepElements = document.querySelectorAll(".steps__step");
    stepElements.forEach((stepEl, index) => {
      stepEl.classList.remove("steps__step--current", "steps__step--done");
      if (index < targetStep) {
        stepEl.classList.add("steps__step--done");
      } else if (index === targetStep) {
        stepEl.classList.add("steps__step--current");
      }
    });
  };

  const checkExtremes = () => {
    const prevButton = document.querySelector('[data-action="prev"]');
    const nextButton = document.querySelector('[data-action="next"]');
    if (prevButton && nextButton) {
      prevButton.disabled = currentStep <= 0;
      nextButton.disabled = currentStep >= steps.length - 1;
    }
  };

  const handleButtonClick = (action) => {
    if (action === "prev" && currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else if (action === "next" && currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <form className="root">
      <div className="steps">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="steps__step" data-step={index}>
              <div className="steps__step-number">{index + 1}</div>
              <div className="steps__step-name">{step.value}</div>
            </div>
            {index < steps.length - 1 && (
              <div className="steps__connector"></div>
            )}
          </React.Fragment>
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
    </form>
  );
};

export default StepIndicator;
{
  /* <form
className=""
style={{
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
}}
>
<div className="step-indicator">
  <div className="steps__step" data-setp="0">
    <div className="steps__step-number">1</div>
    <div className="steps__step-name">About You</div>
  </div>
  <div className="step__connector">
    <div className="steps_step" data-step="1">
      <div className="step__step-number">2</div>
      <div className="steps__step-name">About You</div>
    </div>
  </div>

  <div className="step__connector">
    <div className="steps_step" data-step="2">
      <div className="step__step-number">3</div>
      <div className="steps__step-name">Review</div>
    </div>
  </div>

  <div className="step__connector">
    <div className="steps_step" data-step="3">
      <div className="step__step-number">4</div>
      <div className="steps__step-name">Sign In</div>
    </div>
  </div>

  <div className="step__connector">
    <div className="steps_step" data-step="4">
      <div className="step__step-number">5</div>
      <div className="steps__step-name">Contanct</div>
    </div>
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
</form> */
}
