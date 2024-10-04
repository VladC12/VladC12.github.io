import HireButton from "./HireButton";
import Logo from "./Logo";

import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav>
      <Logo />
      <a>Projects</a>
      <HireButton />
      <a>Dark/Light</a>
    </nav>
  );
};

export default Navbar;