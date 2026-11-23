import type { CityWeather } from '../types/weather';
import { weatherConditionLabels } from '../utils/weatherConditionLabels';

type WeatherDisplayProps = {
  weather: CityWeather;
};

export function WeatherDisplay({ weather }: WeatherDisplayProps) {
  return (
    <div>
      <h2>{weather.cityName}</h2>
      <p>{weather.country}</p>
      <p>{weather.currentWeather.temperature}°C</p>
      <p>Humidity: {weather.currentWeather.humidity}%</p>
      <p>Wind speed: {weather.currentWeather.windSpeed} km/h</p>
      <p>Condition: {weatherConditionLabels[weather.currentWeather.weatherCondition]}</p>
    </div>
  );
}