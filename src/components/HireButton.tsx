import styles from './HireButton.module.css';
import HireMeAd from './HireMeAd';

const HireButton: React.FC = () => {
    return (
        <div className={styles.container}>
            <HireMeAd/>
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
            </div>
        </div>
    );
};

export default HireButton;