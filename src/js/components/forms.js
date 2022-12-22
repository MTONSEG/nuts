//Импортирую ф-ии добавления класса
import { addClass, removeClass, toggleClass } from "../modules/functions.js";

//Меню учетной записи
const userMenu = document.querySelector('.user-menu');

if (userMenu) {
	const itemMenu = userMenu.querySelectorAll('.user-menu__item');
	const bodyMenu = userMenu.querySelectorAll('.user-menu__content');
	const navbar = userMenu.querySelector('.user-menu__navbar');
	const openBtn = userMenu.querySelector('.user-menu__open');
	const closeBtn = userMenu.querySelector('.user-menu__close');
	const body = document.querySelector('body');

	itemMenu.forEach(elem => {
		elem.addEventListener('click', e => {
			let currentLink = e.target.closest('.user-menu__item');
			let linkId = currentLink.getAttribute('data-link');
			let currentBody = document.querySelector(linkId);
			let activeItem = currentLink.querySelector('_active');

			if (!activeItem) {
				for (let item of itemMenu) {
					removeClass(item, '_active');
				}

				for (let item of bodyMenu) {
					removeClass(item, '_active');
				}
			}

			addClass(currentLink, '_active');
			addClass(currentBody, '_active');
			removeClass(navbar, '_active');
			removeClass(body, '_lock');
		})
	})

	if (closeBtn) {
		openBtn.addEventListener('click', e => {

			addClass(navbar, '_active');
			addClass(body, '_lock');
		})
		closeBtn.addEventListener('click', e => {
			removeClass(navbar, '_active');
			removeClass(body, '_lock');
		})
	}
}

// Форма колличества товаров
const quantityBody = document.querySelectorAll('.quantity');

if (quantityBody) {
	for (let elem of quantityBody) {
		let input = elem.querySelector('.quantity__input');

		elem.addEventListener('click', e => {
			let onClickMinus = e.target.closest('._minus');
			let onClickPlus = e.target.closest('._plus');

			if (onClickMinus) {
				input.value--;
			} else if (onClickPlus) {
				input.value++;
			}

			if (input.value <= 1) {
				input.value = 1;
			}
		})
	}
}

//Попап корзины
const popupCartWrapper = document.querySelector('.middle-header__cart-wrap');

if (popupCartWrapper) {
	const cartPopup = popupCartWrapper.querySelector('.popup-cart');

	document.addEventListener('click', e => {
		let onClickPopup = e.target.closest('.popup-cart');
		let onClickCartBtn = e.target.closest('.middle-header__cart-link');
		let onClickClose = e.target.closest('.popup-cart__close');

		if (onClickCartBtn) {
			toggleClass(cartPopup, '_active');
			// cartPopup.classList.add('_active');
			e.preventDefault();
			
		} else if (!onClickPopup || onClickClose) {
			removeClass(cartPopup, '_active');
		}
	})
}