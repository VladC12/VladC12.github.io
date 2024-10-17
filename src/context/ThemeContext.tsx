import { createContext, useState, useEffect } from "react";

interface ThemeContextType {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  isMobile: boolean;
}

export const ThemeContext = createContext<ThemeContextType>({ isDarkMode: true, setIsDarkMode: undefined, isMobile: false });

export const ThemeProvider: React.FC<any> = ({ children }) => {
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const defaultDarkMode = prefersDarkScheme || !window.matchMedia("(prefers-color-scheme: light)").matches;

  const [isDarkMode, setIsDarkMode] = useState(defaultDarkMode);

  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 975);
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode, isMobile }}>
      {children}
    </ThemeContext.Provider>
  );
};
