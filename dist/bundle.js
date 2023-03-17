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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n  font-size: 16px;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nnav {\\r\\n  position: sticky;\\r\\n  top: 0;\\r\\n  background-color: orange;\\r\\n  z-index: 1;\\r\\n}\\r\\n\\r\\n.nav-list {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  list-style: none;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.nav-list a {\\r\\n  text-decoration: none;\\r\\n  color: black;\\r\\n  padding: 0 2%;\\r\\n}\\r\\n\\r\\n.popup-items {\\r\\n  width: 45%;\\r\\n  border-radius: 25px;\\r\\n  margin-left: 26%;\\r\\n  box-sizing: border-box;\\r\\n  padding: 0 5%;\\r\\n  border: 2px solid #ec5242;\\r\\n  backdrop-filter: blur(7px);\\r\\n}\\r\\n\\r\\n.show {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.icon-container {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.x-icon {\\r\\n  padding-right: 4%;\\r\\n  padding-top: 2%;\\r\\n}\\r\\n\\r\\n.movie-title {\\r\\n  font-size: 20px;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.featured-image {\\r\\n  width: 40%;\\r\\n  padding: 2% 25%;\\r\\n}\\r\\n\\r\\n.properties {\\r\\n  display: flex;\\r\\n  gap: 2rem;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.genre-list {\\r\\n  list-style: none;\\r\\n  display: flex;\\r\\n  gap: 0.8rem;\\r\\n}\\r\\n\\r\\n.summary {\\r\\n  text-align: center;\\r\\n  font-weight: 700;\\r\\n}\\r\\n\\r\\n.title {\\r\\n  text-align: center;\\r\\n  font-size: 18px;\\r\\n  margin-top: 2%;\\r\\n}\\r\\n\\r\\n.input-form {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  padding: 2% 10%;\\r\\n}\\r\\n\\r\\n.commented li {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.input {\\r\\n  padding: 8px;\\r\\n  margin: 0.8rem 0;\\r\\n  border: 1px solid black;\\r\\n}\\r\\n\\r\\n.btn {\\r\\n  padding: 1%;\\r\\n  box-shadow: 2px 3px 3px rgba(0, 0, 0, 1);\\r\\n  background-color: #ec5242;\\r\\n  color: #f0f2f5;\\r\\n  border-radius: 5px;\\r\\n  width: 115px;\\r\\n}\\r\\n\\r\\nfooter::before {\\r\\n  display: block;\\r\\n  clear: both;\\r\\n  height: 100px;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  position: relative;\\r\\n  bottom: 0;\\r\\n  left: 0;\\r\\n  border: 2px solid black;\\r\\n  width: 99.7%;\\r\\n  text-align: center;\\r\\n  padding: 10px 0;\\r\\n  margin-top: 100px;\\r\\n  background-color: orange;\\r\\n}\\r\\n\\r\\n.header {\\r\\n  text-align: center;\\r\\n  margin-top: 50px;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  font-size: 2.5rem;\\r\\n}\\r\\n\\r\\n.whole-container {\\r\\n  display: grid;\\r\\n  grid-template-columns: 15% 15% 15% 15% 15% 15%;\\r\\n  grid-template-rows: auto auto;\\r\\n  gap: 5%;\\r\\n  margin-top: 5%;\\r\\n  justify-content: center;\\r\\n  padding: 0 10%;\\r\\n  overflow: visible;\\r\\n}\\r\\n\\r\\n.item {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 10px;\\r\\n}\\r\\n\\r\\n.details {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.details > p {\\r\\n  font-weight: 700;\\r\\n  font-size: 1.2rem;\\r\\n}\\r\\n\\r\\n.fa-regular {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  background-color: orange;\\r\\n  padding: 5px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nbutton:hover {\\r\\n  background-color: rgb(48, 32, 1);\\r\\n  color: white;\\r\\n}\\r\\n\\r\\nimg {\\r\\n  transition: 0.3s ease-in-out;\\r\\n  z-index: 0;\\r\\n}\\r\\n\\r\\n.item > img {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\nimg:hover {\\r\\n  -webkit-transform: scale(1);\\r\\n  transform: scale(0.8);\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://leaderboard/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://leaderboard/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://leaderboard/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://leaderboard/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_displaypopup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/displaypopup.js */ \"./src/modules/displaypopup.js\");\n/* harmony import */ var _modules_comments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/comments.js */ \"./src/modules/comments.js\");\n/* harmony import */ var _modules_showComments_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/showComments.js */ \"./src/modules/showComments.js\");\n/* harmony import */ var _modules_homepage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/homepage.js */ \"./src/modules/homepage.js\");\n/* harmony import */ var _modules_likes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/likes.js */ \"./src/modules/likes.js\");\n/* harmony import */ var _modules_countItems_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/countItems.js */ \"./src/modules/countItems.js\");\n\n\n\n\n\n\n\n\nconst showBtn = document.querySelector('.showBtn');\nconst homepage = document.querySelector('.whole-container');\nconst showMovieDetails = document.querySelector('.popup-section');\n\ndocument.addEventListener('click', async (event) => {\n  let commentId;\n  if (event.target.className === 'fa-regular fa-heart') {\n    commentId = event.target.id;\n    const commentIndex = Number(commentId) - 1;\n    const postLike = await (0,_modules_likes_js__WEBPACK_IMPORTED_MODULE_5__.postData)(commentIndex);\n    if (postLike.status === 201) {\n      const response = await (0,_modules_likes_js__WEBPACK_IMPORTED_MODULE_5__.getData)();\n      const container = document.getElementsByClassName('likesContainer')[commentIndex];\n      container.innerHTML = `<span>${response[commentIndex].likes}</span>`;\n    }\n  }\n\n  if (event.target.className === 'comment-btn') {\n    commentId = event.target.id.split('-')[1];\n    await (0,_modules_displaypopup_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(commentId);\n    homepage.style.display = 'none';\n    showMovieDetails.style.display = 'block';\n    await (0,_modules_showComments_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(commentId);\n  }\n\n  if (event.target.className === 'btn') {\n    commentId = event.target.id.split('-')[1];\n    const form = document.querySelector('#form');\n    form.onsubmit = async (e) => {\n      e.preventDefault();\n      const userName = document.getElementById('username');\n      const comment = document.getElementById('comment');\n      const postCommentData = await (0,_modules_comments_js__WEBPACK_IMPORTED_MODULE_2__.postShowCommentData)(userName.value, comment.value, commentId);\n      if (postCommentData.status === 201) {\n        const commentedList = await (0,_modules_showComments_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(commentId);\n        const commentData = document.querySelector('.comments');\n        commentData.innerHTML = `<ul>\n                ${commentedList}\n                </ul>`;\n      }\n\n      form.reset();\n    };\n  }\n\n  if (event.target.className === 'fa-solid fa-x') {\n    homepage.style.display = 'grid';\n    showMovieDetails.style.display = 'none';\n  }\n});\n\nshowBtn.addEventListener('click', (e) => {\n  e.preventDefault();\n  (0,_modules_homepage_js__WEBPACK_IMPORTED_MODULE_4__.showMore)();\n  (0,_modules_countItems_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n});\n\n(0,_modules_likes_js__WEBPACK_IMPORTED_MODULE_5__.populateLikes)();\n(0,_modules_countItems_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n\n\n//# sourceURL=webpack://leaderboard/./src/index.js?");

/***/ }),

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getShowCommentData\": () => (/* binding */ getShowCommentData),\n/* harmony export */   \"postShowCommentData\": () => (/* binding */ postShowCommentData)\n/* harmony export */ });\nconst baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LOf5L284gEd1pGlHG0AY/comments';\n\nconst postShowCommentData = async (userName, comment, id) => {\n  const response = await fetch(baseUrl, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({\n      username: userName,\n      comment,\n      item_id: id,\n    }),\n  });\n  return response;\n};\n\nconst getShowCommentData = async (id) => {\n  const fetchUrl = baseUrl.concat(`?item_id=${id}`);\n  const response = await fetch(fetchUrl);\n  const data = await response.json();\n  return data;\n};\n\n\n\n//# sourceURL=webpack://leaderboard/./src/modules/comments.js?");

/***/ }),

/***/ "./src/modules/countItems.js":
/*!***********************************!*\
  !*** ./src/modules/countItems.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst countItems = () => {\n  setTimeout(() => {\n    const container = document.getElementsByClassName('item').length;\n    const showSpan = document.querySelector('.showSpan');\n    showSpan.innerHTML = container;\n  }, 1000);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countItems);\n\n\n//# sourceURL=webpack://leaderboard/./src/modules/countItems.js?");

/***/ }),

/***/ "./src/modules/displaypopup.js":
/*!*************************************!*\
  !*** ./src/modules/displaypopup.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _showComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showComments.js */ \"./src/modules/showComments.js\");\n/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments.js */ \"./src/modules/comments.js\");\n\n\n\nconst populatePopup = async (id) => {\n  const response = await fetch(`https://api.tvmaze.com/shows/${id}`);\n  const result = await response.json();\n  return result;\n};\n\nconst popupContainer = document.querySelector('.popup-section');\nlet popup = '';\nconst showPopup = async (id) => {\n  let commentCount = 0;\n  const popupData = await populatePopup(id);\n  const commentedList = await (0,_showComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id);\n  const displayComments = await (0,_comments_js__WEBPACK_IMPORTED_MODULE_1__.getShowCommentData)(id);\n\n  if (displayComments.error) {\n    commentCount = 0;\n  } else {\n    commentCount = displayComments.length;\n  }\n  const genresList = popupData.genres.map((genre) => `<li>${genre}</li>`).join('');\n  popup = '';\n  popup += `\n        <div class=\"popup-items\">\n            <div class=\"icon-container\">\n                <img src=\"${popupData.image.medium}\" alt=\"\" class=\"featured-image\">\n                <a href=\"\" class=\"x-icon\"><i class=\"fa-solid fa-x\"></i></a>\n            </div>\n            <h2 class=\"movie-title\">${popupData.name}</h2>\n            <div class=\"properties\">\n                <ul class=\"genre-list\">Genre:${genresList}</ul>\n                <p>Language: ${popupData.language}</p>\n                <p>Rating: ${popupData.rating.average}</p>\n            </div>\n            <p class=\"summary\">Summary: ${popupData.summary}</p>\n            <div id=\"comment-container\">\n                <h3 class=\"title\">Comments: ${commentCount} </h3>\n                <div class=\"comments\">\n                \n                   <ul class=\"commented\">\n                   ${commentedList}\n                   </ul> \n                </div>\n                <div>\n                    <h4 class=\"title\">Add a comment</h4>\n                    <form class=\"input-form\" id=\"form\">\n                    <input type=\"text\" id=\"username\" class=\"input\" name=\"addname\" placeholder=\"Your name\" /> \n                    <input type=\"text\" id=\"comment\" class=\"input\" name=\"addscore\" placeholder=\"Your insights\" />\n                    <button type=\"submit\" id=\"btnComment-${id}\" class=\"btn\">Comment</button>\n                    </form>\n                </div>\n            </div>\n      </div>\n      `;\n  popupContainer.innerHTML = popup;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showPopup);\n\n//# sourceURL=webpack://leaderboard/./src/modules/displaypopup.js?");

/***/ }),

/***/ "./src/modules/homepage.js":
/*!*********************************!*\
  !*** ./src/modules/homepage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render),\n/* harmony export */   \"showMore\": () => (/* binding */ showMore)\n/* harmony export */ });\nconst getData = async () => {\n  const request = await fetch('https://api.tvmaze.com/shows');\n  const response = await request.json();\n  return response;\n};\n\nconst render = async () => {\n  const container = document.querySelector('.whole-container');\n  const jsonData = await getData();\n  let item = '';\n  for (let i = 0; i < 6; i++) {\n    item += `\n      <div class=\"item\">\n          <img src=\"${jsonData[i].image.medium}\" alt=\"\" />\n          <div class=\"details\">\n            <p>${jsonData[i].name}</p>\n            <div>\n                <i id=\"${jsonData[i].id}\" class=\"fa-regular fa-heart\"></i>\n                <div class=\"likesContainer\"></div>\n            </div>\n          </div>\n          <button class=\"comment-btn\" id=\"btn-${jsonData[i].id}\">Comments</button>\n          <button class=\"${i}\">Reservations</button>\n        </div>`;\n  }\n  container.innerHTML = item;\n};\n\nrender();\n\nconst showMore = async () => {\n  const container = document.querySelector('.whole-container').children.length;\n  const jsonData = await getData();\n  const wholeContainer = document.querySelector('.whole-container');\n  let item = '';\n  for (let i = container; i < container + 6; i++) {\n    item += `\n    <div class=\"item\">\n        <img src=\"${jsonData[i].image.medium}\" alt=\"\" />\n        <div class=\"details\">\n          <p>${jsonData[i].name}</p>\n          <div>\n            <i id=\"${jsonData[i].id}\" class=\"fa-regular fa-heart\"></i>\n            <div class=\"likesContainer\"></div>\n          </div>\n        </div>\n        <button class=\"comment-btn\" id=\"btn-${jsonData[i].id}\">Comments</button>\n        <button class=\"${i}\">Reservations</button>\n      </div>`;\n  }\n  wholeContainer.insertAdjacentHTML('beforeend', item);\n};\n\n\n\n\n//# sourceURL=webpack://leaderboard/./src/modules/homepage.js?");

/***/ }),

/***/ "./src/modules/likes.js":
/*!******************************!*\
  !*** ./src/modules/likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => (/* binding */ getData),\n/* harmony export */   \"populateLikes\": () => (/* binding */ populateLikes),\n/* harmony export */   \"postData\": () => (/* binding */ postData)\n/* harmony export */ });\nconst postData = async (i) => {\n  const res = await fetch(\n    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LOf5L284gEd1pGlHG0AY/likes',\n    {\n      method: 'POST',\n      body: JSON.stringify({\n        item_id: i,\n      }),\n      headers: { 'Content-Type': 'application/json' },\n    },\n  );\n  return res;\n};\n\nconst getData = async () => {\n  const res = await fetch(\n    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LOf5L284gEd1pGlHG0AY/likes',\n  );\n  const response = await res.json();\n  return response;\n};\n\nconst populateLikes = async () => {\n  const response = await getData();\n  for (let i = 0; i < 6; i++) {\n    const container = document.getElementsByClassName('likesContainer')[i];\n    container.innerHTML = `<span>${response[i].likes}</span>`;\n  }\n};\n\n\n\n\n//# sourceURL=webpack://leaderboard/./src/modules/likes.js?");

/***/ }),

/***/ "./src/modules/showComments.js":
/*!*************************************!*\
  !*** ./src/modules/showComments.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments.js */ \"./src/modules/comments.js\");\n\n\nconst showComments = async (id) => {\n  let commented = '';\n  let commentList = '';\n  const displayComments = await (0,_comments_js__WEBPACK_IMPORTED_MODULE_0__.getShowCommentData)(id);\n  if (displayComments.error) {\n    commentList = '<li>There are no comments at this point</li>';\n  } else {\n    commentList = displayComments.map((comment) => `<li>${comment.creation_date} ${comment.username} : ${comment.comment}</li>`).join('');\n  }\n\n  commented += `                                                                                  \n     <ul>\n     ${commentList}\n     </ul> `;\n  return commented;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showComments);\n\n//# sourceURL=webpack://leaderboard/./src/modules/showComments.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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