/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/tabs.js":
/*!***********************************!*\
  !*** ./src/js/components/tabs.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/functions.js */ \"./src/js/modules/functions.js\");\n\n\n\nconst tabBody = document.querySelector('.tabs')\n\nif (tabBody) {\n\tconst tabButtons = Array.from(tabBody.querySelectorAll('.tabs__btn'));\n\tconst tabSlides = Array.from(tabBody.querySelectorAll('.tabs__slide'));\n\tconst tabIndicator = tabBody.querySelector('.tabs__indicator');\n\tconst amountVar = document.querySelector(':root');\n\n\tfunction tabFunc() {\n\t\tlet numTabs = tabButtons.length;\n\n\t\tamountVar.style.setProperty(\"--amount-tab\", numTabs);\n\n\t\tlet firstElement = document.querySelector('.tabs__buttons').firstElementChild;\n\n\t\tfor (let elem of tabButtons) {\n\t\t\telem.addEventListener('click', (e) => {\n\t\t\t\tlet currentBtn = e.target.closest('.tabs__btn');\n\t\t\t\tlet tabId = currentBtn.getAttribute('data-tab');\n\t\t\t\tlet currentTab = document.querySelector(tabId);\n\t\t\t\tlet activeTab = currentBtn.classList.contains('_active');\n\n\t\t\t\tif (!activeTab) {\n\t\t\t\t\tfor (let item of tabButtons) {\n\t\t\t\t\t\t(0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.removeClass)(item, '_active');\n\t\t\t\t\t};\n\n\t\t\t\t\tfor (let item of tabSlides) {\n\t\t\t\t\t\t(0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.removeClass)(item, '_active');\n\t\t\t\t\t};\n\t\t\t\t}\n\n\t\t\t\t(0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(currentBtn, '_active');\n\t\t\t\t(0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(currentTab, '_active');\n\n\t\t\t\tchangeIndicator(currentBtn);\n\t\t\t\te.preventDefault()\n\t\t\t})\n\n\t\t\tfirstElement.click();\n\t\t}\n\n\t\tfunction changeIndicator(btn) {\n\t\t\tlet indexBtn = tabButtons.indexOf(btn);\n\t\t\ttabIndicator.style.left = `calc(${indexBtn} * 100% / ${numTabs})`;\n\t\t}\n\t}\n\n\ttabFunc();\n}\n\n\n//# sourceURL=webpack://gulp-2022/./src/js/components/tabs.js?");

/***/ }),

/***/ "./src/js/modules/functions.js":
/*!*************************************!*\
  !*** ./src/js/modules/functions.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addClass\": () => (/* binding */ addClass),\n/* harmony export */   \"isWebp\": () => (/* binding */ isWebp),\n/* harmony export */   \"removeClass\": () => (/* binding */ removeClass),\n/* harmony export */   \"toggleClass\": () => (/* binding */ toggleClass)\n/* harmony export */ });\n/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */\r\nfunction isWebp() {\r\n\t// Проверка поддержки webp\r\n\tfunction testWebP(callback) {\r\n\t\tlet webP = new Image();\r\n\t\twebP.onload = webP.onerror = function () {\r\n\t\t\tcallback(webP.height == 2);\r\n\t\t};\r\n\t\twebP.src = \"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA\";\r\n\t}\r\n\t// Добавление класса _webp или _no-webp для HTML\r\n\ttestWebP(function (support) {\r\n\t\tlet className = support === true ? 'webp' : 'no-webp';\r\n\t\tdocument.documentElement.classList.add(className);\r\n\t});\r\n};\r\n\r\n\r\nfunction removeClass(elem, nameClass) {\r\n\telem.classList.remove(`${nameClass}`);\r\n}\r\n\r\nfunction addClass(elem, nameClass) {\r\n\telem.classList.add(`${nameClass}`);\r\n}\r\n\r\n\r\nfunction toggleClass(elem, nameClass) {\r\n\telem.classList.toggle(`${nameClass}`);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://gulp-2022/./src/js/modules/functions.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/components/tabs.js");
/******/ 	
/******/ })()
;