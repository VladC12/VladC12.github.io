import styles from "./Showcase.module.css";
import Cradle from "./showcases/Cradle";
import TextShowcase from "./showcases/TextShowcase";

import DefaultShowcase from "./showcases/TextShowcase";
import { useEffect, useState } from "react";

interface Props {
    showcase: string;
}

const Showcase: React.FC<Props> = ({ showcase }) => {
    const [displayValue, setDisplayValue] = useState<React.ReactNode>("default");
    const [previousShowcase, setPreviousShowcase] = useState("");
    const [animation, setAnimation] = useState("");

    const displayShowcase = () => {
        switch (showcase) {
            case 'cradle':
                setPreviousShowcase(showcase);
                return <Cradle />;
            case 'quartermaster':
            case 'caster':
            case 'event-manager':
            case 'event-watcher':
            case 'continental':
            case 'innovation-labs':
            case 'thesis':
            case 'modbus':
            case 'edge-detection':
                setPreviousShowcase(showcase);
                return showcase;
            default:
                return (
                    <TextShowcase>
                        Welcome! <br />Hover over a project to see more details.
                    </TextShowcase>)
        }
    };

    useEffect(() => {
        if (showcase == "left") {
            // When leaving a project card start leaving animation
            // After 10s, animate the default showcase in
            const timer = setTimeout(() => {
                setAnimation(styles.comeOut);
                const innerTimer = setTimeout(() => {
                    setDisplayValue(<DefaultShowcase />);
                    setPreviousShowcase("left")
                    setAnimation(styles.comeIn);
                }, 500)
                return () => {
                    clearTimeout(innerTimer);
                }
            }, 10000);

            return () => {
                clearTimeout(timer);
            }

        } else if (showcase != "landing" && showcase != previousShowcase) {
            // When entering a project card start leaving animation for the previous showcase
            // After 400ms, animate the new showcase in
            // If the showcase is the same as the previous one
            // Or if it's the initial page state, do nothing
            setAnimation(styles.comeOut);
            const timer = setTimeout(() => {
                setDisplayValue(displayShowcase());
                setAnimation(styles.comeIn);
            }, 400);

            return () => {
                clearTimeout(timer);
            }

        } else {
            setAnimation("")
            setDisplayValue(displayShowcase());
        }
    }, [showcase]);

    return (
        <div className={`${styles.container} ${animation}`}>{displayValue}</div>
    )
}

export default Showcase
