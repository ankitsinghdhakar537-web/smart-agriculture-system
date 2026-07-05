import { useState } from "react";
import "./Weather.css";
import { fetchWeather } from "../services/weatherService";

function Weather() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const API_KEY = "YOUR_OPENWEATHER_API_KEY";

  async function getWeather() {

    if(city==="") return;

    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    const data = await fetchWeather(city);

setWeather(data);

    setWeather(data);

  }

  return(

<section className="weather">

<h2>Live Weather</h2>

<div className="search">

<input

type="text"

placeholder="Enter City"

value={city}

onChange={(e)=>setCity(e.target.value)}

/>

<button onClick={getWeather}>

Search

</button>

</div>

{weather && weather.cod===200 &&(

<div className="weather-card">

<h3>{weather.name}</h3>

<p>🌡 Temperature : {weather.main.temp} °C</p>

<p>💧 Humidity : {weather.main.humidity}%</p>

<p>💨 Wind : {weather.wind.speed} m/s</p>

<p>☁ {weather.weather[0].description}</p>

</div>

)}

</section>

)

}

export default Weather;