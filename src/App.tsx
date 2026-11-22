import weatherIcon from './assets/partly-cloudy-day-256.png'
import './App.css'
import { CitySearch } from './components/CitySearch'
import { WeatherDisplay } from './components/WeatherDisplay'
import type { CityWeather } from './types/weather';
import { getWeatherByCity } from './services/weatherService';
import { useState } from 'react';

function App() {
  const [weather, setWeather] = useState<CityWeather | undefined>();
  const [error, setError] = useState<string | undefined>();
 
  function handleSearch(cityName: string) {
    const result = getWeatherByCity(cityName);
    if (!result) {
      setError(`couldn't find weather information for ${cityName}.`);
      setWeather(undefined);
      return;
    }
    setError(undefined);
    setWeather(result);
  }
  
  return (
    <>
      <section id="center">
        <div>
          <div id="dashboardheader">
            <img className="logo" src={weatherIcon} alt="" />
            <h1>Weather Dashboard</h1>
          </div>

          <p>
            Search for a town to explore its weather conditions.
          </p>
        </div>

        <div id="search-section">
          <CitySearch onSearch={handleSearch} />
        </div>
        {weather && <WeatherDisplay weather={weather} />}
        {error && <p role="alert">{error}</p>}
        <div id="disclaimer">
          <p>
            * This is a demo weather dashboard. Data may not be accurate.
          </p>
        </div>
      </section>
    </>
  )
}

export default App
