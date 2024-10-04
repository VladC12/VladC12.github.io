import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import App from './App';

// Mock the Navbar and CurriculumVitae components
vi.mock('./components/Navbar', () => ({
  default: () => <div>Mocked Navbar</div>,
}));

vi.mock('./components/CurriculumVitae', () => ({
  default: () => <div>Mocked CurriculumVitae</div>,
}));

describe('App Component', () => {
  it('renders correctly', () => {
    render(<App />);
    expect(screen.getByText('Mocked Navbar')).toBeInTheDocument();
    expect(screen.getByText('Mocked CurriculumVitae')).toBeInTheDocument();
  });
});