import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import {searchForCity} from './test/helpers/searchForCity.tsx';
import App from './App';
import userEvent from '@testing-library/user-event';

function setup() {
  render(<App />);
  const user = userEvent.setup();

  return { user };
}

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
    const { user } = setup();
    
    await searchForCity(user, 'Prague');

    expect(screen.getByRole('heading', { name: /prague/i })).toBeInTheDocument();
    expect(screen.getByText('18°C')).toBeInTheDocument();
  });

  it('should display an error message when a city is not found', async () => {
    const { user } = setup();
    
  // Act
    await searchForCity(user, 'Atlantis');

  // Assert
    expect(screen.getByText(/couldn't find weather information/i)).toBeInTheDocument();
  });

  it('should clear previous weather when searching for an unknown city', async () => {
    const { user } = setup();
    
    // Act: Search for Prague
    await searchForCity(user, 'Prague');

    // Assert: Prague's weather is displayed
    expect(screen.getByRole('heading', { name: /prague/i })).toBeInTheDocument();
    expect(screen.getByText('18°C')).toBeInTheDocument();

    // Act: Search for Atlantis
    await searchForCity(user, 'Atlantis');

    // Assert: Error is displayed and Prague's weather is gone
      expect(screen.getByText(/couldn't find weather information/i)).toBeInTheDocument();
      expect(screen.queryByRole('heading', { name: /prague/i })).not.toBeInTheDocument();
  });

  it('should clear error when searching for a known city', async () => {
    const { user } = setup();

    // Act: Search for Atlantis
    await searchForCity(user, 'Atlantis');

    // Assert: Atlantis's error is displayed
    expect(screen.getByText(/couldn't find weather information/i)).toBeInTheDocument();

    // Act: Search for Berlin
    await searchForCity(user, 'Berlin');

    // Assert: Berlin's weather is displayed and error is cleared
      expect(screen.queryByText(/couldn't find weather information/i)).not.toBeInTheDocument();
      expect(screen.getByRole('heading', { name: /berlin/i })).toBeInTheDocument();
  });
});