# Weather Dashboard

Made with: React + Vite

This project is inspired by a chalenge I once did for an job application. It is a simple weather dashboard to display fake weather for 12 towns. This project was made to showcase my knowlegde of a React front-end application.

Current state: In Development.

## How it works:
1. You look up a town for its weather forecast.
2. If found, display the weather data:
  a. Weather details throughout the current day.
  b. Five day weather prediction
  c. Rainforcast
  d. Air quality index
  e. wind direction and speed
3. If not found, show error message: town not found.
4. Successful finds are stored in a history list.
5. Users can click on the previously searched cities for their weather forecast.
6. Users can clear search history.

## File structure
weather-dashboard/
├── public/
├── src/
│   ├── components/
│   │   ├── CitySearch/
│   │   ├── WeatherCard/
│   │   ├── ForecastCard/
│   │   └── SearchHistory/
│   ├── data/
│   │   └── weather.json
│   ├── hooks/
│   │   └── useWeatherSearch.ts
│   ├── services/
│   │   └── weatherService.ts
│   ├── types/
│   │   └── weather.ts
│   ├── App.tsx
│   └── main.tsx
├── tests/
├── README.md
└── package.json

## Approach
I decided to work on it with Test-Driven Development (TDD) in mind. Therefore I created the unit test first. Using Vitest. 