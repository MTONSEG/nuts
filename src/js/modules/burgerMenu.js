const iconBurger = document.querySelector('.burger__icon');
const menuBurger = document.querySelector('.burger-menu');
const closeBtn = document.querySelector('.burger-menu__close-btn');

if (iconBurger) {
	iconBurger.addEventListener('click', event => {
		iconBurger.classList.add('_active');
		menuBurger.classList.add('_active');
		document.body.classList.add('_lock');
	})
}

if (closeBtn) {
	closeBtn.addEventListener('click', event => {
		iconBurger.classList.remove('_active');
		menuBurger.classList.remove('_active');
		document.body.classList.remove('_lock');
	})
}