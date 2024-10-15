import { useContext, useState } from "react";
import styles from "./ThemeToggle.module.css";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle: React.FC = () => {

  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext)
  const [iconAnimation, setIconAnimation] = useState("");

  const toggleTheme = () => {
    setIconAnimation(styles.comeOut);
    setTimeout(() => {
      setIsDarkMode(!isDarkMode);
      setIconAnimation(styles.comeIn);
    }, 500); // Duration of the comeOut animation

    setTimeout(() => {
      setIconAnimation("");
    }, 1000); // Duration of the comeOut + comeIn animations
  };

  return (
    <div className={styles.toggle} onClick={toggleTheme}>
      {isDarkMode ? (
        <img src="/moon.svg" alt="Dark mode" 
        className={`${styles.icon} ${iconAnimation}`} />
      ) : (
        <img src="/sun.svg" alt="Light mode" 
        className={`${styles.icon} ${iconAnimation}`} />
      )}
    </div>
  );
};

export default ThemeToggle;