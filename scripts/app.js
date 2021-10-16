
async function getWeatherData(location) {
  try {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Moncton&units=metric&appid=ddf8620e98e22ca0cb597c7a787e17a2&q=${location}`, {
      mode:"cors",
    }
  );
  const weatherData = await response.json();
  console.log(weatherData);
  } catch(err) {
    alert(err);
  }
};

getWeatherData();
