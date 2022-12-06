const tabsBtn = document.querySelectorAll('.delivery-tabs__btn');
const tabsBody = document.querySelectorAll('.delivery-tabs__block');

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
}

function removeClass(elem, className) {
	elem.classList.remove(className);
}
function addClass(elem, className) {
	elem.classList.add(className);
}

document.querySelector('.delivery-tabs__btn').click();