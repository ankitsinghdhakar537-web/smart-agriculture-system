import { useState } from "react";
import "./FarmingTips.css";

function FarmingTips() {

    const [temp, setTemp] = useState(30);

    function getAdvice() {

        if(temp>=40){

            return{

                title:"🔥 Heat Alert",

                tip:"Water your crops in the evening to reduce evaporation."

            }

        }

        else if(temp>=30){

            return{

                title:"☀ Summer Farming",

                tip:"Increase irrigation frequency and monitor soil moisture."

            }

        }

        else if(temp>=20){

            return{

                title:"🌱 Good Weather",

                tip:"Suitable weather for most crops."

            }

        }

        else{

            return{

                title:"❄ Cold Weather",

                tip:"Protect crops from frost during the night."

            }

        }

    }

    const advice=getAdvice();

    return(

<section className="tips">

<h2>AI Farming Advisor</h2>

<label>

Temperature : {temp}°C

</label>

<input

type="range"

min="0"

max="45"

value={temp}

onChange={(e)=>setTemp(Number(e.target.value))}

/>

<div className="tip-card">

<h3>{advice.title}</h3>

<p>{advice.tip}</p>

</div>

</section>

)

}

export default FarmingTips;