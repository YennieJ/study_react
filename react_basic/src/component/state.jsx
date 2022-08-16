import React from "react";
import { useState } from "react";

const State = ({ age }) => {
  const [name, setName] = useState("yen");

  const chaneName = () => {
    const newtName = name === "yen" ? "jin" : "yen";
    setName(newtName);

    // setName(name === "yen" ? "jin" : "yen")
  };
  return (
    <>
      <h1>state&props</h1>
      <h2>
        {name} <br />
        {`props는 ${age}`}
      </h2>
      <button onClick={chaneName}>change</button>
    </>
  );
};

//여러가지 코드 형태가 있을 수 있다. 자바스크립트를 계속 공부 & 연습하기
export default State;
