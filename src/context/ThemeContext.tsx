import { createContext, useState } from "react";

export const ThemeContext = createContext<any>({ theme: "light", undefined });

export const ThemeProvider: React.FC<any> = ({ children }) => {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const defaultDarkMode = prefersDarkScheme || !window.matchMedia("(prefers-color-scheme: light)").matches;
    
    const [isDarkMode, setIsDarkMode] = useState(defaultDarkMode);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
