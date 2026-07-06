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

  if (temp < 20) {
    crop = "🌾 Wheat";
    reason = "Cool weather is suitable for Wheat cultivation.";
  } else if (temp < 30) {
    crop = "🌱 Soybean";
    reason = "Moderate temperature is ideal for Soybean.";
  } else {
    crop = "🌿 Cotton";
    reason = "High temperature is suitable for Cotton.";
  }

  return (
   <section className="crop" id="crop">

      <h2>🌱 Smart Crop Recommendation</h2>

      <div className="result">

        <h3>{crop}</h3>

        <p><strong>Temperature:</strong> {temp}°C</p>

        <p><strong>Humidity:</strong> {humidity}%</p>

        <p>{reason}</p>

      </div>

    </section>
  );

}

export default CropRecommendation;