import styles from './HamburgerToggle.module.css'

import { useState } from 'react'

const HamburgerToggle = () => {
    const [isActive, setIsActive] = useState(false)

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