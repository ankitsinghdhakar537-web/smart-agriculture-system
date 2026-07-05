import { useState } from "react";
import "./SoilMoisture.css";

function SoilMoisture() {

  const [moisture, setMoisture] = useState(50);

  function getStatus() {
    if (moisture < 30) {
      return "🔴 Soil is Dry - Start Irrigation";
    } else if (moisture < 70) {
      return "🟢 Soil Moisture is Good";
    } else {
      return "🔵 Soil is Wet - Stop Irrigation";
    }
  }

  return (
    <section className="soil">

      <h2>Soil Moisture Monitor</h2>

      <input
        type="range"
        min="0"
        max="100"
        value={moisture}
        onChange={(e) => setMoisture(e.target.value)}
      />

      <h3>{moisture}%</h3>

      <p>{getStatus()}</p>

    </section>
  );
}

export default SoilMoisture;