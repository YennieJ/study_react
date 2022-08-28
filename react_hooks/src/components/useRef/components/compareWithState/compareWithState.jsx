import React from "react";
import { useState, useRef } from "react";

const CompareWithState = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  console.log("랜더링");

  const oncreaseCountState = () => {
    setCount(count + 1);
  };
  const oncreaseCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log("Ref 올려 버튼 동작 중");
  };

  return (
    <>
      <p>State :{count}</p>
      <p>Ref :{countRef.current}</p>

      <button onClick={oncreaseCountState}> State 올려</button>
      <button onClick={oncreaseCountRef}> Ref 올려</button>
    </>
  );
};

export default CompareWithState;
