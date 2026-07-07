import "./Analytics.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line, Bar } from "react-chartjs-2";
import { useWeather } from "../context/WeatherContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Analytics() {
  const { weather } = useWeather();

  if (!weather || weather.cod !== 200) return null;

  const lineData = {
    labels: ["Temperature", "Humidity", "Wind"],
    datasets: [
      {
        label: "Live Weather",
        data: [
          weather.main.temp,
          weather.main.humidity,
          weather.wind.speed,
        ],
        borderColor: "#2e7d32",
        backgroundColor: "#66bb6a",
        tension: 0.4,
      },
    ],
  };

  const barData = {
    labels: ["Temperature", "Humidity", "Wind"],
    datasets: [
      {
        label: "Today's Data",
        data: [
          weather.main.temp,
          weather.main.humidity,
          weather.wind.speed,
        ],
        backgroundColor: [
          "#43a047",
          "#29b6f6",
          "#ffa726",
        ],
      },
    ],
  };

  return (
    <section className="analytics" id="analytics">

      <h2>📊 Weather Analytics</h2>

      <div className="chart-grid">

        <div className="chart-card">
          <Line data={lineData} />
        </div>

        <div className="chart-card">
          <Bar data={barData} />
        </div>

      </div>

    </section>
  );
}

export default Analytics;