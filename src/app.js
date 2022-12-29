function displayTemperature(response) {
console.log(response.data.main.temp)
let temperatureElement = document.querySelector("#temperature");
let cityElement = document.querySelector("#city");
let descriptionElement = document.querySelector("#description")
let humidityElement = document.querySelector("#humidity");
let windElement = document.querySelector("#wind")
temperatureElement.innerHTML = Math.round(response.data.main.temp);
cityElement.innerHTML = response.data.name;
descriptionElement.innerHTML = response.data.weather[0].description;
humidityElement.innerHTML = response.data.humidity;
windElement.innerHTML = Math.round(response.data.wind.speed);
}


let apiKey = "25407a59ee5855b5bd6ae54c00f8cfc4";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);