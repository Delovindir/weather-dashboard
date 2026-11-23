import {render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import {WeatherDisplay} from './WeatherDisplay';
import type { CityWeather } from '../types/weather';

const mockWeather: CityWeather = {
  cityName: 'Gouda',
  country: 'Netherlands',
  currentWeather: {
    temperature: 22,
    humidity: 65,
    windSpeed: 12,
    weatherCondition: 'sunny',
  },
  forecast: [],
};

describe('WeatherDisplay', () => {
  it('should display the city name, country and current temperature', () => {
    render(<WeatherDisplay weather={mockWeather} />);

    expect(screen.getByRole('heading', { name: /Gouda/i })).toBeInTheDocument();
    expect(screen.getByText(/Netherlands/i)).toBeInTheDocument();
    expect(screen.getByText('22°C')).toBeInTheDocument();
  });

  it('should display the current humidity', () => {
    render(<WeatherDisplay weather={mockWeather} />);

    expect(screen.getByText('Humidity: 65%')).toBeInTheDocument();
  });

  it('should display the current wind speed', () => {
    render(<WeatherDisplay weather={mockWeather} />);

    expect(screen.getByText('Wind speed: 12 km/h')).toBeInTheDocument();
  });

  it('should display the current weather condition', () => {
    render(<WeatherDisplay weather={mockWeather} />);

    expect(screen.getByText('Condition: Sunny')).toBeInTheDocument();
  });
}); 