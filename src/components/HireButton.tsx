import { useContext } from 'react';
import styles from './HireButton.module.css';
import HireMeAd from './HireMeAd';
import { ThemeContext } from '../context/ThemeContext';

const HireButton: React.FC = () => {
    const { isMobile } = useContext(ThemeContext);

    return (
        <div className={styles.container}>
            {!isMobile && <HireMeAd />}
            <div className={styles.buttons}>
                <a href="https://github.com/VladC12" target="_blank" rel="noopener noreferrer">
                    <img src="/github-mark.svg" alt="GitHub" className={styles.icon} />
                </a>
                <a href="https://www.linkedin.com/in/crehulvlad/" target="_blank" rel="noopener noreferrer">
                    <img src="/linkedin.svg" alt="LinkedIn" className={styles.icon} />
                </a>
                <a href="mailto:vladcrehul12@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img src="/email.svg" alt="Email" className={styles.icon} />
                </a>
                <a href = "/cv_crehulvlad.pdf" download>
                    <img src="/resume.svg" alt="Resume" className={styles.icon}/>
                </a>
            </div>
        </div>
    );
};

export default HireButton;