import styles from "./Showcase.module.css";
import ContentShowcase from "./showcases/ContentShowcase";
import TextShowcase from "./showcases/TextShowcase";

import { useEffect, useState } from "react";

interface Props {
    showcase: string;
}

const Showcase: React.FC<Props> = ({ showcase }) => {
    const WelcomeShowcase = (
        <TextShowcase>
            Welcome! <br />Hover over a project to see more details.
        </TextShowcase>)

    const [displayValue, setDisplayValue] = useState<React.ReactNode>(WelcomeShowcase);
    const [previousShowcase, setPreviousShowcase] = useState("");
    const [animation, setAnimation] = useState("");

    const ProjectShowcase = (showcase: string, children: any) => {
        setPreviousShowcase(showcase);
        return (
            <ContentShowcase>
                {children}
            </ContentShowcase>
        )
    }

    const displayShowcase = () => {
        switch (showcase) {
            case 'cradle':
                return ProjectShowcase(showcase, "Cradle");
            case 'quartermaster':
                return ProjectShowcase(showcase, "Quartermaster");
            case 'caster':
                return ProjectShowcase(showcase, "Caster");
            case 'event-manager':
                return ProjectShowcase(showcase, "Event Manager");
            case 'event-watcher':
                return ProjectShowcase(showcase, "Event Watcher");
            case 'continental':
                return ProjectShowcase(showcase, "Continental");
            case 'innovation-labs':
                return ProjectShowcase(showcase, "Innovation Labs");
            case 'thesis':
                return ProjectShowcase(showcase, "Tacotron");
            case 'modbus':
                return ProjectShowcase(showcase, "IOT Modbus");
            case 'edge-detection':
                return ProjectShowcase(showcase, "Edge Detection");
            default:
                return WelcomeShowcase
        }
    };

    useEffect(() => {
        if (showcase == "left") {
            // When leaving a project card start leaving animation
            // After 10s, animate the default showcase in
            const timer = setTimeout(() => {
                setAnimation(styles.comeOut);
                const innerTimer = setTimeout(() => {
                    setDisplayValue(WelcomeShowcase);
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
                setAnimation(styles.comeIn);
                setDisplayValue(displayShowcase());
            }, 400);

            return () => {
                // Ensure even if animation does not finish, the showcase is displayed
                clearTimeout(timer);
                setAnimation(styles.comeIn);
                setDisplayValue(displayShowcase());
            }

        } else {
            setDisplayValue(displayShowcase());
        }
    }, [showcase]);

    return (
        <div className={`${styles.container} ${animation}`}>{displayValue}</div>
    )
}

export default Showcase
