const APIkey = '423b5dee60e0f3b462bba311cbb37393';
let City = document.querySelector('.city').value;
let url = 'http://api.openweathermap.org/data/2.5/weather?q='+City+'&appid='+APIkey;
let weatherSpan = document.querySelector('.weather');
let humiditySpan = document.querySelector('.humidity');

const form = document.forms[0];

form.onsubmit = e => {
	e.preventDefault();
	City = document.querySelector('.city').value;
	url = 'http://api.openweathermap.org/data/2.5/weather?q='+City+'&appid='+APIkey;
	let xhr = new XMLHttpRequest();
	xhr.open('GET', url, false);
	xhr.send();
	let DATA = JSON.parse(xhr.responseText);
	weatherSpan.innerHTML = DATA.main.temp + 'K';
	humiditySpan.innerHTML = DATA.main.humidity;
	console.log(DATA);
}

