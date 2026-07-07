import { useState } from "react";
import "./DiseaseDetection.css";

function DiseaseDetection() {

  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);

  function detectDisease() {

    if (!image) {
      alert("Please Upload Leaf Image");
      return;
    }

    // Demo Prediction
    setResult({
      disease: "Leaf Blight",
      confidence: "97%",
      medicine: "Mancozeb",
      advice: "Spray Mancozeb every 7 days until infection reduces."
    });

  }

  return (

    <section className="disease" id="disease">

      <h2>🦠 Plant Disease Detection</h2>

      <input
        type="file"
        accept="image/*"
        onChange={(e)=>setImage(URL.createObjectURL(e.target.files[0]))}
      />

      {image &&

      <img
      src={image}
      alt="Leaf"
      className="preview"
      />

      }

      <button onClick={detectDisease}>

        Detect Disease

      </button>

      {result && (

      <div className="result">

      <h3>🌿 {result.disease}</h3>

      <p><b>Confidence :</b> {result.confidence}</p>

      <p><b>Medicine :</b> {result.medicine}</p>

      <p><b>Recommendation :</b> {result.advice}</p>

      </div>

      )}

    </section>

  );

}

export default DiseaseDetection;