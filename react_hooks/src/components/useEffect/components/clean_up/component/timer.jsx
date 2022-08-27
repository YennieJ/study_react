import React, { useEffect } from "react";

const Timer = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("멈추지않는 타이머");
    }, 1000);
    return () => {
      clearInterval(timer);
      console.log("리턴을 사용해야 멈추는군");
    };
  }, []);

  return <h3>타이머 작동중 콘솔을 확인해라</h3>;
};
export default Timer;
