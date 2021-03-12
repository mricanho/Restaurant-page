/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/base */ \"./src/modules/base.js\");\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_menu__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contact */ \"./src/modules/contact.js\");\n/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_contact__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _modules_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/helper */ \"./src/modules/helper.js\");\n\n\n\n\n\n\n(0,_modules_base__WEBPACK_IMPORTED_MODULE_0__.base)();\n(0,_modules_helper__WEBPACK_IMPORTED_MODULE_4__.renderPage)(_modules_home__WEBPACK_IMPORTED_MODULE_1__.home)();\n\nconst tabs = [\n  { id: 'home', render: (0,_modules_helper__WEBPACK_IMPORTED_MODULE_4__.renderPage)(_modules_home__WEBPACK_IMPORTED_MODULE_1__.home) },\n  { id: 'menu', render: (0,_modules_helper__WEBPACK_IMPORTED_MODULE_4__.renderPage)((_modules_menu__WEBPACK_IMPORTED_MODULE_2___default())) },\n  { id: 'contact', render: (0,_modules_helper__WEBPACK_IMPORTED_MODULE_4__.renderPage)((_modules_contact__WEBPACK_IMPORTED_MODULE_3___default())) },\n];\n\ntabs.forEach(tab => {\n  const tabButton = document.getElementById(tab.id);\n  tabButton.addEventListener('click', tab.render);\n});\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/base.js":
/*!*****************************!*\
  !*** ./src/modules/base.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"base\": () => (/* binding */ base)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./src/modules/helper.js\");\n\n\nconst base = () => {\n  const content = document.querySelector(\"div#content\");\n  const section = document.createElement(\"section\");\n\n  function nav() {\n    const heroHead = document.createElement(\"div\");\n  heroHead.setAttribute(\"class\", \"hero-head\");\n  section.appendChild(heroHead);\n\n  const navbar = document.createElement(\"nav\");\n  navbar.setAttribute(\"class\", \"navbar\");\n  heroHead.appendChild(navbar);\n\n  const container = document.createElement(\"div\");\n  container.setAttribute(\"class\", \"container\");\n  navbar.appendChild(container);\n\n  const navbarBrand = document.createElement(\"div\");\n  navbarBrand.setAttribute(\"class\", \"navbar-brand\");\n  container.appendChild(navbarBrand);\n\n  const navbarItem = document.createElement(\"a\");\n  navbarItem.setAttribute(\"class\", \"navbar-item\");\n  navbarBrand.appendChild(navbarItem);\n\n  const logoImg = document.createElement(\"img\");\n  logoImg.setAttribute(\"src\", \"./assets/images/ihop.png\");\n  logoImg.setAttribute(\"alt\", \"ihop logo\");\n  navbarItem.appendChild(logoImg);\n\n  const menuHero = document.createElement(\"div\");\n  menuHero.setAttribute(\"class\", \"navbar-menu\");\n  menuHero.setAttribute(\"id\", \"navbarMenuHeroB\");\n  container.appendChild(menuHero);\n\n  const navbarEnd = document.createElement(\"div\");\n  navbarEnd.setAttribute(\"class\", \"navbar-end\");\n  navbarEnd.setAttribute(\"id\", \"here-tab\");\n  menuHero.appendChild(navbarEnd);\n\n  }\n\n  function addSection() {\n    section.setAttribute(\"class\", \"hero is-info is-large\");\n    content.appendChild(section);\n  }\n\n  function bodyContainer() {\n    const heroBody = document.createElement(\"div\");\n    heroBody.setAttribute(\"class\", \"hero-body py-6\");\n    section.appendChild(heroBody);\n\n    const bodyContainer = document.createElement(\"div\");\n    bodyContainer.setAttribute(\"class\", \"container has-text-centered\");\n    bodyContainer.setAttribute(\"id\", \"body-cont\");\n    heroBody.appendChild(bodyContainer);\n\n    const title = document.createElement(\"p\");\n    title.setAttribute(\"class\", \"title mb-6\");\n    title.innerHTML = \"ALL THE PANCAKES YOU CAN EAT\";\n    bodyContainer.appendChild(title);\n\n    const tileA = document.createElement(\"figure\");\n    tileA.setAttribute(\"class\", \"image is-5by3\");\n    tileA.setAttribute(\"id\", \"here-img\");\n    bodyContainer.appendChild(tileA);\n  }\n  \n  nav();\n  addSection();\n  bodyContainer();\n\n  [\"Home\", \"Menu\", \"Contact\"].forEach(btn => (0,_helper__WEBPACK_IMPORTED_MODULE_0__.createTab)(btn));\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/base.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://restaurant-page/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/helper.js":
/*!*******************************!*\
  !*** ./src/modules/helper.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderPage\": () => (/* binding */ renderPage),\n/* harmony export */   \"createTab\": () => (/* binding */ createTab)\n/* harmony export */ });\nfunction renderPage(page) {\n  return () => {\n    const renderArea = document.getElementById(page.renderAreaId);\n    renderArea.innerHTML = '';\n    page.render(renderArea);\n  };\n}\n\nfunction createTab(name) {\n  const tab = document.createElement('a');\n  const navbarEnd = document.getElementById(\"here-tab\")\n  tab.setAttribute('id', `${name.toLowerCase()}Tab`);\n  tab.className = 'navbar-item';\n  tab.textContent = name;\n  navbarEnd.appendChild(tab);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/helper.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"home\": () => (/* binding */ home)\n/* harmony export */ });\n const home = {\n  renderAreaId: 'here-img',\n  render: (location) => {  \n    const tileV = document.createElement(\"img\");\n    tileV.src = \"./assets/images/stack.png\";\n    location.textContent = \"all the pancakes you can eat\";\n    location.appendChild(tileV);\n  },\n };\n\n \n\n//# sourceURL=webpack://restaurant-page/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://restaurant-page/./src/modules/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;