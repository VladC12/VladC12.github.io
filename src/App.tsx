import styles from './App.module.css'

import Navbar from './components/Navbar'
import CurriculumVitae from './components/CurriculumVitae'
import MobileWarning from './components/MobileWarning';

import { ThemeContext } from './context/ThemeContext'
import { useContext, lazy, Suspense, useState, useEffect } from 'react';

// Lazy load non-critical components
const AnimatedBackground = lazy(() => import('./components/AnimatedBackground'))
const Footer = lazy(() => import('./components/Footer'))

const App = () => {
  const { isDarkMode, isMobile } = useContext(ThemeContext);
  const [showBackground, setShowBackground] = useState(false);
  
  // Defer background loading until after initial render
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBackground(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles[isDarkMode ? "dark" : "default"]}>
      {isMobile && <MobileWarning />}
      {showBackground && (
        <Suspense fallback={null}>
          <AnimatedBackground darkMode={isDarkMode} />
        </Suspense>
      )}
      <Navbar />
      <CurriculumVitae />
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
