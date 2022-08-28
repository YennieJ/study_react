import React, { useRef } from "react";
import { useState } from "react";

//변수는 렌더링이되면 처음 값이 다시 불려진다.
const CompareWithVar = () => {
  const [render, setRender] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;

  const doRedering = () => {
    setRender(render + 1);
    console.log("Render~!");
  };
  const oncreaseRef = () => {
    countRef.current = countRef.current + 1;
    console.log(`ref: ${countRef.current}`);
  };
  const oncreaseVar = () => {
    countVar = countVar + 1;
    console.log(`var: ${countVar}`);
  };

  return (
    <>
      <p>countRef : {countRef.current}</p>
      <p>countVar : {countVar}</p>
      <button onClick={doRedering}>Render</button>
      <button onClick={oncreaseRef}> Ref 올려</button>
      <button onClick={oncreaseVar}> Var 올려</button>
    </>
  );
};

export default CompareWithVar;
