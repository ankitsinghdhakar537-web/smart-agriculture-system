import "./Features.css";
import { FaCloudSun, FaSeedling, FaTint } from "react-icons/fa";

function Features() {
  return (
    <section className="features">

      <h2>Our Features</h2>

      <div className="feature-container">

        <div className="card">
          <FaCloudSun className="icon"/>
          <h3>Live Weather</h3>
          <p>Get real-time weather updates for your farm.</p>
        </div>

        <div className="card">
          <FaSeedling className="icon"/>
          <h3>Crop Recommendation</h3>
          <p>Choose the best crop based on weather conditions.</p>
        </div>

        <div className="card">
          <FaTint className="icon"/>
          <h3>Smart Irrigation</h3>
          <p>Water your crops efficiently using smart suggestions.</p>
        </div>

      </div>

    </section>
  );
}

export default Features;