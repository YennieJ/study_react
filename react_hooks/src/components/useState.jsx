import React, { useState } from "react";

const heavyWork = () => {
  return ["jin", "leah"];
};

function UseState() {
  const [names, setNames] = useState(heavyWork);
  const [input, setInput] = useState("");

  const handleInput = (event) => {
    setInput(event.target.value);
  };
  const handleButton = (e) => {
    e.preventDefault();
    setNames((prevState) => {
      return [...prevState, input];
    });
  };

  return (
    <>
      <h1>useState</h1>

      <input type="text" onChange={handleInput} />
      <button onClick={handleButton}>Add</button>

      {names.map((name, idx) => (
        <p key={idx}>{name}</p>
      ))}
    </>
  );
}

export default UseState;
