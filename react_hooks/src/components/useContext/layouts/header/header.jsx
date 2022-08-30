import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import { UserContext } from "../context/userContext";

const Header = () => {
  const { isDark } = useContext(ThemeContext);
  const USER = useContext(UserContext);
  return (
    <header
      className="header"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black",
      }}
    >
      <h1>Welcome {USER}</h1>
    </header>
  );
};

export default Header;
