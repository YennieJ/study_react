import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import CleanUp from "./components/clean_up/clean_up";
import Mount from "./components/mount/mount";
//Mount, Update, Unmount 되었을때 사용
// useEffect(()=>{})

// useEffect(()=>{
// 작업..
// }); -- 랜더링이 될때 마다 실행

// useEffect(()=>{
// 작업..
// },[value]); -- 화면에 척 랜더링이 될때 실행, value값이 바꿀때 실행

//clean up
// useEffect(()=>{
// 작업..
// return () =>{
// 작업 중단
//  }
// }); -- (타이머, EventListner)

const UseEffect = () => {
  return (
    <div>
      <Link to="/useEffect/mount">1.mount</Link>
      <Link to="/useEffect/CleanUp">2.clean up</Link>

      <Routes>
        <Route path="mount" element={<Mount />} />
        <Route path="cleanUp" element={<CleanUp />} />
      </Routes>
    </div>
  );
};

export default UseEffect;
