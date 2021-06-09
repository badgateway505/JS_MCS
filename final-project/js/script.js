const APIkey = '423b5dee60e0f3b462bba311cbb37393';
let url = 'https://api.openweathermap.org/data/2.5/weather?q=Москва&appid='+APIkey;

//lol
//отправление запроса
let xhr = new XMLHttpRequest();
xhr.open('GET', url, false);
xhr.send();

//парсинг данных погоды (тут же перевел Кельвины в Цельсия)
const DATA = JSON.parse(xhr.responseText);
let temp = DATA.main.temp - 271.15;

//создание класса пользователя
class Person {
	constructor(name) {
		this.name = name;
		this.happiness = 0;
	}
	//не использую return, т.к. код сам увеличивает значение параметра конструктора
	hasCat() { this.happiness+=1 };
	hasRest() { this.happiness+=1 };
	hasMoney() { this.happiness+=1 };
	isSunny() { (temp > 15) ? this.happiness+=1 : this.happiness };
}

document.forms[0].onsubmit = evt => {
	evt.preventDefault();
	//выбрал инпуты "да" и инпут имя
	let inputName = document.querySelectorAll('input')[0];
	let inputCat = document.querySelectorAll('input')[1];
	let inputRest = document.querySelectorAll('input')[3];
	let inputMoney = document.querySelectorAll('input')[5];

	let username = new Person;
	username.name = inputName.value;

	//за каждый выбранный "да" начисляем +1 к счастью
	if (inputCat.checked == true) username.hasCat();
	if (inputRest.checked == true) username.hasRest();
	if (inputMoney.checked == true) username.hasMoney();
	username.isSunny();

	//вывод имени
	let personName = document.querySelector('.personName');
	personName.innerHTML = username.name;

	//проверка и вывод эмодзи
	let icon = document.querySelector('.icon');
	if (username.happiness > 3) {
		icon.innerHTML = '😄';
	} else if (username.happiness > 1) {
		icon.innerHTML = '😐';
	} else icon.innerHTML = '☹️';
	console.log(username);
}


