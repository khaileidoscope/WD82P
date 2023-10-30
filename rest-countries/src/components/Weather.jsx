import axios from "axios";
import { useEffect, useState } from "react";

function Weather({ country }) {
  const [weather, setWeather] = useState(null);
  const API_KEY = "e1406d83d6075518e0c06e0dbb6902a4";

  const API_URL = `https://api.openweathermap.org/data/2.5/find?q=${country}&units=metric&appid=${API_KEY}`;
  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => setWeather(response.data.list[0]))
      .catch((error) => console.error("Error fetching weather data:", error));
  }, [country]); // Include country in the dependency array

  if (!weather) {
    return <p>Fetching weather...</p>;
  }

  return (
    <div>
      <h2>Weather in {country}</h2>
      <p>Temperature {weather.main.temp}°C</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="Weather Icon"
      />
      <p>Type: {weather.weather[0].main}</p>
      <p>Description: {weather.weather[0].description}</p>
      <p>Wind: {weather.wind.speed} m/s</p>
    </div>
  );
}

export default Weather;
