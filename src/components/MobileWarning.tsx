import { useState, useEffect } from 'react';
import styles from './MobileWarning.module.css';

const MobileWarning = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isClosing, setIsClosing] = useState(false);
    const DISMISS_TIMEOUT = 15000; // 15 seconds

    useEffect(() => {
        // const hasSeenWarning = localStorage.getItem('hasSeenMobileWarning');
        // if (hasSeenWarning) {
            // setIsVisible(false);
            // return;
        // }

        // Auto dismiss timer
        const timer = setTimeout(() => {
            handleDismiss();
        }, DISMISS_TIMEOUT);

        // Cleanup timer if component unmounts or modal is dismissed early
        return () => clearTimeout(timer);
    }, []);

    const handleDismiss = () => {
        setIsClosing(true);
        setTimeout(() => {
            localStorage.setItem('hasSeenMobileWarning', 'true');
            setIsVisible(false);
        }, 300); // Match animation duration
    };

    if (!isVisible) return null;

    return (
        <div className={`${styles.overlay} ${isClosing ? styles.fadeOut : ''}`}>
            <div className={`${styles.modal} ${isClosing ? styles.slideOut : ''}`}>
                <h2>👋 Hey there!</h2>
                <p>
                    For the best experience, I recommend viewing this portfolio on a desktop browser.
                    The desktop version includes additional features like interactive project showcases!
                </p>
                <button onClick={handleDismiss}>Got it!</button>
            </div>
        </div>
    );
};

export default MobileWarning;
