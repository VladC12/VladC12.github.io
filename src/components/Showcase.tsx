import DefaultShowcase from "./showcases/DefaultShowcase";
import { useEffect, useState } from "react";

interface Props {
    showcase: string;
}

const Showcase: React.FC<Props> = ({ showcase }) => {
    const [displayValue, setDisplayValue] = useState<React.ReactNode>("default");

    const displayShowcase = () => {
        switch (showcase) {
            case 'cradle':
            case 'quartermaster':
            case 'caster':
            case 'event-manager':
            case 'event-watcher':
            case 'continental':
            case 'innovation-labs':
            case 'thesis':
            case 'modbus':
            case 'edge-detection':
                return showcase;
            default:
                return <DefaultShowcase />;
        }
    };

    useEffect(() => {
        if (showcase == "left") {
            const timer = setTimeout(() => {
                setDisplayValue(<DefaultShowcase />);
            }, 10000);

            return () => clearTimeout(timer);
        } else {
            setDisplayValue(displayShowcase());
        }
    }, [showcase]);

    return (
        <>{displayValue}</>
    )
}

export default Showcase
