import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TextShowcase from './TextShowcase';

describe('TextShowcase', () => {
    it('renders without crashing', () => {
        render(<TextShowcase>Test Content</TextShowcase>);
        const element = screen.getByText('Test Content');
        expect(element).toBeInTheDocument();
    });

    it('displays the correct children', () => {
        const content = 'Test Content';
        render(<TextShowcase>{content}</TextShowcase>);
        const element = screen.getByText(content);
        expect(element).toBeInTheDocument();
    });

    it('applies the correct initial transform style', () => {
        render(<TextShowcase>Test Content</TextShowcase>);
        const element = screen.getByText('Test Content');
        expect(element).toHaveStyle('transform: skew(0deg, 0deg) translate(0px, 0px)');
    });

    it('updates the transform style on mouse move', () => {
        render(<TextShowcase>Test Content</TextShowcase>);
        const element = screen.getByText('Test Content').parentElement;
        fireEvent.mouseMove(window, { clientX: 100, clientY: 100 });
        expect(element).not.toHaveStyle('transform: skew(0deg, 0deg) translate(0px, 0px)');
    });

    it('updates the transform style on scroll', () => {
        render(<TextShowcase>Test Content</TextShowcase>);
        const element = screen.getByText('Test Content').parentElement;
        fireEvent.scroll(window, { target: { scrollY: 100 } });
        expect(element).not.toHaveStyle('transform: skew(0deg, 0deg) translate(0px, 0px)');
    });
});