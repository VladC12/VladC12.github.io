import styles from './App.module.css'

import AnimatedBackground from './components/AnimatedBackground'
import Navbar from './components/Navbar'
import CurriculumVitae from './components/CurriculumVitae'
import Footer from './components/Footer';
import MobileWarning from './components/MobileWarning';

import { ThemeContext } from './context/ThemeContext'
import { useContext } from 'react';

const App = () => {
  const { isDarkMode, isMobile } = useContext(ThemeContext);

  return (
    <div className={styles[isDarkMode ? "dark" : "default"]}>
      {isMobile && <MobileWarning />}
      <AnimatedBackground darkMode={isDarkMode} />
      <Navbar />
      <CurriculumVitae />
      <Footer />
    </div>
  )
}

export default App
