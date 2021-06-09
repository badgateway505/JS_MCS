var but = document.querySelector('.request');
var popup = document.querySelector('.popup');
var close = document.querySelector('.closePopup');
var burger = document.querySelector('.openMenu');
var menu = document.querySelector('.menu');
var closeMenu = document.querySelector('.closeMenu');


but.onclick = () => {popup.style.display = 'flex'};
close.onclick = () => {popup.style.display = 'none'};
burger.onclick = () => {menu.style.left = '0'};
closeMenu.onclick = () => {menu.style.left = '-50vw'};