
// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// create url variable
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=d1bf7498feb4f8b222047310ce70549e';

// define asynchronous function
async function apiFetch() {
	try {
		const response = await fetch(url);
		if (response.ok) {
			const data = await response.json();
			console.log(data);
			displayResults(data);
		} else {
			throw Error(await response.text());
		}
	} catch (error) {
		console.log(error);
	}
}

// define displayResults function
function displayResults(weatherData) {
	currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

	const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
	const desc = weatherData.weather[0].description.charAt(0).toUpperCase() + weatherData.weather[0].description.slice(1);

	weatherIcon.setAttribute('src', iconsrc);
	weatherIcon.setAttribute('alt', desc);
	captionDesc.textContent = desc;
}

// call apiFetch function
apiFetch();