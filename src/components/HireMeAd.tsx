import { useState, useEffect, useRef } from 'react';
import styles from './HireMeAd.module.css';

const HireMeAd: React.FC = () => {
    const contentList = ["Hire Me", "Let's Work Together", "Contact Me", "I'm Available", "Let's Get In Touch"];

    const [textContent, setTextContent] = useState(contentList[0]);
    const [maxWidth, setMaxWidth] = useState(0);
    const [animationClass, setAnimationClass] = useState(styles.fadeIn);
    const spanRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        // Change the text content every 5 seconds
        const interval = setInterval(() => {
            setAnimationClass(styles.fadeOut);
            // Wait for the fade-out animation to complete before changing the text content
            setTimeout(() => {
                setTextContent(prev => {
                    const currentIndex = contentList.indexOf(prev);
                    const nextIndex = (currentIndex + 1) % contentList.length;
                    return contentList[nextIndex];
                });
                // Reset the animation class to trigger the fade-in animation
                setAnimationClass(styles.fadeIn);
            }, 500); // Match the duration of the fade-in/fade-out animation
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (spanRef.current) {
            // Calculate the maximum width of the content
            const widths = contentList.map(text => {
                // Measure the width of the invisible span with the text content
                spanRef.current!.textContent = text;
                return spanRef.current!.offsetWidth;
            });
            setMaxWidth(Math.max(...widths));
        }
    }, [contentList]);

    return (
        <div className={styles.container} style={{ width: maxWidth }}>
            <span className={animationClass}>{textContent}</span>
            <span ref={spanRef} style={{ visibility: 'hidden', position: 'absolute', whiteSpace: 'nowrap' }}></span>
        </div>
    );
}

export default HireMeAd;