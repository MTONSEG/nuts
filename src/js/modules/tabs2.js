import { addClass } from "./functions.js";
import { removeClass } from "./functions.js";

const tabBody = document.querySelector('.tabs')

if (tabBody) {
	const tabButtons = Array.from(tabBody.querySelectorAll('.tabs__btn'));
	const tabSlides = Array.from(tabBody.querySelectorAll('.tabs__slide'));
	const tabIndicator = tabBody.querySelector('.tabs__indicator');

	function tabFunc() {
		let numTabs = tabButtons.length;
		let firstElement = document.querySelector('.tabs__buttons').firstElementChild;
	
		tabButtons.forEach(elem => {
			elem.addEventListener('click', (e) => {
				let currentBtn = e.target.closest('.tabs__btn');
				let tabId = currentBtn.getAttribute('data-tab');
				let currentTab = document.querySelector(tabId);
				let activeTab = currentBtn.classList.contains('_active');
	
				if (!activeTab) {
					tabButtons.forEach(item => {
						removeClass(item, '_active');
					});
	
					tabSlides.forEach(item => {
						removeClass(item, '_active');
					});
				}
	
				addClass(currentBtn, '_active');
				addClass(currentTab, '_active');
	
				changeIndicator(currentBtn);
				e.preventDefault()
			})

			firstElement.click();
		})
	
		function changeIndicator(btn) {
			let indexBtn = tabButtons.indexOf(btn);
			tabIndicator.style.left = `calc(${indexBtn} * 100% / ${numTabs})`;
		}
	}

	tabFunc();
}



