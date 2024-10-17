import HireButton from "./HireButton";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

import styles from "./Navbar.module.css";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import HamburgerToggle from "./HamburgerToggle";

const Navbar: React.FC = () => {

  const { isMobile } = useContext(ThemeContext);
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.container}>
      {isMobile ?
        <>
          <nav>
            <ThemeToggle />
            <HamburgerToggle isActive={isActive} setIsActive={setIsActive} />
          </nav>
          <div className={`${styles.hamMenu} ${!isActive && styles.active}`}>
            <HireButton />
          </div>
        </>
        :
        <nav>
          <Logo />
          <a style={{ cursor: "wait", fontWeight: "bolder" }}>Portfolio: Coming Soon ...</a>
          <HireButton />
          <ThemeToggle />
        </nav>}

    </div>
  );
};

export default Navbar;