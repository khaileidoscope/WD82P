import "./style.css";
import fetchData from "./src-js/fetchData";
import displayData from "./src-js/displayData";

const formWeather = document.getElementById("form-weather");
const weatherInput = document.getElementById("weather-input");

formWeather.addEventListener("click", (event) => {
  event.preventDefault();
  const input = weatherInput.value;

  if (input === "") return;

  fetchData(input).then((data) => {
    displayData(data);
    weatherInput.value = "";
  });
});
