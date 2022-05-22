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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/load */ \"./src/modules/load.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/catalog */ \"./src/modules/catalog.js\");\n/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/filter */ \"./src/modules/filter.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_load__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_search__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_catalog__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_filter__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n\n\n//# sourceURL=webpack://glo-ozon/./src/index.js?");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderCart */ \"./src/modules/renderCart.js\");\n/* harmony import */ var _postData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postData */ \"./src/modules/postData.js\");\n\r\n\r\n\r\nconst cart = () => {\r\n\tconst cartBtn = document.getElementById('cart')\r\n\tconst cartModal = document.querySelector('.cart')\r\n\tconst cartCloseBtn = cartModal.querySelector('.cart-close')\r\n\tconst cartTotal = cartModal.querySelector('.cart-total > span')\r\n\tconst cartSendBtn = cartModal.querySelector('.cart-confirm')\r\n\tconst goodsWrapper = document.querySelector('.goods')\r\n\tconst cartWrapper = document.querySelector('.cart-wrapper')\r\n\tconst openCart = () => {\r\n\t\tconst cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []\r\n\r\n\t\tcartModal.style.display = 'flex'\r\n\r\n\t\t;(0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart)\r\n\t\tcartTotal.textContent = cart.reduce((sum, goodItem) => {\r\n\t\t\treturn sum + goodItem.price\r\n\t\t}, 0)\r\n\t}\r\n\r\n\tconst closeCart = () => {\r\n\t\tcartModal.style.display = ''\r\n\t}\r\n\r\n\tcartBtn.addEventListener('click', openCart)\r\n\tcartCloseBtn.addEventListener('click', closeCart)\r\n\r\n\tgoodsWrapper.addEventListener('click', (event) => {\r\n\t\tif (event.target.classList.contains('btn-primary')) {\r\n\t\t\tconst card = event.target.closest('.card')\r\n\t\t\tconst key = card.dataset.key\r\n\t\t\tconst goods = JSON.parse(localStorage.getItem('goods'))\r\n\t\t\tconst cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []\r\n\t\t\tconst goodItem = goods.find((item) => {\r\n\t\t\t\treturn item.id === +key\r\n\t\t\t})\r\n\r\n\t\t\tcart.push(goodItem)\r\n\t\t\tlocalStorage.setItem('cart', JSON.stringify(cart))\r\n\t\t}\r\n\t})\r\n\tcartWrapper.addEventListener('click', (event) => {\r\n\t\tif (event.target.classList.contains('btn-primary')) {\r\n\t\t\tconst cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []\r\n\t\t\tconst card = event.target.closest('.card')\r\n\t\t\tconst key = card.dataset.key\r\n\t\t\tconst index = cart.findIndex((item) => {\r\n\t\t\t\treturn item.id === +key\r\n\t\t\t})\r\n\r\n\t\t\tcart.splice(index, 1)\r\n\r\n\t\t\tlocalStorage.setItem('cart', JSON.stringify(cart))\r\n\r\n\t\t\t;(0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart)\r\n\t\t\tcartTotal.textContent = cart.reduce((sum, goodItem) => {\r\n\t\t\t\treturn sum + goodItem.price\r\n\t\t\t}, 0)\r\n\t\t}\r\n\t})\r\n\tcartSendBtn.addEventListener('click', () => {\r\n\t\tconst cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []\r\n\r\n\t\t;(0,_postData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cart).then(() => {\r\n\t\t\tlocalStorage.removeItem('cart')\r\n\r\n\t\t\t;(0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([])\r\n\r\n\t\t\tcartTotal.textContent = 0\r\n\t\t})\r\n\t})\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\r\n\n\n//# sourceURL=webpack://glo-ozon/./src/modules/cart.js?");

/***/ }),

/***/ "./src/modules/catalog.js":
/*!********************************!*\
  !*** ./src/modules/catalog.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst catalog = () => {\r\n\tconst btnCatalog = document.querySelector('.catalog-button > button')\r\n\tconst catalogModal = document.querySelector('.catalog')\r\n\tconst catalogModalItems = document.querySelectorAll('.catalog li')\r\n\r\n\tlet isOpen = false\r\n\r\n\tbtnCatalog.addEventListener('click', () => {\r\n\t\tisOpen = !isOpen\r\n\r\n\t\tif (isOpen) {\r\n\t\t\tcatalogModal.style.display = 'block'\r\n\t\t} else {\r\n\t\t\tcatalogModal.style.display = ''\r\n\t\t}\r\n\t})\r\n\tcatalogModalItems.forEach((item) => {\r\n\t\titem.addEventListener('click', () => {\r\n\t\t\tconst text = item.textContent\r\n\t\t\t;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n\t\t\t\t;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.categoryFilter)(data, text))\r\n\t\t\t})\r\n\t\t})\r\n\t})\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);\r\n\n\n//# sourceURL=webpack://glo-ozon/./src/modules/catalog.js?");

/***/ }),

/***/ "./src/modules/filter.js":
/*!*******************************!*\
  !*** ./src/modules/filter.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst filter = () => {\r\n\tconst minInput = document.getElementById('min')\r\n\tconst maxInput = document.getElementById('max')\r\n\tconst checkboxInput = document.getElementById('discount-checkbox')\r\n\tconst checkboxSpan = document.querySelector('.filter-check_checkmark')\r\n\r\n\tminInput.addEventListener('input', () => {\r\n\t\t;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n\t\t\t;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\r\n\t\t\t\t(0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.hotSaleFilter)(data, checkboxInput.checked), minInput.value, maxInput.value)\r\n\t\t\t)\r\n\t\t})\r\n\t})\r\n\r\n\tmaxInput.addEventListener('input', () => {\r\n\t\t;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n\t\t\t;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\r\n\t\t\t\t(0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.hotSaleFilter)(data, checkboxInput.checked), minInput.value, maxInput.value)\r\n\t\t\t)\r\n\t\t})\r\n\t})\r\n\tcheckboxInput.addEventListener('change', () => {\r\n\t\tif (checkboxInput.checked) {\r\n\t\t\tcheckboxSpan.classList.add('checked')\r\n\t\t} else {\r\n\t\t\tcheckboxSpan.classList.remove('checked')\r\n\t\t}\r\n\r\n\t\t(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n\t\t\t(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\r\n\t\t\t\t(0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.hotSaleFilter)(data, checkboxInput.checked), minInput.value, maxInput.value)\r\n\t\t\t)\r\n\t\t})\r\n\t})\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filter);\r\n\n\n//# sourceURL=webpack://glo-ozon/./src/modules/filter.js?");

/***/ }),

/***/ "./src/modules/filters.js":
/*!********************************!*\
  !*** ./src/modules/filters.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"categoryFilter\": () => (/* binding */ categoryFilter),\n/* harmony export */   \"hotSaleFilter\": () => (/* binding */ hotSaleFilter),\n/* harmony export */   \"priceFilter\": () => (/* binding */ priceFilter),\n/* harmony export */   \"searchFilter\": () => (/* binding */ searchFilter)\n/* harmony export */ });\nconst searchFilter = (goods, value) => {\r\n\tconsole.log(goods)\r\n\treturn goods.filter((goodsItem) => {\r\n\t\treturn goodsItem.title.toLowerCase().includes(value.toLowerCase())\r\n\t})\r\n}\r\n\r\nconst categoryFilter = (goods, value) => {\r\n\tconsole.log(goods)\r\n\treturn goods.filter((goodsItem) => {\r\n\t\treturn goodsItem.category === value\r\n\t})\r\n}\r\n\r\nconst priceFilter = (goods, min, max) => {\r\n\tconsole.log(goods)\r\n\treturn goods.filter((goodsItem) => {\r\n\t\tif (min === '' && max === '') {\r\n\t\t\treturn goodsItem\r\n\t\t} else if (min !== '' && max !== '') {\r\n\t\t\treturn goodsItem.price > +min && goodsItem.price < +max\r\n\t\t} else if (min !== '' && max === '') {\r\n\t\t\treturn goodsItem.price > +min\r\n\t\t} else if (min === '' && max !== '') {\r\n\t\t\treturn goodsItem.price < +max\r\n\t\t}\r\n\t})\r\n}\r\n\r\nconst hotSaleFilter = (goods, value) => {\r\n\tconsole.log(goods)\r\n\treturn goods.filter((goodsItem) => {\r\n\t\tif (value) {\r\n\t\t\treturn goodsItem.sale === true\r\n\t\t} else {\r\n\t\t\treturn goodsItem\r\n\t\t}\r\n\t})\r\n}\r\n\n\n//# sourceURL=webpack://glo-ozon/./src/modules/filters.js?");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = (str) => {\r\n\treturn fetch(`https://test-76718-default-rtdb.firebaseio.com/goods.json?`).then((response) => {\r\n\t\treturn response.json()\r\n\t})\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\r\n\n\n//# sourceURL=webpack://glo-ozon/./src/modules/getData.js?");

/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n\r\n\r\n\r\nconst load = () => {\r\n\t(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n\t\t(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data)\r\n\t})\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);\r\n\n\n//# sourceURL=webpack://glo-ozon/./src/modules/load.js?");

/***/ }),

/***/ "./src/modules/postData.js":
/*!*********************************!*\
  !*** ./src/modules/postData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst postData = (cart) => {\r\n\treturn fetch('https://jsonplaceholder.typicode.com/posts', {\r\n\t\tmethod: 'POST',\r\n\t\tbody: JSON.stringify(cart),\r\n\t\theaders: {\r\n\t\t\t'Content-type': 'application/json; charset=UTF-8',\r\n\t\t},\r\n\t}).then((res) => res.json())\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);\r\n\n\n//# sourceURL=webpack://glo-ozon/./src/modules/postData.js?");

/***/ }),

/***/ "./src/modules/renderCart.js":
/*!***********************************!*\
  !*** ./src/modules/renderCart.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderCart = (goods) => {\r\n\tconst cartWrapper = document.querySelector('.cart-wrapper')\r\n\r\n\tcartWrapper.innerHTML = ''\r\n\r\n\tif (goods.length === 0) {\r\n\t\tcartWrapper.insertAdjacentHTML(\r\n\t\t\t'beforeend',\r\n\t\t\t`\r\n\t\t<div id='cart-empty'>\r\n\t\tВаша корзина пока пуста :(\r\n\t\t</div>\r\n\t\t`\r\n\t\t)\r\n\t} else {\r\n\t\tgoods.forEach((goodsItem) => {\r\n\t\t\tcartWrapper.insertAdjacentHTML(\r\n\t\t\t\t'beforeend',\r\n\t\t\t\t`\r\n\t\t\t\t\t\t\t\t\t<div class=\"card\" data-key='${goodsItem.id}'>\r\n\t\t\t\t\t\t\t\t\t${goodsItem.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"card-img-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"card-img-top\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tbackground-image: url('${goodsItem.img}');\r\n\t\t\t\t\t\t\t\t\t\t\t\t\"\r\n\t\t\t\t\t\t\t\t\t\t\t></span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"card-body justify-content-between\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-price\">${goodsItem.price}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"card-title\">${goodsItem.title}</h5>\r\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Удалить</button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t`\r\n\t\t\t)\r\n\t\t})\r\n\t}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCart);\r\n\n\n//# sourceURL=webpack://glo-ozon/./src/modules/renderCart.js?");

/***/ }),

/***/ "./src/modules/renderGoods.js":
/*!************************************!*\
  !*** ./src/modules/renderGoods.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderGoods = (goods) => {\r\n\tconst goodsWrapper = document.querySelector('.goods')\r\n\r\n\tlocalStorage.setItem('goods', JSON.stringify(goods))\r\n\r\n\tgoodsWrapper.innerHTML = ''\r\n\r\n\tgoods.forEach((goodsItem) => {\r\n\t\tgoodsWrapper.insertAdjacentHTML(\r\n\t\t\t'beforeend',\r\n\t\t\t`\r\n\t\t\t<div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card\" data-key='${goodsItem.id}'>\r\n\t\t\t\t\t\t\t\t\t${goodsItem.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"card-img-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"card-img-top\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tbackground-image: url('${goodsItem.img}');\r\n\t\t\t\t\t\t\t\t\t\t\t\t\"\r\n\t\t\t\t\t\t\t\t\t\t\t></span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"card-body justify-content-between\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-price\">${goodsItem.price}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"card-title\">${goodsItem.title}</h5>\r\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">В корзину</button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t`\r\n\t\t)\r\n\t})\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGoods);\r\n\n\n//# sourceURL=webpack://glo-ozon/./src/modules/renderGoods.js?");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst search = () => {\r\n\tconst searchInput = document.querySelector('.search-wrapper_input')\r\n\r\n\tsearchInput.addEventListener('input', (event) => {\r\n\t\tconst value = event.target.value\r\n\r\n\t\t;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n\t\t\t;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.searchFilter)(data, value))\r\n\t\t})\r\n\t})\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\r\n\n\n//# sourceURL=webpack://glo-ozon/./src/modules/search.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;