import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ContentShowcase from './ContentShowcase';

describe('ContentShowcase', () => {
    it('renders without crashing', () => {
        render(<ContentShowcase />);
        const element = screen.getByTestId('content-showcase');
        expect(element).toBeInTheDocument();
    });

    it('displays the correct children', () => {
        const content = 'Test Content';
        render(<ContentShowcase>{content}</ContentShowcase>);
        const element = screen.getByText(content);
        expect(element).toBeInTheDocument();
    });

    it('applies the correct initial transform style', () => {
        render(<ContentShowcase />);
        const element = screen.getByTestId('content-showcase');
        expect(element).toHaveStyle('transform: skew(0deg, 0deg) translate(0px, 0px)');
    });
});