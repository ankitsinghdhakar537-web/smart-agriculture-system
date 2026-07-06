import { useState } from "react";
import "./Weather.css";
import { fetchWeather } from "../Services/weatherService";
import { useWeather } from "../context/WeatherContext";

function Weather() {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);

  const { weather, setWeather } = useWeather();

  async function getWeather() {
    if (city.trim() === "") return;

    setLoading(true);

    const data = await fetchWeather(city);

    setWeather(data);

    setLoading(false);
  }

  return (
    <section className="weather" id="weather">
      <h2>🌦 Live Weather Search</h2>

      <div className="search">
        <input
          type="text"
          placeholder="Enter City Name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button onClick={getWeather}>
          Search
        </button>
      </div>

      {loading && <h3>Loading...</h3>}

      {weather && weather.cod === 200 && (
        <div className="weather-card">
          <h3>📍 {weather.name}</h3>

          <p>🌡 Temperature : {weather.main.temp} °C</p>

          <p>💧 Humidity : {weather.main.humidity}%</p>

          <p>💨 Wind : {weather.wind.speed} m/s</p>

          <p>☁ Weather : {weather.weather[0].description}</p>
        </div>
      )}

      {weather && weather.cod !== 200 && (
        <h3 style={{ color: "red" }}>
          ❌ City Not Found
        </h3>
      )}
    </section>
  );
}

export default Weather;