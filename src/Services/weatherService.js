const API_KEY = "YOUR_OPENWEATHER_API_KEY";

export async function fetchWeather(city) {

    try {

        const response = await fetch(

            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`

        );

        const data = await response.json();

        return data;

    }

    catch(error){

        console.log(error);

        return null;

    }

}