import { isWebp, toggleClass } from "./modules/functions.js";
import * as select from './modules/select.js';
import * as burger from './modules/burgerMenu.js';
// import * as tabs from './modules/tabs.js';
import * as dynamicAdaptive from './modules/dynamicAdapt.js';
import Swiper, { Navigation } from 'swiper';
import * as tabs2 from "./modules/tabs2.js";

isWebp();
// tabFunction();


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
	},
});

const newsSlider = new Swiper('.news-slider', {
	modules: [Navigation],
	navigation: {
		nextEl: '.news__next',
		prevEl: '.news__prev',
	},
	slidesPerView: 1,
	spaceBetween: 15,
	breakpoints: {
		600: {
			slidesPerView: 2,
		},
		991: {
			slidesPerView: 3,
			spaceBetween: 30
		}
	}
})

const imageSlider = new Swiper('.image-slider', {
	modules: [Navigation],
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
