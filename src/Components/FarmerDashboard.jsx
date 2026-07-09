import "./FarmerDashboard.css";
import { useWeather } from "../context/WeatherContext";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function FarmerDashboard() {
  const { weather } = useWeather();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (!user) return;

    async function loadProfile() {
      try {
        const res = await fetch(
          `http://localhost:5000/api/users/${user.email}`
        );

        const data = await res.json();

        if (res.ok) {
          setProfile(data.user);
        }
      } catch (err) {
        console.log(err);
      }
    }

    loadProfile();
  }, [user]);

  if (!weather || weather.cod !== 200) {
    return (
      <section className="farmer" id="dashboard">
        <h2>👨‍🌾 Farmer Dashboard</h2>

        {profile && (
          <div className="profile-card">
            <h3>👨‍🌾 Farmer Profile</h3>

            <p><strong>Name:</strong> {profile.name}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Phone:</strong> {profile.phone}</p>
            <p><strong>Village:</strong> {profile.village}</p>
            <p><strong>Farm Size:</strong> {profile.farmSize}</p>
            <p><strong>Preferred Crop:</strong> {profile.crop}</p>

            <button onClick={() => navigate("/profile")}>
              Edit Profile
            </button>
          </div>
        )}

        <p style={{ textAlign: "center", marginTop: "20px" }}>
          Search a city above to view dashboard.
        </p>
      </section>
    );
  }

  const temp = weather.main.temp;
  const humidity = weather.main.humidity;
  const wind = weather.wind.speed;
  const weatherType = weather.weather[0].main;

  let crop = "";

  if (temp < 20) {
    crop = "Wheat 🌾";
  } else if (temp < 30) {
    crop = "Soybean 🌱";
  } else {
    crop = "Cotton 🌿";
  }

  const motor = humidity < 40 ? "🟢 ON" : "🔴 OFF";

  return (
    <section className="farmer" id="dashboard">
      <h2>👨‍🌾 Farmer Dashboard</h2>

      {profile && (
        <div className="profile-card">
          <h3>👨‍🌾 Farmer Profile</h3>

          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Phone:</strong> {profile.phone}</p>
          <p><strong>Village:</strong> {profile.village}</p>
          <p><strong>Farm Size:</strong> {profile.farmSize}</p>
          <p><strong>Preferred Crop:</strong> {profile.crop}</p>

          <button onClick={() => navigate("/profile")}>
            Edit Profile
          </button>
        </div>
      )}

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