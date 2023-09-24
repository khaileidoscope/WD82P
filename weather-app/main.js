// import fetchData from "./src/fetchData";
// import displayData from "./src/displayData";
// import "./style.css";

// // event listeners
// const form = document.getElementById("search-form");

// async function main(submitEvent) {
//   submitEvent.preventDefault();
//   const location = document.getElementById("search-input").value;

//   // const location = "Manila";

//   const API_KEY = "e1406d83d6075518e0c06e0dbb6902a4";

//   const weather_API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

//   const weatherData = await fetchData(weather_API_URL);

//   const weatherIcon = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;

//   displayData({ weatherData, weatherIcon });
// }

// form.addEventListener("submit", main);

// TRY

import fetchData from "./src/fetchData";
import displayData from "./src/displayData";
import "./styles.css";

// event listener
const form = document.getElementById("search-form");

async function main(submitEvent) {
  submitEvent.preventDefault();
  const location = document.getElementById("search-input").value;

  const API_KEY = "e1406d83d6075518e0c06e0dbb6902a4";

  const weather_API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

  try {
    const weatherData = await fetchData(weather_API_URL);

    if (weatherData.cod === "404") {
      // Display an alert error if the location is not found
      alert("Location not found. Please enter a valid location.");
    } else {
      const weatherIcon = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;

      displayData({ weatherData, weatherIcon });
    }
  } catch (error) {
    // Handle other errors, e.g., network issues or API failures
    console.error("An error occurred:", error);
  }
}

form.addEventListener("submit", main);
