import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

import * as select from './modules/select.js';
import * as burger from './modules/burgerMenu.js';
import * as dynamicAdaptive from './modules/dynamicAdapt.js';
import Swiper from 'swiper/bundle';

const prodSlider = new Swiper('.slider-products', {
	slidesPerView: 1,
	spaceBetween: 10,
	breakpoints: {
		575: {
			slidesPerView: 2,
		},
		991: {
			slidesPerView: 3,
			spaceBetween: 15
		},
		1220: {
			slidesPerView: 3,
			spaceBetween: 30,
		}
	}
});

const imageSlider = new Swiper('.image-slider', {
	navigation: {
		nextEl: '.image-slider__next',
		prevEl: '.image-slider__prev',
	},
})

const productsSliderBody = document.querySelectorAll('.slider-products__slide');

if (productsSliderBody) {
	for (let item of productsSliderBody) {
		let imageSliderBody = item.querySelector('.image-slider');
		let imageSliderNextBtn = item.querySelector('.image-slider__next');
		let imageSliderPrevBtn = item.querySelector('.image-slider__prev');
		let imageSliderZoomBtn = item.querySelector('.image-slider__zoom')

		imageSliderBody.addEventListener('mouseenter', event => {
			toggleClass(imageSliderNextBtn, '_active');
			toggleClass(imageSliderPrevBtn, '_active');
			toggleClass(imageSliderZoomBtn, '_active');
		})
		imageSliderBody.addEventListener('mouseleave', event => {
			toggleClass(imageSliderNextBtn, '_active');
			toggleClass(imageSliderPrevBtn, '_active');
			toggleClass(imageSliderZoomBtn, '_active');
		})
	}
}

function toggleClass(elem, nameClass) {
	elem.classList.toggle(`${nameClass}`);
}