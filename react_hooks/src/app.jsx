import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./app.css";
import UseContext from "./components/useContext/useContext";
import UseEffect from "./components/useEffect/useEffect";
import UseRef from "./components/useRef/useRef";
import UseState from "./components/useState/useState";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/useState"> 1. useState </Link>
        <Link to="/useEffect"> 2. useEffect </Link>
        <Link to="/useRef"> 3. useRef </Link>
        <Link to="/useContext"> 4. useContext </Link>
      </nav>
      <Routes>
        <Route path="useState" element={<UseState />}></Route>
        <Route path="useEffect/*" element={<UseEffect />}></Route>
        <Route path="useRef/*" element={<UseRef />}></Route>
        <Route path="useContext/*" element={<UseContext />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
