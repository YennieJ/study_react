import React, { useState } from "react";
import Timer from "./component/timer";

const CleanUp = () => {
  const [buttonName, setButtonName] = useState(false);

  const handleButtonNmae = () => {
    setButtonName(!buttonName);
  };

  return (
    <div>
      <h1>clean up</h1>

      <button onClick={handleButtonNmae}>{`Console Timer ${
        buttonName ? "Off" : "On"
      }`}</button>
      {buttonName && <Timer />}
    </div>
  );
};

export default CleanUp;
