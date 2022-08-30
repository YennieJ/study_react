import React, { useContext } from "react";
import { ThemeContext } from "../../../layouts/context/themeContext";
import { UserContext } from "../../../layouts/context/userContext";

const Content = () => {
  const { isDark } = useContext(ThemeContext);
  const USER = useContext(UserContext);
  return (
    <div
      className="content"
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      Have a lovely day {USER}
    </div>
  );
};

export default Content;
