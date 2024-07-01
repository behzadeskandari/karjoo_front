import React from "react";
import { useLocation } from "react-router-dom";
import StepIndicator from "../../components/StepIndicator";

export default function MBTIResult() {
  const { state } = useLocation();
  // const { result } = state;

  return (
    <div>
      <h1>Your MBTI Result</h1>
      {/* <p>{result}</p> */}
      <StepIndicator  steps={5}/>
    </div>
  );
}
