export type WeatherCondition = 
  | 'sunny' 
  | 'cloudy' 
  | 'rainy' 
  | 'snowy' 
  | 'windy' 
  | 'stormy' 
  | 'foggy';

export interface CurrentWeather {
  /** in Celsius */
  temperature: number;
  
  /** in percentage (0-100) */
  humidity: number;
  
  /** in km/h */
  windSpeed: number;
  weatherCondition: WeatherCondition;
}

export interface DailyForecast {
  /** in the format 'YYYY-MM-DD' */
  date: string;

  /** in Celsius */
  minimumTemperature: number;
  
  /** in Celsius */
  maximumTemperature: number;
  weatherCondition: WeatherCondition;
}

export interface CityWeather {
  cityName: string;
  country: string;
  currentWeather: CurrentWeather;
  forecast: DailyForecast[];
}