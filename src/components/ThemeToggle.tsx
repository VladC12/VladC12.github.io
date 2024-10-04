import React, { useState } from "react";
import "./ThemeToggle.css";

const ThemeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="toggle-theme" onClick={toggleTheme}>
      {isDarkMode ? (
        <img src="/moon.svg" alt="Dark mode" className="icon"/>
      ) : (
        <img src="/sun.svg" alt="Light mode" className="icon"/>
      )}
    </div>
  );
};

export default ThemeToggle;