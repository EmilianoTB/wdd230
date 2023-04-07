
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&appid=d1bf7498feb4f8b222047310ce70549e&units=imperial`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&appid=d1bf7498feb4f8b222047310ce70549e&units=imperial`;

const temperatureEl = document.querySelector('.temperature');
const conditionEl = document.querySelector('.condition');
const humidityEl = document.querySelector('.humidity');
const day1DateEl = document.querySelector('.day1 .date');
const day2DateEl = document.querySelector('.day2 .date');
const day3DateEl = document.querySelector('.day3 .date');
const day1TempEl = document.querySelector('.day1 .temperature');
const day2TempEl = document.querySelector('.day2 .temperature');
const day3TempEl = document.querySelector('.day3 .temperature');

// Fetch current weather data
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    temperatureEl.textContent = `${data.main.temp}°F`;
    conditionEl.textContent = data.weather[0].description;
    humidityEl.textContent = `Humidity: ${data.main.humidity}%`;
  })
  .catch(error => console.error(error));

// Fetch 3 day forecast data
fetch(forecastUrl)
  .then(response => response.json())
  .then(data => {
    day1DateEl.textContent = new Date(data.list[0].dt * 1000).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
    day1TempEl.textContent = `${data.list[0].main.temp}°F`;
    day2DateEl.textContent = new Date(data.list[6].dt * 1000).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
    day2TempEl.textContent = `${data.list[5].main.temp}°F`;
    day3DateEl.textContent = new Date(data.list[7].dt * 1000).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
    day3TempEl.textContent = `${data.list[7].main.temp}°F`;

    console.log(data.list)
  })
  .catch(error => console.error(error));