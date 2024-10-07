import React, { useState } from "react";
import styles from "./ThemeToggle.module.css";

const ThemeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={styles.toggle} onClick={toggleTheme}>
      {isDarkMode ? (
        <img src="/moon.svg" alt="Dark mode" className={styles.icon}/>
      ) : (
        <img src="/sun.svg" alt="Light mode" className={styles.icon}/>
      )}
    </div>
  );
};

export default ThemeToggle;