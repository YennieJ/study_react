import React from "react";
import { useState } from "react";
import Page from "./pages/page";
import { ThemeContext } from "./layouts/context/themeContext";
import { UserContext } from "./layouts/context/userContext";

const UseContext = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <UserContext.Provider value={"USER"}>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Page />;
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
};

export default UseContext;
