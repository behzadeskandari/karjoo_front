import React from "react";
import { useLocation } from "react-router-dom";

export default function MBTIResult() {
  const { state } = useLocation();
  const { result } = state;

  return (
    <div>
      <h1>Your MBTI Result</h1>
      <p>{result}</p>
    </div>
  );
}
