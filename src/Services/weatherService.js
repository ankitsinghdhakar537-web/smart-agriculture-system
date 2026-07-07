const API_KEY = "86435251523d3a34d4899924b06bec56";

// Search by City
export async function fetchWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// Search by GPS Location
export async function fetchWeatherByLocation(lat, lon) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}