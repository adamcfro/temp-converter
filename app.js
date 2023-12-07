/**
 * Gets Fahrenheit input temperature from user, converts the temperature to
 * Celsius, and displays the converted temperature in the Celsius input field.
 *
 * @format
 * @param {Event} e - The event parameter
 */
function fahrenheitToCelsius(e) {
  const temp = e.target.firstChild.nextElementSibling.value;
  const cels = document.querySelector("#celsius");
  cels.value = Math.floor(((temp - 32) * 5) / 9);

  e.preventDefault();
}

/**
 * Gets Celsius input temperature from user, converts the temperature to
 * Fahrenheit, and displays the converted temperature in the Fahrenheit input
 * field.
 *
 * @param {Event} e - The event parameter
 */
function celsiusToFahrenheit(e) {
  const temp = e.target.firstChild.nextElementSibling.value;
  const fahr = document.querySelector("#fahrenheit");
  fahr.value = Math.floor((temp * 9) / 5) + 32;

  e.preventDefault();
}

/**
 * Clears the target input. Changes target placeholder and value to an empty
 * string "".
 *
 * @param {Event} e - The event parameter
 */
function clearInput(e) {
  if (e.target.id === "fahrenheit" || e.target.id === "celsius") {
    e.target.placeholder = "";
    e.target.value = "";
  }
}

/**
 * Adds event listeners and starts the app.
 */
function startApp() {
  const fahrToCels = document.querySelector("#fahr-to-cels");
  fahrToCels.addEventListener("submit", fahrenheitToCelsius);

  const celsToFahr = document.querySelector("#cels-to-fahr");
  celsToFahr.addEventListener("submit", celsiusToFahrenheit);

  document.querySelector("#fahrenheit").addEventListener("click", clearInput);
  document.querySelector("#celsius").addEventListener("click", clearInput);
}

startApp();
