import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import HireMeAd from './HireMeAd';

describe('HireMeAd Component', () => {
    it('renders correctly', () => {
        render(<HireMeAd />);
        expect(screen.getByText('Hire Me')).toBeInTheDocument();
    });

    it('changes text content every 5 seconds', () => {
        // 5500 to account for delays from animation
        const waitTime = 5500;

        vi.useFakeTimers();
        render(<HireMeAd />);

        const initialText = screen.getByText('Hire Me');
        expect(initialText).toBeInTheDocument();

        act(() => {
            vi.advanceTimersByTime(waitTime);
        });
        const nextText = screen.getByText("Let's Work Together");
        expect(nextText).toBeInTheDocument();

        act(() => {
            vi.advanceTimersByTime(waitTime);
        });
        const thirdText = screen.getByText('Contact Me');
        expect(thirdText).toBeInTheDocument();

        vi.useRealTimers();
    });

    it('applies fade-in and fade-out animations correctly', () => {
        vi.useFakeTimers();
        render(<HireMeAd />);

        const textElement = screen.getByText('Hire Me');
        expect(textElement).toHaveClass('fade-in');

        act(() => {
            vi.advanceTimersByTime(5000);
        });
        expect(textElement).toHaveClass('fade-out');

        act(() => {
            vi.advanceTimersByTime(500);
        });
        expect(textElement).toHaveClass('fade-in');

        vi.useRealTimers();
    });
});