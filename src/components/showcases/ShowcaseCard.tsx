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

export const calculateTransform = (index: number, childrenItemsLength: number, zoomFactor: number) => {
    const middleIndex = childrenItemsLength / 2;
    const offsetY = (middleIndex - index) * 5 - 5;
    return `scale(${Math.max(childrenItemsLength / 1.8, zoomFactor)}) translate(-10vw, ${offsetY}vh)`;
};

const ShowcaseCard: React.FC<Props> = ({ childrenItems, zoomFactor = 1.3 }) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            data-testid="showcase-card"
            className={styles.container}>
            {childrenItems.map((item, index) => (
                <div
                    key={index}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={hoveredIndex === index ? {
                        zIndex: 99,
                        transform: calculateTransform(index, childrenItems.length, zoomFactor)
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