import weatherData from '../data/weather.json';
import type { CityWeather } from '../types/weather';

export function getWeatherByCity(
  cityName: string
): CityWeather | undefined {
  const typedWeatherData = weatherData as CityWeather[];

  return typedWeatherData.find(
    city => city.cityName.toLowerCase() === cityName.toLowerCase()
  );
}