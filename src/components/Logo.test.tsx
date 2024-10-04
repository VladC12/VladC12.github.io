import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Logo from './Logo';

describe('Logo Component', () => {
    it('renders correctly', () => {
        render(<Logo />);
        expect(screen.getByText('C')).toBeInTheDocument();
        expect(screen.getByText('V')).toBeInTheDocument();
    });

    it('expands on hover', () => {
        render(<Logo />);
        const logoElement = screen.getByText('C').parentElement;

        expect(logoElement).toHaveStyle({ width: '3.5em' });

        fireEvent.mouseEnter(logoElement!);
        expect(logoElement).toHaveStyle({ width: '5em' });

        fireEvent.mouseLeave(logoElement!);
        expect(logoElement).toHaveStyle({ width: '3.5em' });
    });
});