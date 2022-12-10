import { addClass } from "./functions.js";
import { removeClass } from "./functions.js";

const tabsBtn = document.querySelectorAll('.delivery-tabs__btn');
const tabsBody = document.querySelectorAll('.delivery-tabs__content');

if (tabsBtn) {
	tabsBtn.forEach(item => {
		item.addEventListener('click', e => {
			let currentBtn = item;
			let tabId = currentBtn.getAttribute("data-tab");
			let currentTab = document.querySelector(tabId);

			if (!currentBtn.classList.contains('_active')) {

				tabsBtn.forEach(item => {
					removeClass(item, '_active');
				});

				tabsBody.forEach(item => {
					removeClass(item, '_active');
				});
			}

			addClass(currentBtn, '_active');
			addClass(currentTab, '_active');
		})
	})

	let firstTab = document.querySelector('.delivery-tabs__btn');

	if (firstTab) firstTab.click();
}


