/**
 * This function takes in the event parameter and converts a user's input from
 * Fahrenheit to Celsius, or vice versa, and displays the results in the user's
 * browser.
 *
 * @format
 * @param {Event} e - The event parameter
 */

function convertTemperature(e) {
  e.preventDefault();

  const scale = document.querySelector("#scale");
  const input = document.querySelector("#input");
  const results = document.querySelector("#results");

  while (results.firstChild) {
    results.removeChild(results.firstChild);
  }
  let val = input.value;
  if (scale.value === "Fahrenheit") {
    val = Math.floor((val - 32) / 1.8) + "°C";
  } else {
    val = Math.floor(val * 1.8 + 32) + "°F";
  }
  let text = document.createTextNode(val);
  results.appendChild(text);
  input.value = "";
}

document.querySelector("#form").addEventListener("submit", convertTemperature);
