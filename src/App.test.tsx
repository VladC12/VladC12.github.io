import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import App from './App';

// Mock the Navbar and CurriculumVitae components
vi.mock('./components/Navbar', () => ({
  default: () => <div>Mocked Navbar</div>,
}));

vi.mock('./components/CurriculumVitae', () => ({
  default: () => <div>Mocked CurriculumVitae</div>,
}));

vi.mock('./components/AnimatedBackground', () => ({
  default: () => <div>Mocked AnimatedBackground</div>,
}));

describe('App Component', () => {
  it('renders correctly', async () => {
    render(<App />);
    expect(screen.getByText('Mocked Navbar')).toBeInTheDocument();
    expect(screen.getByText('Mocked CurriculumVitae')).toBeInTheDocument();
    
    // Wait for the lazy-loaded AnimatedBackground to appear (100ms delay + lazy loading)
    await waitFor(() => {
      expect(screen.getByText('Mocked AnimatedBackground')).toBeInTheDocument();
    }, { timeout: 500 });
  });
});