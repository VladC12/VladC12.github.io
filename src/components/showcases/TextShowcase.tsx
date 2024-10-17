import styles from "./TextShowcase.module.css";

import { useEffect, useState } from "react";

interface Props {
    children?: React.ReactNode;
}

const TextShowcase: React.FC<Props> = ({children}) => {
    const [skew, setSkew] = useState({ x: 0, y: 0 });
    const [float, setFloat] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const skewXConstant = 5;
        const skewYConstant = 20;

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
            const floatX = Math.sin(Date.now() / 1000) * 5;
            const floatY = Math.cos(Date.now() / 1000) * 50 + scrollY / 20;
            setFloat({ x: floatX, y: floatY });
        };

        const intervalId = setInterval(updateFloat, 16); // 60fps
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={styles.container}>
            <span style={
                {
                    textShadow: `${Math.max(1, skew.x) + float.x / 10}px ${skew.y + float.y / 10}px 0 #ff0000,
                                 ${Math.max(2, skew.x * 1.5) + float.x / 10}px ${skew.y * 1.5 + float.y / 9}px 0 #00ff00, 
                                 ${Math.max(3, skew.x * 2) + float.x / 10}px ${skew.y * 2 + float.y / 8}px 0 #0000ff, 
                                 ${Math.max(4, skew.x * 2.5) + float.x / 10}px ${skew.y * 2.5 + float.y / 7}px 0 #ffff00`,
                    transform: `skew(${skew.x}deg, ${skew.y}deg) translate(${float.x}px, ${float.y}px)`
                }}>
                {children}
            </span>
        </div>
    )
}

export default TextShowcase;