import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ShowcaseCard, { calculateTransform } from './ShowcaseCard';

const mockItems = [
    { imgSrc: 'path/to/image1.png', text: 'Item 1' },
    { imgSrc: 'path/to/image2.png', text: 'Item 2' },
    { imgSrc: 'path/to/image3.png', text: 'Item 3' },
];

describe('calculateTransform', () => {
    it('calculates the correct transform for the first item', () => {
        const index = 0;
        const childrenItemsLength = 3;
        const zoomFactor = 1.3;
        const expectedTransform = 'scale(1.6666666666666665) translate(-10vw, 2.5vh)';
        const result = calculateTransform(index, childrenItemsLength, zoomFactor);
        expect(result).toBe(expectedTransform);
    });
});

describe('ShowcaseCard', () => {
    it('renders without crashing', () => {
        render(<ShowcaseCard childrenItems={mockItems} />);
        const elements = screen.getAllByRole('img');
        expect(elements.length).toBe(mockItems.length);
    });

    it('displays the correct text for each item', () => {
        render(<ShowcaseCard childrenItems={mockItems} />);
        mockItems.forEach(item => {
            expect(screen.getByText(item.text)).toBeInTheDocument();
        });
    });

    it('applies the correct transform style on hover', () => {
        render(<ShowcaseCard childrenItems={mockItems} />);
        const firstItem = screen.getByText(mockItems[0].text).parentElement;
        fireEvent.mouseEnter(firstItem!);
        expect(firstItem).toHaveStyle('z-index: 99');
        const expectedTransform = calculateTransform(0, mockItems.length, 1.3);
        expect(firstItem).toHaveStyle(`transform: ${expectedTransform}`);
    });

    it('removes the transform style on mouse leave', () => {
        render(<ShowcaseCard childrenItems={mockItems} />);
        const firstItem = screen.getByText(mockItems[0].text).parentElement;
        fireEvent.mouseEnter(firstItem!);
        fireEvent.mouseLeave(firstItem!);
        expect(firstItem).not.toHaveStyle('z-index: 99');
        expect(firstItem).not.toHaveStyle('transform: scale(1.3) translate(-10vw, 5vh)');
    });
});