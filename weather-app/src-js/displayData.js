export default function displayData(weatherData) {
  const app = document.getElementById("app");
  app.innerHTML = "";

  const h1 = document.createElement("h1");
  h1.textContent = `The weather now in ${weatherData.name} is ${weatherData.weather[0].description}.`;

  const main = document.createElement("main");

  const iconContainer = document.createElement("div");
  const weatherIcon = document.createElement("img");
  weatherIcon.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;

  const detailsContainer = document.createElement("div");

  iconContainer.appendChild(weatherIcon);
  main.append(h1, iconContainer, detailsContainer);
  app.append(main);
}
