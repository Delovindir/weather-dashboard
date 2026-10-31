import type { CityWeather } from '../types/weather';

export const weatherData = [
    {
        cityName: 'Prague',
        country: 'Czech Republic',
        currentWeather: {
            temperature: 18,
            humidity: 65,
            windSpeed: 5,
            weatherCondition: 'sunny'
        },
        forecast: [
            {
                date: '2026-06-01',
                minimumTemperature: 15,
                maximumTemperature: 22,
                weatherCondition: 'sunny'
            },
            {
                date: '2026-06-02',
                minimumTemperature: 16,
                maximumTemperature: 23,
                weatherCondition: 'cloudy'
            },
            {
                date: '2026-06-03',
                minimumTemperature: 14,
                maximumTemperature: 21,
                weatherCondition: 'rainy'
            },
            {
                date: '2026-06-04',
                minimumTemperature: 13,
                maximumTemperature: 20,
                weatherCondition: 'windy'
            },
            {
                date: '2026-06-05',
                minimumTemperature: 15,
                maximumTemperature: 22,
                weatherCondition: 'sunny'
            }
        ]
    },
    {
        cityName: 'Amsterdam',
        country: 'Netherlands',
        currentWeather: {
            temperature: 15,
            humidity: 70,
            windSpeed: 10,
            weatherCondition: 'cloudy'
        },
        forecast: [
            {
                date: '2026-06-01',
                minimumTemperature: 10,
                maximumTemperature: 16,
                weatherCondition: 'rainy'
            },
            {
                date: '2026-06-02',
                minimumTemperature: 9,
                maximumTemperature: 15,
                weatherCondition: 'stormy'
            },
            {
                date: '2026-06-03',
                minimumTemperature: 7,
                maximumTemperature: 15,
                weatherCondition: 'rainy'
            },
            {
                date: '2026-06-04',
                minimumTemperature: 6,
                maximumTemperature: 13,
                weatherCondition: 'snowy'
            },
            {
                date: '2026-06-05',
                minimumTemperature: 8,
                maximumTemperature: 15,
                weatherCondition: 'foggy'
            }
        ]
    },
    {
        cityName: 'Berlin',
        country: 'Germany',
        currentWeather: {
            temperature: 20,
            humidity: 60,
            windSpeed: 7,
            weatherCondition: 'sunny'
        },
        forecast: [
            {
                date: '2026-06-01',
                minimumTemperature: 14,
                maximumTemperature: 21,
                weatherCondition: 'sunny'
            },
            {
                date: '2026-06-02',
                minimumTemperature: 15,
                maximumTemperature: 22,
                weatherCondition: 'cloudy'
            },
            {
                date: '2026-06-03',
                minimumTemperature: 13,
                maximumTemperature: 20,
                weatherCondition: 'rainy'
            },
            {
                date: '2026-06-04',
                minimumTemperature: 12,
                maximumTemperature: 19,
                weatherCondition: 'windy'
            },
            {
                date: '2026-06-05',
                minimumTemperature: 14,
                maximumTemperature: 21,
                weatherCondition: 'sunny'
            }
        ]
    }
] satisfies CityWeather[];