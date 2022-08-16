import React from "react";

const Event = () => {
  const showName = () => console.log("showName");
  const showAge = (age) => console.log(age);
  const showText = (event) => console.log(event.target.value);
  function anotherShowText(txt) {
    console.log(txt);
  }

  return (
    <>
      <h1>이벤트 처리하기</h1>
      <button onClick={showName}> Show name</button>
      <button
        onClick={() => {
          showAge("showAge");
        }}
      >
        Show age
      </button>
      <input type="text" onChange={showText} />
      <input
        type="text"
        placeholder={"anotherShowText"}
        onChange={(e) => {
          const txt = e.target.value;
          anotherShowText(txt);
        }}
      />
    </>
  );
};

export default Event;
