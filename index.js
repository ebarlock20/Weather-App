// Current date and time
function formatDate(date) {
  let days = [
    `Sunday`,
    `Monday`,
    `Tuesday`,
    `Wednesday`,
    `Thursday`,
    `Friday`,
    `Saturday`,
  ];
  let day = days[date.getDay()];
  console.log(day);

  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let time = `${hours}:${minutes}`;
  console.log(time);
  return `${day} ${time}`;
}

let date = new Date();
let dayTime = document.querySelector("#day-and-time");
dayTime.innerHTML = formatDate(date);

// Weather API
function cityTemp(response) {
  let temp = Math.round(response.data.temperature.current);
  let tempElement = document.querySelector("#current-temp");
  tempElement.innerHTML = temp;

  let cityNameElement = document.querySelector("#city-name");
  cityNameElement.innerHTML = response.data.city;
}

// Change city
function changeCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city");

  let city = cityInput.value.trim();

  let apiKey = "e4d7d87d81aef5843860374o00tff38b";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiURL).then(cityTemp);
}

let citySearch = document.querySelector("#search-city");
citySearch.addEventListener("submit", changeCity);
