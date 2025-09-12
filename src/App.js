import logo from './logo.svg';
import './App.css';
import React from 'react';
import { kelvinToCelsius } from './Util';
const apiKey = process.env.REACT_APP_API_KEY;
const styles = {
fontSize: '0.9rem',
 color: 'gray'
}
const styles_2 = {
  marginTop: '20px'
}

function App() {

const [state,setState] = React.useState(null);
const [coordinates,setCoordinates] = React.useState({lat:'',lon:''});
const [hourlyForecast,setHourlyForecast] = React.useState(null);
const [peshawarState,setPeshawarState] = React.useState(null);

React.useEffect(() => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=Karachi&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      setState(data)
      setCoordinates(data.coord)
    })
    .catch(error => console.error('Error fetching weather data:', error));  


  fetch(`https://api.openweathermap.org/data/2.5/weather?q=Peshawar&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      setPeshawarState(data)
    })
    .catch(error => console.error('Error fetching weather data:', error));  


}, []);



  return (
  <div className="app">
  <div className="search-box">
        <input type="text" placeholder="Search city or ZIP" />
        <button>Go</button>
      </div>
    <div className="card">
      
      <div className="weather-main">
        <img src={`https://openweathermap.org/img/wn/${state?.weather[0]?.icon}.png`} alt="weather icon"/>
        <div>
          <div className="temp">{kelvinToCelsius(state?.main?.temp)}°C</div>
          <div>{state?.weather[0]?.main}</div>
          <div style={styles}>{state?.weather[0]?.description}</div>
          <div style={styles}>{state?.name}</div>
        </div>
      </div>
      <div className="info-grid">
        <div>
          <strong>Feels</strong><br/>{kelvinToCelsius(state?.main?.feels_like)}°C
        </div>
        <div>
          <strong>Wind</strong><br/>{state?.wind?.speed} km/h
        </div>
        <div>
          <strong>Humidity</strong><br/>64%
        </div>
      </div>
    </div>


<div className="card">
      <div className="weather-main">
        <img src={`https://openweathermap.org/img/wn/${peshawarState?.weather[0]?.icon}.png`} alt="weather icon"/>
        <div>
          <div className="temp">{kelvinToCelsius(peshawarState?.main?.temp)}°C</div>
          <div>{peshawarState?.weather[0]?.main}</div>
          <div style={styles}>{peshawarState?.weather[0]?.description}</div>
          <div style={styles}>{peshawarState?.name}</div>
        </div>
      </div>
      <div className="info-grid">
        <div>
          <strong>Feels</strong><br/>{kelvinToCelsius(peshawarState?.main?.feels_like)}°C
        </div>
        <div>
          <strong>Wind</strong><br/>{peshawarState?.wind?.speed} km/h
        </div>
        <div>
          <strong>Humidity</strong><br/>64%
        </div>
      </div>
    </div>



{/*     
    <div className="card">
      <h3>Hourly Forecast</h3>
      <div className="forecast">
        <div><div>15:00</div><img src="https://openweathermap.org/img/wn/10d.png" alt=""/><div>32°</div></div>
        <div><div>16:00</div><img src="https://openweathermap.org/img/wn/02d.png" alt=""/><div>33°</div></div>
        <div><div>17:00</div><img src="https://openweathermap.org/img/wn/09d.png" alt=""/><div>31°</div></div>
        <div><div>18:00</div><img src="https://openweathermap.org/img/wn/04d.png" alt=""/><div>29°</div></div>
      </div>

      <h3 style={styles_2}>This Week</h3>
      <ul className="week">
        <li><span>Fri</span> <span>33° / 27°</span></li>
        <li><span>Sat</span> <span>31° / 26°</span></li>
        <li><span>Sun</span> <span>29° / 25°</span></li>
        <li><span>Mon</span> <span>34° / 26°</span></li>
      </ul>
    </div> */}
  </div>



  );
}

export default App;
