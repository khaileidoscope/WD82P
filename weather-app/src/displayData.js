export default async function displayData(obj) {
  // selectors
  const weatherIcon = document.getElementById("weather-icon");
  const weatherTemp = document.getElementById("weather-temp");
  const weatherType = document.getElementById("weather-type");
  const date = document.getElementById("date");

  // start of date
  const currentDate = new Date();
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };

  const formattedDate = currentDate.toLocaleDateString("en-US", options);
  console.log(formattedDate);

  // weather-icon + alt text
  weatherIcon.src = obj.weatherIcon;
  weatherIcon.alt = obj.weatherType;
  weatherIcon.style.mixBlendMode = "normal";

  // Round the temperature to 1 decimal place and convert from Kelvin to Celsius
  const celsiusTemperature = (obj.weatherData.main.temp - 273.15).toFixed(1);

  // weather-temp
  weatherTemp.textContent = celsiusTemperature + "°C";

  // weather-type
  weatherType.textContent = obj.weatherData.weather[0].main;
  weatherType.style.fontWeight = "normal";

  // formatted date
  date.textContent = formattedDate;
}
