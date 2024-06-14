import React, { useEffect, useState, forwardRef } from "react";

const AnimatedCounter = forwardRef(({ targetNumber }, ref) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = 20; // Interval time in milliseconds
    const step = Math.ceil(targetNumber / 100); // Increment step based on target number

    const intervalId = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount + step >= targetNumber) {
          clearInterval(intervalId);
          return targetNumber;
        }
        return prevCount + step;
      });
    }, interval);

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [targetNumber]);

  return (
    <span ref={ref} className="color-blue">
      {count.toLocaleString()}
    </span>
  );
});

export default AnimatedCounter;
