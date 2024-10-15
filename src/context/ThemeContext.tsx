import { createContext, useState } from "react";

export const ThemeContext = createContext<any>({ theme: "light", undefined });

export const ThemeProvider: React.FC<any> = ({ children }) => {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDarkMode, setIsDarkMode] = useState(prefersDarkScheme);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
