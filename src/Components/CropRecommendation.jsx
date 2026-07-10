import "./CropRecommendation.css";
import { useWeather } from "../context/WeatherContext";

function CropRecommendation() {
  const { weather } = useWeather();

  if (!weather || weather.cod !== 200) {
    return (
      <section className="crop" id="crop">
        <h2>🌱 Smart Crop Recommendation</h2>
        <p>Please search a city first.</p>
      </section>
    );
  }

  const temp = weather.main.temp;
  const humidity = weather.main.humidity;

  let crop = "";
  let reason = "";

  if (temp <= 18) {
    crop = "🌾 Wheat";
    reason = "Cool weather is ideal for Wheat cultivation.";
  } 
  else if (temp <= 26 && humidity >= 70) {
    crop = "🌾 Rice";
    reason = "High humidity and moderate temperature are suitable for Rice.";
  } 
  else if (temp >= 26 && temp <= 30 && humidity >= 50) {
    crop = "🌱 Soybean";
    reason = "Moderate temperature and humidity are ideal for Soybean.";
  } 
  else if (temp >= 30 && humidity < 60) {
    crop = "🌿 Cotton";
    reason = "High temperature and low humidity are suitable for Cotton.";
  } 
  else if (temp >= 28 && humidity >= 70) {
    crop = "🎋 Sugarcane";
    reason = "Warm climate with high humidity is ideal for Sugarcane.";
  } 
  else {
    crop = "🌽 Maize";
    reason = "Current weather conditions are suitable for Maize.";
  }

  return (
    <section className="crop" id="crop">
      <h2>🌱 Smart Crop Recommendation</h2>

      <div className="result">
        <h3>{crop}</h3>

        <p>
          <strong>Temperature:</strong> {temp}°C
        </p>

        <p>
          <strong>Humidity:</strong> {humidity}%
        </p>

        <p>{reason}</p>
      </div>
    </section>
  );
}

export default CropRecommendation;