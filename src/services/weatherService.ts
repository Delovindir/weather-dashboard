import { weatherData } from '../data/weatherData.ts';
import type { CityWeather } from '../types/weather';

export function getWeatherByCity(
  cityName: string
): CityWeather | undefined {
  const searchTerm = cityName.trim().toLowerCase();

  return weatherData.find(
    city => city.cityName.toLowerCase() === searchTerm
  );
}