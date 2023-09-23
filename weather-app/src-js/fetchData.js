export default async function fetchData(city) {
  const apiKey = "f4abf6185be9633d5889560ae3458101";
  const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  const response = await fetch(weatherApiUrl);
  const weatherData = await response.json();

  return weatherData;
}
