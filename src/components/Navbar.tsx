import HireButton from "./HireButton";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav>
      <Logo />
      <a style={{cursor: "wait", fontWeight: "bolder"}}>Projects: Work In Progres</a>
      <HireButton />
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;