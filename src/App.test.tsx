import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('App', () => {
  it('should display the Weather Dashboard heading', () => {
    render(<App />);
    
    expect(screen.getByRole('heading', { name: /weather dashboard/i })).toBeInTheDocument();
  });

  it('should render the city search input and button', () => {
    render(<App />);
    
    expect(screen.getByRole('textbox', { name: /city/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });

  it('should display weather information after searching for a city', async () => {
    render(<App />);
    const cityInput = screen.getByRole('textbox', { name: /city/i });
    const searchButton = screen.getByRole('button', { name: /search/i });
    const user = userEvent.setup();
    
    await user.type(cityInput, 'Prague');
    await user.click(searchButton);

    expect(screen.getByRole('heading', { name: /prague/i })).toBeInTheDocument();
    expect(screen.getByText('18°C')).toBeInTheDocument();
  });

  it('should display an error message when a city is not found', async () => {
   render(<App />);
    const cityInput = screen.getByRole('textbox', { name: /city/i });
    const searchButton = screen.getByRole('button', { name: /search/i });
    const user = userEvent.setup();
  // Act
    await user.type(cityInput, 'Atlantis');
    await user.click(searchButton);

  // Assert
    expect(screen.getByText(/couldn't find weather information/i)).toBeInTheDocument();
  });
});