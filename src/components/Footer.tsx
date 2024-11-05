import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p>&copy; {new Date().getFullYear()} Vlad Crehul. All rights reserved, but if you wanna take a peek inside:</p>
                <a href="https://github.com/VladC12/VladC12.github.io" target="_blank" rel="noopener noreferrer">Click Here</a>
            </div>
        </footer>
    );
};

export default Footer;