import { describe, it, expect } from 'vitest';
import { getWeatherByCity } from './weatherService';

describe('getWeatherByCity', () => {
  it('should return weather data for an existing city', () => {
    const cityName = 'Prague';

    const result = getWeatherByCity(cityName);

     expect(result).toBeDefined();
    expect(result?.cityName).toBe('Prague');
  });

  it('should return undefined for a non-existing city', () => {
    
    const cityName = 'Atlantis';

    const result = getWeatherByCity(cityName);

     expect(result).toBeUndefined();
  });

  it('should return weather data with correct structure', () => {
    const cityName = 'Prague';

    const result = getWeatherByCity(cityName);

    expect(result).toBeDefined();
    expect(result?.cityName).toBe('Prague');
    expect(result?.currentWeather.temperature).toBe(18);
    expect(result?.currentWeather.weatherCondition).toBe('sunny');
    expect(result?.forecast).toHaveLength(5);
  });

  it('should return weather data for a city name regardless of case', () => {
    const cityName = 'prAguE';

    const result = getWeatherByCity(cityName);

    expect(result).toBeDefined();
    expect(result?.cityName).toBe('Prague');
  });

  it('should return weather data for a city name with trailing and leading spaces', () => {
    const cityName = '  Prague  ';

    const result = getWeatherByCity(cityName);

    expect(result).toBeDefined();
    expect(result?.cityName).toBe('Prague');
  });

  it('should return undefined for an empty city name', () => {
    const cityName = '';

    const result = getWeatherByCity(cityName);

    expect(result).toBeUndefined();
  });
});