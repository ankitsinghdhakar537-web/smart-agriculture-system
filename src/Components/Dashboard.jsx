import "./Dashboard.css";

function Dashboard() {

  const data = [

    {
      title: "🌡 Temperature",
      value: "31°C"
    },

    {
      title: "💧 Humidity",
      value: "72%"
    },

    {
      title: "🌧 Rain",
      value: "No Rain"
    },

    {
      title: "💨 Wind",
      value: "12 km/h"
    },

    {
      title: "🌱 Crop",
      value: "Soybean"
    },

    {
      title: "🚜 Motor",
      value: "OFF"
    }

  ];

  return (

    <section className="dashboard">

      <h2>Today's Farm Status</h2>

      <div className="dashboard-grid">

        {data.map((item,index)=>(

          <div className="dashboard-card" key={index}>

            <h3>{item.title}</h3>

            <h1>{item.value}</h1>

          </div>

        ))}

      </div>

    </section>

  )

}

export default Dashboard;