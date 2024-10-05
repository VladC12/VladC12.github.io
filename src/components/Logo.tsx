import { useState } from "react";
import "./Logo.module.css";

const Logo: React.FC = () => {
    const [hoverWidth, setHoverWidth] = useState({width: "3.5em"});

    return (
        <div className="logo"
            onMouseEnter={() => setHoverWidth({width: "5em"})}
            onMouseLeave={() => setHoverWidth({width: "3.5em"})}>
                
            <div className="unfolding-letter" style={hoverWidth}>
                <span>C</span>
                <span style={{ letterSpacing: "-0.35em", marginTop: "-0.3em" }}>rehul</span>
            </div>
            <div className="unfolding-letter" style={hoverWidth}>
                <span>V</span>
                <span style={{ fontSize: "1.2em", marginTop: "-0.1em" }}>lad</span>
            </div>
        </div >
    );
};

export default Logo;