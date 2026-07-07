import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Features from "../Components/Features";
import Weather from "../Components/Weather";
import CropRecommendation from "../Components/CropRecommendation";
import Dashboard from "../Components/Dashboard";
import SoilMoisture from "../Components/SoilMoisture";
import Recommendation from "../Components/Recommendation";
import FarmingTips from "../Components/FarmingTips";
import FarmerDashboard from "../Components/FarmerDashboard";
import Motor from "../Components/Motor";
import AIAdvisor from "../Components/AIAdvisor";
import Analytics from "../Components/Analytics";
import DiseaseDetection from "../Components/DiseaseDetection";
import Contact from "../Components/Contact";

function Home() {
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
      <FarmingTips />
      <FarmerDashboard />
      <Motor />
      <AIAdvisor />
      <Analytics />
      <DiseaseDetection />
      <Contact />
    </>
  );
}

export default Home;