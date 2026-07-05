import { useState } from "react";
import "./Motor.css";

function Motor(){

const [status,setStatus]=useState(false);

return(

<section className="motor">

<h2>Smart Irrigation</h2>

<h3>

{status?"🟢 Motor Running":"🔴 Motor OFF"}

</h3>

<button

onClick={()=>setStatus(!status)}

>

{status?"Turn OFF":"Turn ON"}

</button>

</section>

)

}

export default Motor;