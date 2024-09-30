import HireButton from "./HireButton";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav>
      <a>Crehul Vlad</a>
      <a>Projects</a>
      <HireButton />
      <a>Dark/Light</a>
    </nav>
  );
};

export default Navbar;