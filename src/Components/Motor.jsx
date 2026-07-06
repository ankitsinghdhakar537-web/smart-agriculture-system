import "./Motor.css";
import { useWeather } from "../context/WeatherContext";

function Motor() {

  const { weather } = useWeather();

  if (!weather || weather.cod !== 200) {
    return (
      <section className="motor" id="motor">
        <h2>🚜 Smart Irrigation</h2>
        <p>Please search a city first.</p>
      </section>
    );
  }

  const humidity = weather.main.humidity;

  const motorOn = humidity < 40;

  return (
    <section className="motor">

      <h2>🚜 Smart Irrigation System</h2>

      <h3>
        {motorOn ? "🟢 Motor ON" : "🔴 Motor OFF"}
      </h3>

      <p>
        Current Humidity : <b>{humidity}%</b>
      </p>

      <p>
        {motorOn
          ? "Humidity is low. Irrigation is recommended."
          : "Humidity is sufficient. Irrigation is not required."}
      </p>

    </section>
  );

}

export default Motor;