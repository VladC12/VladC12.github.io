import HireButton from "./HireButton";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav>
      <Logo />
      <a>Projects</a>
      <HireButton />
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;