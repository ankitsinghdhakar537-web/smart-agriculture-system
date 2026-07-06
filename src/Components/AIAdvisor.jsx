import "./AIAdvisor.css";
import { useWeather } from "../context/WeatherContext";

function AIAdvisor() {

  const { weather } = useWeather();

  if (!weather || weather.cod !== 200) {
    return (
      <section className="advisor" id="advisor">
        <h2>🤖 AI Farming Advisor</h2>
        <p>Search a city to get farming advice.</p>
      </section>
    );
  }

  const temp = weather.main.temp;
  const humidity = weather.main.humidity;

  let crop = "";
  let irrigation = "";
  let fertilizer = "";
  let warning = "";

  if (temp < 20) {
    crop = "🌾 Wheat";
    irrigation = "Low Irrigation";
    fertilizer = "DAP";
    warning = "Cold weather. Protect crops from frost.";
  } else if (temp < 30) {
    crop = "🌱 Soybean";
    irrigation = "Medium Irrigation";
    fertilizer = "NPK";
    warning = "Ideal weather for farming.";
  } else {
    crop = "🌿 Cotton";
    irrigation = "High Irrigation";
    fertilizer = "Urea";
    warning = "High temperature. Irrigate during evening.";
  }

  return (
    <section className="advisor">

      <h2>🤖 AI Farming Advisor</h2>

      <div className="advisor-card">

        <h3>📍 {weather.name}</h3>

        <p><strong>🌡 Temperature:</strong> {temp}°C</p>

        <p><strong>💧 Humidity:</strong> {humidity}%</p>

        <p><strong>🌱 Recommended Crop:</strong> {crop}</p>

        <p><strong>🚜 Irrigation:</strong> {irrigation}</p>

        <p><strong>🧪 Fertilizer:</strong> {fertilizer}</p>

        <p><strong>⚠ Advice:</strong> {warning}</p>

      </div>

    </section>
  );
}

export default AIAdvisor;