import React, { createContext } from "react";

const Themecontext = createContext("light");

type Children = {
  children?: React.ReactNode;
};
const ThemeProvider: React.FC<Children> = ({ children }) => {
  const [themeColor, setThemeColor] = React.useState("light");

  const value = {
    themeColor,
    setThemeColor,
  };

  return (
    <Themecontext.Provider value={value}>{children}</Themecontext.Provider>
  );
};

export { ThemeProvider, Themecontext };
