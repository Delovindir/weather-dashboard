import type { CityWeather } from '../types/weather';

type WeatherDisplayProps = {
  weather: CityWeather;
};

export function WeatherDisplay({ weather }: WeatherDisplayProps) {
  return (
    <div>
      <h2>{weather.cityName}</h2>
      <p>{weather.currentWeather.temperature}°C</p>
    </div>
  );
}