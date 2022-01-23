function formattedDate(now) {
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let date = now.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let day = days[date];

  return `${day} ${hours}:${minutes}`;
}
let dateDisplay = document.querySelector("h2");
let currentTime = new Date();
dateDisplay.innerHTML = formattedDate(currentTime);

function displayTemp(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = `${Math.round(
    response.data.main.temp
  )}°C`;
}
function search(event) {
  event.preventDefault();

  let cityInput = document.querySelector("#result").value;
  let apiKey = "7e5b42f15f07c7e23193e5065b6e4cf9";
  let unit = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(displayTemp);
}

let searchForm = document.querySelector("#search-city");
searchForm.addEventListener("submit", search);