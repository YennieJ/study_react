import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import CleanUp from "./components/clean_up/clean_up";
import Mount from "./components/mount/mount";

const UseEffect = () => {
  return (
    <div>
      <nav>
        <Link to="/useEffect/mount">1.mount</Link>
        <Link to="/useEffect/CleanUp">2.clean up</Link>
      </nav>
      <Routes>
        <Route path="mount" element={<Mount />} />
        <Route path="cleanUp" element={<CleanUp />} />
      </Routes>
    </div>
  );
};

export default UseEffect;
