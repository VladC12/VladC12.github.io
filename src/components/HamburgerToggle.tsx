import styles from './HamburgerToggle.module.css'

interface Props {
    isActive: boolean;
    setIsActive: (isActive: boolean) => void;
}

const HamburgerToggle: React.FC<Props> = ({isActive, setIsActive}) => {
    return (
        <div onClick={() => setIsActive(!isActive)}
            className={`${styles.hamburger} ${isActive && styles.active}`}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default HamburgerToggle