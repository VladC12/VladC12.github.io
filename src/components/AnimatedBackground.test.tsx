import { describe, it, expect } from 'vitest';
import { generatePoints, getRandomColor } from './AnimatedBackground';

describe('Generate points', () => {
    it('should generate points', () => {
        const points = generatePoints(100, 100, 100);
        expect(points.length).toBe(100);
    });
});

describe('Get random color', () => {
    it('should generate a random color', () => {
        const color = getRandomColor(true);
        expect(color).toMatch(/^#[0-9a-f]{6}$/i);
    });
});