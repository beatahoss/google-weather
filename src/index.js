const weatherForm = document.getElementById("weatherForm");

weatherForm.addEventListener("submit", getWeatherData);

function getWeatherData(event) {
  event.preventDefault();

  const myCity = event.target.city.value;

  const cityLink = `https://www.google.com/search?q=${myCity}+weather`;

  window.open(cityLink);
}
