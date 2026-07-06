import "./FarmerDashboard.css";
import { useWeather } from "../context/WeatherContext";

function FarmerDashboard() {

  const { weather } = useWeather();

  if (!weather || weather.cod !== 200) {
    return (
      <section className="farmer" id="dashboard">
        <h2>👨‍🌾 Farmer Dashboard</h2>
        <p style={{ textAlign: "center" }}>
          Search a city above to view dashboard.
        </p>
      </section>
    );
  }

  const temp = weather.main.temp;
  const humidity = weather.main.humidity;
  const wind = weather.wind.speed;
  const weatherType = weather.weather[0].main;

  // Crop Logic
  let crop = "";

  if (temp < 20) {
    crop = "Wheat 🌾";
  } else if (temp < 30) {
    crop = "Soybean 🌱";
  } else {
    crop = "Cotton 🌿";
  }

  // Motor Logic
  let motor = humidity < 40 ? "🟢 ON" : "🔴 OFF";

  return (

    <section className="farmer">

      <h2>👨‍🌾 Farmer Dashboard</h2>

      <div className="dashboard-grid">

        <div className="box">
          <h3>🌡 Temperature</h3>
          <p>{temp}°C</p>
        </div>

        <div className="box">
          <h3>💧 Humidity</h3>
          <p>{humidity}%</p>
        </div>

        <div className="box">
          <h3>💨 Wind</h3>
          <p>{wind} m/s</p>
        </div>

        <div className="box">
          <h3>☁ Weather</h3>
          <p>{weatherType}</p>
        </div>

        <div className="box">
          <h3>🌱 Recommended Crop</h3>
          <p>{crop}</p>
        </div>

        <div className="box">
          <h3>🚜 Motor Status</h3>
          <p>{motor}</p>
        </div>

      </div>

    </section>

  );

}

export default FarmerDashboard;