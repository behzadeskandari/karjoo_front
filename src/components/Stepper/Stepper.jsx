import React, { useState } from "react";




export default function Stepper({
  ComponentList,
  ComponentLength,
  handleSubmit,
  currentStep,
  setStep,
  timeLeft,
  setTimeLeft
}) {
  const length = ComponentLength;

  const onPrevClick = () => {
    if (currentStep > 0) setStep(currentStep - 1);
  };

  const onNextClick = () => {
    if (currentStep < length - 1) setStep(currentStep + 1);
  };

  const StepElement = ({ currentStep }) => {
    const element = [];
    for (let index = 0; index < length; index++) {
      element.push(
        <span
          key={index}
          className={currentStep >= index ? "step active" : "step"}
        >
          {index + 1}
        </span>
      );
    }
    return element;
  };

  return (
    <div className="Container">
      <div id="step-wrapper">
        <StepElement currentStep={currentStep} />
        <div
          id="progress"
          style={{ width: `${(currentStep / (length - 1)) * 100}%` }}
        ></div>
      </div>
      <div className="ComponentList">{ComponentList[currentStep]}</div>
      <div>
        <button id="prev" onClick={onPrevClick} disabled={currentStep === 0}>
          Previous
        </button>
        {currentStep === length - 1 ? (
          <button id="next" onClick={handleSubmit}>
            Submit
          </button>
        ) : (
          <button id="next" onClick={onNextClick}>
            Next
          </button>
        )}
      </div>
      <div>زمان باقی‌مانده: {Math.floor(timeLeft / 60)}:{timeLeft % 60}</div>
    </div>
  );
}

// export default function Stepper({
//   ComponentList,
//   ComponentLength,
//   handleSubmit,
// }) {
//   const [step, setStep] = useState(0);
//   const length = ComponentLength;

//   const onPrevClick = () => {
//     if (step > 0) setStep(step - 1);
//   };

//   const onNextClick = () => {
//     if (step < length - 1) setStep(step + 1);
//   };

//   const StepElement = ({ currentStep }) => {
//     const element = [];
//     for (let index = 0; index < length; index++) {
//       element.push(
//         <span
//           key={index}
//           className={currentStep >= index ? "step active" : "step"}
//         >
//           {index + 1}
//         </span>
//       );
//     }
//     return element;
//   };

//   return (
//     <div className="Container">
//       <div id="step-wrapper">
//         <StepElement currentStep={step} />
//         <div
//           id="progress"
//           style={{ width: `${(step / (length - 1)) * 100}%` }}
//         ></div>
//       </div>
//       <div className="ComponentList">{ComponentList[step]}</div>
//       <div>
//         <button id="prev" onClick={onPrevClick} disabled={step === 0}>
//           Previous
//         </button>
//         {step === length - 1 ? (
//           <button id="next" onClick={handleSubmit}>
//             Submit
//           </button>
//         ) : (
//           <button id="next" onClick={onNextClick}>
//             Next
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }
