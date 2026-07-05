import { useState } from "react";
import "./CropRecommendation.css";

function CropRecommendation() {

    const [season, setSeason] = useState("");
    const [crop, setCrop] = useState("");

    function recommendCrop() {

        if (season === "Summer") {
            setCrop("🌽 Maize, Cotton, Groundnut");
        }
        else if (season === "Winter") {
            setCrop("🌾 Wheat, Mustard, Barley");
        }
        else if (season === "Rainy") {
            setCrop("🌱 Rice, Soybean, Sugarcane");
        }
        else {
            setCrop("Please Select Season");
        }

    }

    return (

        <section className="crop">

            <h2>Crop Recommendation</h2>

            <select
                value={season}
                onChange={(e) => setSeason(e.target.value)}
            >

                <option value="">Select Season</option>

                <option>Summer</option>

                <option>Winter</option>

                <option>Rainy</option>

            </select>

            <button onClick={recommendCrop}>

                Recommend Crop

            </button>

            <div className="result">

                {crop}

            </div>

        </section>

    )

}

export default CropRecommendation;