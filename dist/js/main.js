import { setLocationObject } from "./dataFunctions.js"
import { addSpinner } from "./domFunctions.js";
import CurrentLocation from "./CurrentLocation.js";
const currentLoc = new CurrentLocation();

const initApp = () => {
  // add listeners
  const geoButton = document.getElementById("getLocation");
  geoButton.addEventListener("click", getGeoWeather);
  const homeButton = document.getElementById("home");
  homeButton.addEventListener("click", loadWeather);
  // setup

  // load weather
};

document.addEventListener("DOMContentLoaded", initApp);


const getGeoWeather = (event) => {
  if (event && event.type === "click") {
    const mapIcon = document.querySelector(".fa-map-marker-alt");
    addSpinner(mapIcon);
  }
  if (!navigator.geolocation) return geoError();
  navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
};

const geoError = (errObj) => {
  const errorMsg = errObj.message ? errObj.message : "Geolocation not supported";
  displayError(errMsg, errMsg);
};

const geoSuccess = (position) => {
  const myCoordsObj = {
    lat: position.coords.latitude,
    lon: position.coords.longitute,
    name: `Lat:${position.coords.latitude} long:${position.coords.longitude}`
  };
  setLocationObject(currentLoc, myCoordsObj);
  updateDataAndDisplay(currentLoc);  // update data and display
};

const updateDataAndDisplay = async (locationObj) => {
  // const weatherJson = await getWeatherFromCoords(locationObj);
  // if (weatherJson) updateDataAndDisplay(weatherJson, locationObj);
};







        // <!-- Hard coded data...to do: generate content dynamically with js and API -->
        // <div class="icon" id="icon"><i class="far fa-sun" aria-hidden="true" title="clear sky"></i></div>
        // <div class="temp">11°<div class="unit">C</div></div>
        // <div class="desc">Clear Sky</div>
        // <div class="feels">Feels Like 9°</div>
        // <div class="maxtemp">High 13°</div>
        // <div class="mintemp">Low 7°</div>
        // <div class="humidity">Humidity 44%</div>
        // <div class="wind">wind 7 mph</div>



      //    <!-- Hard coded data...to do: generate content dynamically with js and API -->
      //    <div class="forecastDay"><p class="dayAbbreviation">SUN</p><img src="https://openweathermap.org/img/wn/03d.png" alt="scattered clouds"><p
      //    class="dayHigh">61°</p><p class="dayLow">44°</p></div>
      //  <div class="forecastDay"><p class="dayAbbreviation">MON</p><img src="https://openweathermap.org/img/wn/03d.png" alt="scattered clouds"><p
      //    class="dayHigh">62°</p><p class="dayLow">46°</p></div>
      //  <div class="forecastDay"><p class="dayAbbreviation">TUE</p><img src="https://openweathermap.org/img/wn/04d.png" alt="overcast clouds"><p
      //    class="dayHigh">61°</p><p class="dayLow">52°</p></div>
      //  <div class="forecastDay"><p class="dayAbbreviation">WED</p><img src="https://openweathermap.org/img/wn/10d.png" alt="moderate rain"><p
      //    class="dayHigh">70°</p><p class="dayLow">60°</p></div>
      //  <div class="forecastDay"><p class="dayAbbreviation">THU</p><img src="https://openweathermap.org/img/wn/10d.png" alt="moderate rain"><p
      //    class="dayHigh">61°</p><p class="dayLow">44°</p></div>
      //  <div class="forecastDay"><p class="dayAbbreviation">FRI</p><img src="https://openweathermap.org/img/wn/03d.png" alt="scattered clouds"><p
      //    class="dayHigh">61°</p><p class="dayLow">44°</p></div>
      //  <div class="forecastDay"><p class="dayAbbreviation">SAT</p><img src="https://openweathermap.org/img/wn/03d.png" alt="scattered clouds"><p
      //    class="dayHigh">61°</p><p class="dayLow">44°</p></div>

