import HireButton from "./HireButton";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <div className={styles.container}>
      <nav>
        <Logo />
        <a style={{ cursor: "wait", fontWeight: "bolder" }}>Portfolio: Coming Soon ...</a>
        <HireButton />
        <ThemeToggle />
      </nav>
    </div>
  );
};

export default Navbar;