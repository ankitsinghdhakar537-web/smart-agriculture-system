import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Weather from "./Components/Weather";
import CropRecommendation from "./Components/CropRecommendation";
import Dashboard from "./Components/Dashboard";
import SoilMoisture from "./Components/SoilMoisture";
import Recommendation from "./Components/Recommendation";
import FarmingTips from "./Components/FarmingTips";
import FarmerDashboard from "./Components/FarmerDashboard";
import Motor from "./Components/Motor";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Weather />
      <CropRecommendation />
      <Dashboard />
      <SoilMoisture />
      <Recommendation />
      <FarmingTips/>
      <FarmerDashboard/>
      <Motor/>
      

    </>
  );
}

export default App;