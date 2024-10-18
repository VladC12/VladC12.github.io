import styles from "./ContentShowcase.module.css";

import { useEffect, useState } from "react";

interface Props {
  children?: React.ReactNode;
}

const ContentShowcase: React.FC<Props> = ({ children }) => {
  const [skew, setSkew] = useState({ x: 0, y: 0 });
  const [float, setFloat] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const skewXConstant = 1.5;
    const skewYConstant = 1.5;

    const { clientX, clientY } = event;
    const skewX = (clientX / window.innerWidth) * skewXConstant; // between 0 and skewXConstant
    const skewY = (clientY / window.innerHeight) * skewYConstant - skewYConstant / 2; // between -skewYConstant/2 and +skewYConstant/2
    setSkew({ x: skewX, y: skewY });
  };

  useEffect(() => {
    const handleMouseMoveWrapper = (event: MouseEvent) => handleMouseMove(event as any);
    window.addEventListener('mousemove', handleMouseMoveWrapper);
    return () => {
      window.removeEventListener('mousemove', handleMouseMoveWrapper);
    };
  }, []);

  useEffect(() => {
    const updateFloat = () => {
      // oscilating floating animation
      // using Date.now for a smooth animation
      const scrollY = (window.scrollY || document.documentElement.scrollTop) - window.innerHeight / 2;
      const floatX = Math.sin(Date.now() / 1000) * 5; // -5 -> 5
      const floatY = Math.cos(Date.now() / 1000) * 5 + scrollY / 100; // -5 -> 5 + scroll
      setFloat({ x: floatX, y: floatY });
    };

    const intervalId = setInterval(updateFloat, 16); // 1000ms / 60fps = ~16ms
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.container}
      style={
        {
          transform: `skew(${skew.x}deg, ${skew.y}deg) translate(${float.x}px, ${float.y}px)`
        }}>{children}</div>
  )
}

export default ContentShowcase