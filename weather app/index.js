const API_KEY = 'YOUR_API_KEY';

const searchBtn = document.querySelector('#search-btn');
const locationInput = document.querySelector('#location');
const weatherInfo = document.querySelector('#weather-info');

searchBtn.addEventListener('click', () => {
	const location = locationInput.value;
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;

	fetch(url)
		.then(response => response.json())
		.then(data => {
			const description = data.weather[0].description;
