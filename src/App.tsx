import weatherIcon from './assets/partly-cloudy-day-256.png'
import './App.css'

function App() {
  
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
          <label htmlFor="town-name">Town name</label>

          <div>
            <input id="town-name" type="text" placeholder="Enter town name" />
            <button type="button">Search</button>
          </div>
        </div>
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
