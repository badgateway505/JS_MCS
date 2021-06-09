const form = document.forms[0];
const insert = document.querySelector('.sum');

form.onsubmit = (e) => {
	e.preventDefault();
	insert.innerHTML = Math.sin(form.elements[1].value * 0.0174533);
}