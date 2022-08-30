import React from "react";
import { useState, useEffect } from "react";

//Mount, Update, Unmount 되었을때 사용
// useEffect(()=>{})

// useEffect(()=>{
// 작업..
// }); -- 랜더링이 될때 마다 실행

// useEffect(()=>{
// 작업..
// },[value]); -- 화면에 척 랜더링이 될때 실행, value값이 바꿀때 실행

const Mount = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const handleCountUpload = () => {
    setCount(count + 1);
  };
  const handleInputChange = (event) => {
    setName(event.target.value);
  };
  //마운팅
  useEffect(() => {
    console.log("mount🧑🏻‍🎤");
  }, []);
  //랜더링 될때
  useEffect(() => {
    console.log("🥶랜더링");
  });
  //count
  useEffect(() => {
    console.log("👺count");
  }, [count]);
  //name
  useEffect(() => {
    console.log("✌🏻name");
  }, [name]);
  return (
    <div>
      <h1>mount</h1>
      <button onClick={handleCountUpload}>Update</button>
      <span>count:{count}</span> <br />
      <br />
      <input type="text" value={name} onChange={handleInputChange} />
      <p>이름 : {name}</p>
    </div>
  );
};

export default Mount;
