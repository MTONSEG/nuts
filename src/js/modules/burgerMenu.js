const iconBurger = document.querySelector('.burger__icon');
const menuBurger = document.querySelector('.burger-menu');
const header = document.querySelector('.header');

if (iconBurger) {
	iconBurger.addEventListener('click', event => {
		iconBurger.classList.toggle('_active');
		menuBurger.classList.toggle('_active');
		header.classList.toggle('_active');
		document.body.classList.toggle('_lock');
	})
}