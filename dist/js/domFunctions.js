export const addSpinner = (element) => {
  animateButton(element);
  setTimeout(animateButton, 1000, element);
};

const animateButton = (element) => {
  element.classList.toggle("none");
  element.nextElementSibling.classList.toggle("block");
  element.nextElementSibling.classList.toggle("none");
};

export const displayError = (headermsg, scMsg) => {
  updateWeatherLocationHeader(headerMsg);
  updateScreenReaderConfirmation(srMsg);
}

const updateWeatherLocationHeader = (message) => {
  const h1 = document.getElementById("currentForecast_location");
  h1.textContent = message;
};

const updateScreenReaderConfirmation = (message) => {
  document.getElementById("confirmaiton").textContent = message;
};