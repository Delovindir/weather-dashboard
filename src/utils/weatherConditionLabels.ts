import type { WeatherCondition } from '../types/weather';

export const weatherConditionLabels: Record<WeatherCondition, string> = {
  sunny: 'Sunny',
  cloudy: 'Cloudy',
  rainy: 'Rainy',
  snowy: 'Snowy',
  windy: 'Windy',
  stormy: 'Stormy',
  foggy: 'Foggy',
};