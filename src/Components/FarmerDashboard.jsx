import "./FarmerDashboard.css";

function FarmerDashboard() {

    return(

<section className="farmer">

<h2>👨‍🌾 Farmer Dashboard</h2>

<div className="dashboard-grid">

<div className="box">

<h3>🌡 Temperature</h3>

<p>31°C</p>

</div>

<div className="box">

<h3>💧 Soil Moisture</h3>

<p>42%</p>

</div>

<div className="box">

<h3>🌦 Humidity</h3>

<p>70%</p>

</div>

<div className="box">

<h3>🌧 Rain Chance</h3>

<p>35%</p>

</div>

<div className="box">

<h3>🌱 Recommended Crop</h3>

<p>Soybean</p>

</div>

<div className="box">

<h3>🚜 Motor Status</h3>

<p>OFF</p>

</div>

</div>

</section>

)

}

export default FarmerDashboard;