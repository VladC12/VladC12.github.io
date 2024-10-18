import React, { useState } from 'react';
import styles from './ShowcaseCard.module.css';

interface ShowcaseItem {
    imgSrc: string;
    text: string;
}

interface Props {
    childrenItems: ShowcaseItem[];
    zoomFactor?: number;
}

const ShowcaseCard: React.FC<Props> = ({ childrenItems, zoomFactor = 1.3 }) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const calculateTransform = (index: number) => {
        const middleIndex = childrenItems.length / 2;
        const offsetY = (middleIndex - index) * 5 - 5;
        
        return `scale(${Math.max(childrenItems.length / 1.8, zoomFactor)}) translate(-10vw, ${offsetY}vh)`;
    };

    return (
        <div className={styles.container}>
            {childrenItems.map((item, index) => (
                <div
                    key={index}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={hoveredIndex === index ? {
                        zIndex: 99,
                        transform: calculateTransform(index),
                        backgroundColor: 'var(--background-color-glass)',
                        borderRadius: '20px',
                        backdropFilter: `blur(3px)`
                    } : {}}
                >
                    <img style={{ animationDelay: `${Math.random() * -5}s` }} src={item.imgSrc} alt="image not found" />
                    <span style={{ animationDelay: `${Math.random() * -5}s` }}> {item.text}</span>
                </div>
            ))}
        </div>
    );
}

export default ShowcaseCard;