import styles from './App.module.css'

import Navbar from './components/Navbar'
import CurriculumVitae from './components/CurriculumVitae'

import { ThemeContext } from './context/ThemeContext'
import { useContext } from 'react';

const App = () => {

  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={styles[isDarkMode ? "dark" : "default"]}>
      <Navbar />
      <CurriculumVitae />
    </div>
  )
}

export default App
