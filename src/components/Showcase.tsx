import DefaultShowcase from "./showcases/DefaultShowcase";

interface Props {
    showcase: string;
}

const Showcase: React.FC<Props> = ({ showcase }) => {
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

    const displayValue = displayShowcase();

    return (
        <>{displayValue}</>
    )
}

export default Showcase
