// __tests__/index.test.js
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /Cerca Immagini con Unsplash/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
