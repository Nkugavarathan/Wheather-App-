//a469624ddf2e61c579b91ccef837f935

function getWeather() {
  const apiKey = "a469624ddf2e61c579b91ccef837f935";
  const city = document.getElementById("city").value;

  if (!city) {
    alert("please enter a city");
  }
  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

  fetch(currentWeatherUrl)
    .then((response) => {
      response.json();
    })
    .then((data) => {
      displayWeather(data);
    })
    .catch((error) => {
      console.log("Error fetching current weather data : ", error);
      alert("Error fetching current weather data. Please Try again");
    });
}
