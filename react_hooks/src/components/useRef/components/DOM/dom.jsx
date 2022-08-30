import React, { useRef } from "react";
import { useEffect } from "react";

const Dom = () => {
  const inputRef = useRef("");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handlelogin = () => {
    alert(`환영합니다 ${inputRef.current.value}`);
    inputRef.current.focus();
  };

  // DOM요소 에 접근할 수 있다.

  return (
    <>
      <input ref={inputRef} type="text" placeholder="username" />
      <button onClick={handlelogin}> login</button>
    </>
  );
};
export default Dom;
