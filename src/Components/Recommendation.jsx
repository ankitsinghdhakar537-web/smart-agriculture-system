import { useState } from "react";
import "./Recommendation.css";

function Recommendation() {

  const [temperature, setTemperature] = useState(30);
  const [moisture, setMoisture] = useState(50);

  function getRecommendation() {

    if (temperature > 35 && moisture < 30) {

      return {
        crop: "🌾 Bajra",
        irrigation: "💧 Irrigation Required",
        fertilizer: "🌱 NPK 20-20-20"
      };

    }

    else if (temperature < 25 && moisture > 60) {

      return {
        crop: "🌾 Wheat",
        irrigation: "✅ No Irrigation",
        fertilizer: "🌿 Urea"
      };

    }

    else {

      return {
        crop: "🌽 Maize",
        irrigation: "💧 Moderate Irrigation",
        fertilizer: "🌱 DAP"
      };

    }

  }

  const result = getRecommendation();

  return (

    <section className="recommend">

      <h2>Smart Farming Recommendation</h2>

      <div className="slider">

        <label>Temperature : {temperature}°C</label>

        <input
          type="range"
          min="10"
          max="45"
          value={temperature}
          onChange={(e)=>setTemperature(Number(e.target.value))}
        />

      </div>

      <div className="slider">

        <label>Soil Moisture : {moisture}%</label>

        <input
          type="range"
          min="0"
          max="100"
          value={moisture}
          onChange={(e)=>setMoisture(Number(e.target.value))}
        />

      </div>

      <div className="recommend-card">

        <h3>{result.crop}</h3>

        <p>{result.irrigation}</p>

        <p>{result.fertilizer}</p>

      </div>

    </section>

  );

}

export default Recommendation;