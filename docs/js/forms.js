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

/***/ "./src/js/components/forms.js":
/*!************************************!*\
  !*** ./src/js/components/forms.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/functions.js */ \"./src/js/modules/functions.js\");\n//Импортирую ф-ии добавления класса\n\n\n//Меню учетной записи\nconst userMenu = document.querySelector('.user-menu');\n\nif (userMenu) {\n\tconst itemMenu = userMenu.querySelectorAll('.user-menu__item');\n\tconst bodyMenu = userMenu.querySelectorAll('.user-menu__content');\n\tconst navbar = userMenu.querySelector('.user-menu__navbar');\n\tconst openBtn = userMenu.querySelector('.user-menu__open');\n\tconst closeBtn = userMenu.querySelector('.user-menu__close');\n\tconst body = document.querySelector('body');\n\n\titemMenu.forEach(elem => {\n\t\telem.addEventListener('click', e => {\n\t\t\tlet currentLink = e.target.closest('.user-menu__item');\n\t\t\tlet linkId = currentLink.getAttribute('data-link');\n\t\t\tlet currentBody = document.querySelector(linkId);\n\t\t\tlet activeItem = currentLink.querySelector('_active');\n\n\t\t\tif (!activeItem) {\n\t\t\t\tfor (let item of itemMenu) {\n\t\t\t\t\t(0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.removeClass)(item, '_active');\n\t\t\t\t}\n\n\t\t\t\tfor (let item of bodyMenu) {\n\t\t\t\t\t(0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.removeClass)(item, '_active');\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t(0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(currentLink, '_active');\n\t\t\t(0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(currentBody, '_active');\n\t\t\t(0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.removeClass)(navbar, '_active');\n\t\t\t(0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.removeClass)(body, '_lock');\n\t\t})\n\t})\n\n\tif (closeBtn) {\n\t\topenBtn.addEventListener('click', e => {\n\n\t\t\t(0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(navbar, '_active');\n\t\t\t(0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(body, '_lock');\n\t\t})\n\t\tcloseBtn.addEventListener('click', e => {\n\t\t\t;(0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.removeClass)(navbar, '_active');\n\t\t\t(0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.removeClass)(body, '_lock');\n\t\t})\n\t}\n}\n\n\n\n//# sourceURL=webpack://gulp-2022/./src/js/components/forms.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/components/forms.js");
/******/ 	
/******/ })()
;