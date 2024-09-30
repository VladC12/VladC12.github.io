import './HireButton.css';
import HireMeAd from './HireMeAd';

const HireButton: React.FC = () => {
    return (
        <div className="hire-button-container">
            <HireMeAd/>
            <div className="social-buttons">
                <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <img src="/github-mark.svg" alt="GitHub" className="social-icon" />
                </a>
                <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                    <img src="/linkedin.svg" alt="LinkedIn" className="social-icon" />
                </a>
                <a>
                    <img src="/email.svg" alt="Email" className="social-icon" />
                </a>
                <a>
                    <img src="/phone.svg" alt="Phone" className="social-icon" />
                </a>
            </div>
        </div>
    );
};

export default HireButton;