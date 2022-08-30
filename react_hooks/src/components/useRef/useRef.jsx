import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import CompareWithState from "./components/compareWithState/compareWithState";
import CompareWithVar from "./components/compareWithVar/compareWithVar";
import Dom from "./components/DOM/dom";
const UseRef = () => {
  return (
    <div>
      <nav>
        <Link to="/useRef/1">1. State와 차이</Link>
        <Link to="/useRef/2">2. Var와 차이</Link>
        <Link to="/useRef/3">3. DOM</Link>
      </nav>
      <Routes>
        <Route path="1" element={<CompareWithState />} />
        <Route path="2" element={<CompareWithVar />} />
        <Route path="3" element={<Dom />} />
      </Routes>
    </div>
  );
};

export default UseRef;
