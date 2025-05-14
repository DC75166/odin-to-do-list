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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*{\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\nbody{\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n.container{\n  flex:1;\n  display: flex;\n  flex-direction: column;\n  background-color: rgba(230,230,230,255);\n}\n.header{\n  flex-shrink: 0;\n  background-color: rgba(74,74,74,255);\n}\n.title{\n  display: flex;\n  justify-content: flex-start;\n  padding: 1.5rem 1rem;\n  margin-left: 1.5rem;\n}\n.headline{\n  font-size: 1.5rem;\n  color:rgba(243,240,245,255);\n}\n.todo-body{\n  flex: 1;\n  display: flex;\n  overflow: auto;\n}\n.sidebar{\n  display: flex;\n  flex-direction: column;\n  padding: 1rem 1.5rem;\n  background-color: rgba(35,193,205,255);\n}\n.add{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.form-title{\n  font-size: 1.5rem;\n}\n.add-project{\n  padding:12px;\n  background-color: rgba(74,74,74,255);\n  color:white;\n  border: none;\n  cursor: pointer;\n}\n.add-project:hover{\ntransform: scale(1.1);\n}\n\nform{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 1.5rem 1rem;\n  color:rgba(67,67,73,255);\n  font-weight: 900;\n  background-color:rgba(230,230,230,255);\n  margin: 1rem;\n  gap:.8rem;\n}\n.form1,\n.form2{\n  display: flex;\n  flex-direction: column;\n  padding:.6rem;\n  gap: .4rem;\n}\n.main{\n  display: flex;\n  padding: 25px;\n  margin-top: 9px;\n  gap: 1.2rem;\n  box-sizing: border-box;\n  overflow: hidden;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  justify-content: flex-start;\n  align-content: flex-start;\n}\n\n.project-card {\n  display: flex;\n  flex-direction: column;\n  width: 250px;             /* fixed width */\n  min-height: 180px;        /* optional: gives a consistent card height */\n  padding: 1.5rem;\n  background-color: rgba(230,230,230,255);\n  border: 1px solid rgba(0,0,0,0.1);\n  box-shadow: 2px 2px 5px rgba(0,0,0,0.1);  /* cleaner shadow */\n  gap: 0.8rem;\n  box-sizing: border-box;\n  flex-shrink: 0;           /* prevents cards from shrinking */\n}\n\n.project-card:hover{\n  transform: scale(1.05);\n}\n\nbutton{\n  padding:8px;\n  background-color: rgba(74,74,74,255);\n  color:white;\n  border: none;\n  cursor: pointer;\n}\n\nbutton:hover{\n  transform: scale(1.05);\n}\n\n.body-container{\n  flex:1;\n  display: flex;\n  flex-direction: column;\n}\n.todo-item{\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n  background-color: rgba(230,230,230,255);\n  border: 1px solid rgba(0,0,0,0.1);\n  box-shadow: 2px 2px 5px rgba(0,0,0,0.1);\n  margin-bottom: .8rem;\n  gap: 0.8em;\n  box-sizing: border-box;\n  flex-shrink: 0;           /* prevents cards from shrinking */\n  word-break: break-word;\n  max-width:50rem;\n}\n\n.todo-item span {\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  white-space: normal;\n}\n\n.edit-modal{\n  display: flex;\n  flex-direction: column;\n  padding: 1.5rem;\n  background-color: rgba(230,230,230,255);\n  border: 1px solid rgba(0,0,0,0.1);\n  box-shadow: 2px 2px 5px rgba(0,0,0,0.1);\n  gap: .8rem;\n  box-sizing: border-box;\n}\n.edit-modal-content{\n  display: flex;\n  flex-direction: column;\n  gap: .8rem;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-starter/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-starter/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-starter/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-starter/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-starter/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-starter/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-starter/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-starter/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-starter/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/HomePage/ProjectActions.js":
/*!****************************************!*\
  !*** ./src/HomePage/ProjectActions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProject: () => (/* binding */ addProject),\n/* harmony export */   removeProject: () => (/* binding */ removeProject)\n/* harmony export */ });\n/* harmony import */ var _ProjectManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectManager.js */ \"./src/HomePage/ProjectManager.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ \"./src/HomePage/storage.js\");\n\n\n\nfunction addProject(manager,title,description){\n    const newProject = new _ProjectManager_js__WEBPACK_IMPORTED_MODULE_0__.Project(title,description);\n    manager.add(newProject);\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveToStorage)(manager.list());\n}\n\nfunction removeProject(projectId, manager, displayer) {\n    manager.remove(projectId);\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveToStorage)(manager.list());\n    displayer.render(manager.list());\n  }\n\n//# sourceURL=webpack://webpack-starter/./src/HomePage/ProjectActions.js?");

/***/ }),

/***/ "./src/HomePage/ProjectManager.js":
/*!****************************************!*\
  !*** ./src/HomePage/ProjectManager.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project),\n/* harmony export */   ProjectManager: () => (/* binding */ ProjectManager)\n/* harmony export */ });\nclass Project{\n    constructor(title,description,id = crypto.randomUUID()){\n        this.id = id;\n        this.title = title;\n        this.description = description;\n        this.todos = [];\n    }\n}\n\nclass ProjectManager {\n    constructor() {\n        this.projectList = [];\n    }\n\n    add(project) {\n        this.projectList.push(project);\n    }\n\n    remove(projectId) {\n        this.projectList = this.projectList.filter(p => p.id !== projectId);\n    }\n\n    list() {\n        return [...this.projectList];\n    }\n}\n\n\n//# sourceURL=webpack://webpack-starter/./src/HomePage/ProjectManager.js?");

/***/ }),

/***/ "./src/HomePage/displayProject.js":
/*!****************************************!*\
  !*** ./src/HomePage/displayProject.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DisplayProject: () => (/* binding */ DisplayProject)\n/* harmony export */ });\n/* harmony import */ var _ProjectActions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectActions.js */ \"./src/HomePage/ProjectActions.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style.css */ \"./src/style.css\");\n/* harmony import */ var _To_do_DisplayTodo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../To-do/DisplayTodo.js */ \"./src/To-do/DisplayTodo.js\");\n\n\n\n\nclass DisplayProject{\n    constructor(containerSelector,manager){\n       this.container = document.querySelector(containerSelector);\n       this.manager = manager;\n    }\n\n    clear(){\n        this.container.innerHTML = '';\n    }\n\n    render(projects){\n        this.clear();\n\n        projects.forEach(project => {\n            const card = document.createElement('div');\n            card.classList.add('project-card');\n            card.setAttribute('data-id',project.id);\n\n            const title = document.createElement('h3');\n            title.textContent = project.title;\n\n            const description = document.createElement('p');\n            description.textContent = project.description;\n\n            const openButton = document.createElement('button');\n            openButton.classList.add('open-button');\n            openButton.textContent = 'Open project';\n\n            openButton.addEventListener('click', (e) => {\n                const projectId = e.target.closest('.project-card').dataset.id;\n                localStorage.setItem('currentProjectId', projectId);\n\n                const project = this.manager.list().find(p => p.id == projectId);\n                const todoView = new _To_do_DisplayTodo_js__WEBPACK_IMPORTED_MODULE_2__.DisplayTodo('.main', project , '.todoSidebar',this.manager);\n                \n                todoView.renderForm();\n                todoView.display();\n              });\n\n            const deleteButton = document.createElement('button');\n            deleteButton.classList.add('delete-button');\n            deleteButton.textContent = 'Delete';\n\n            deleteButton.addEventListener('click', (e) => {\n                const projectId = e.target.closest('.project-card').dataset.id;\n                (0,_ProjectActions_js__WEBPACK_IMPORTED_MODULE_0__.removeProject)(projectId, this.manager, this);\n              });\n\n      card.appendChild(title);\n      card.appendChild(description);\n      card.appendChild(openButton);\n      card.appendChild(deleteButton);\n\n      this.container.appendChild(card);\n      \n        })\n    }\n}\n\n\n//# sourceURL=webpack://webpack-starter/./src/HomePage/displayProject.js?");

/***/ }),

/***/ "./src/HomePage/storage.js":
/*!*********************************!*\
  !*** ./src/HomePage/storage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getFromStorage: () => (/* binding */ getFromStorage),\n/* harmony export */   saveToStorage: () => (/* binding */ saveToStorage)\n/* harmony export */ });\n/* harmony import */ var _ProjectManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectManager */ \"./src/HomePage/ProjectManager.js\");\n/* harmony import */ var _To_do_to_do_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../To-do/to-do.js */ \"./src/To-do/to-do.js\");\n\n\n\nconst STORAGE_KEY = 'project';\n\nfunction saveToStorage(projectList){\n    console.log(\"Saving to localStorage:\", projectList);\n    localStorage.setItem(STORAGE_KEY,JSON.stringify(projectList));\n}\n\nfunction getFromStorage(manager) {\n    const savedProject = JSON.parse(localStorage.getItem(STORAGE_KEY));\n     console.log(\"Loaded projects from storage:\", savedProject);\n\n    // Handle if it's an object instead of an array\n    if (savedProject && Array.isArray(savedProject)) {\n        savedProject.forEach(projectData => {\n            const project = new _ProjectManager__WEBPACK_IMPORTED_MODULE_0__.Project(projectData.title, projectData.description, projectData.id);\n            project.todos = (projectData.todos || []).map(todoData => {\n                const todo = new _To_do_to_do_js__WEBPACK_IMPORTED_MODULE_1__.Todo(todoData.title, todoData.description, todoData.priority, todoData.dueDate);\n                todo.completed = todoData.completed;\n                return todo;\n            });\n            manager.add(project);\n        });\n    } else if (savedProject && typeof savedProject === 'object') {\n        // If it's an object, wrap it in an array\n        const projectArray = Object.values(savedProject);\n        projectArray.forEach(projectData => {\n            const project = new _ProjectManager__WEBPACK_IMPORTED_MODULE_0__.Project(projectData.title, projectData.description, projectData.id);\n            project.todos = (projectData.todos || []).map(todoData => {\n                const todo = new _To_do_to_do_js__WEBPACK_IMPORTED_MODULE_1__.Todo(todoData.title, todoData.description, todoData.priority, todoData.dueDate);\n                todo.completed = todoData.completed;\n                return todo;\n            });\n            manager.add(project);\n        });\n    } else {\n        console.log(\"No valid projects found in storage.\");\n    }\n}\n\n\n\n//# sourceURL=webpack://webpack-starter/./src/HomePage/storage.js?");

/***/ }),

/***/ "./src/To-do/DisplayTodo.js":
/*!**********************************!*\
  !*** ./src/To-do/DisplayTodo.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DisplayTodo: () => (/* binding */ DisplayTodo)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ \"./src/style.css\");\n/* harmony import */ var _ToDoAction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToDoAction.js */ \"./src/To-do/ToDoAction.js\");\n/* harmony import */ var _HomePage_displayProject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../HomePage/displayProject.js */ \"./src/HomePage/displayProject.js\");\n/* harmony import */ var _EditTodo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditTodo.js */ \"./src/To-do/EditTodo.js\");\n\n\n\n\n\nclass DisplayTodo {\n  constructor(todoContainer, project, formContainer, manager) {\n    this.todoContainer = document.querySelector(todoContainer);\n    this.formContainer = formContainer ? document.querySelector(formContainer) : null;\n    this.project = project;\n    this.manager = manager;\n  }\n\n  cleanMain() {\n    this.todoContainer.innerHTML = \"\";\n  }\n\n  cleanForm(){\n    document.querySelector(\".newtodoForm\").style.display = \"none\";\n    this.formContainer.innerHTML = \"\";\n  }\n\n  renderForm() {\n    this.cleanForm();\n\n    const form = document.createElement(\"form\");\n    form.classList.add(\"todo-form\");\n    form.innerHTML = `\n      <h3>Add Task to ${this.project.title}</h3>\n      <input type=\"text\" placeholder=\"Task Name\" class=\"todo-title\" required />\n      <input type=\"text\" placeholder=\"Description\" class=\"todo-desc\" required />\n      <select class=\"todo-priority\">\n        <option value=\"low\">Low</option>\n        <option value=\"medium\">Medium</option>\n        <option value=\"high\">High</option>\n      </select>\n      <input type=\"date\" class=\"todo-date\" required />\n      <button type=\"submit\" class=\"todo-submit\">Add Task</button>\n    `;\n\n    form.addEventListener(\"submit\", (e) => {\n      e.preventDefault();\n      const title = form.querySelector(\".todo-title\").value.trim();\n      const description = form.querySelector(\".todo-desc\").value.trim();\n      const priority = form.querySelector(\".todo-priority\").value;\n      const dueDate = form.querySelector(\".todo-date\").value;\n\n      if (!title || !description || !dueDate) return;\n\n      (0,_ToDoAction_js__WEBPACK_IMPORTED_MODULE_1__.addTodo)(this.manager, this.project, title, description, priority, dueDate);\n      this.display(); // Refresh task list\n      this.renderForm(); // Clear form fields\n    });\n\n    this.formContainer.appendChild(form);\n  }\n\n  display() {\n    this.cleanMain();\n\n    const backButton = document.createElement('button');\n    backButton.textContent = \"← Go Back\";\n    this.todoContainer.appendChild(backButton);\n\n    backButton.addEventListener('click',()=>{\n       localStorage.removeItem('currentProjectId'); \n      this.cleanMain();\n      this.cleanForm();\n      document.querySelector(\".newtodoForm\").style.display = \"flex\";\n        const displayProject = new _HomePage_displayProject_js__WEBPACK_IMPORTED_MODULE_2__.DisplayProject('.main',this.manager);\n        displayProject.render(this.manager.list());\n    })\n\n    // Render each todo\n    this.project.todos.forEach((todo) => {\n      const div = document.createElement(\"div\");\n      div.classList.add(\"todo-item\");\n\n      div.innerHTML = `\n        <span class=\"headlines\"><strong>${todo.title}</strong></span>\n        <span class=\"description\">${todo.description}</span>\n        <span class=\"specifics\">Due: ${todo.dueDate} </span>\n        <span class=\"priority\">Priority: ${todo.priority}</span>\n        <input class=\"checkbox\" type=\"checkbox\" ${todo.completed ? \"checked\" : \"\"} />\n        <button class=\"edit\">Edit</button>\n        <button class=\"delete\">Delete</button>\n      `;\n\n      div.querySelector(\".checkbox\").addEventListener(\"click\", () => {\n        (0,_ToDoAction_js__WEBPACK_IMPORTED_MODULE_1__.ToggleToDo)(this.manager,this.project, todo.id);\n      });\n      \n      div.querySelector(\".edit\").addEventListener(\"click\",()=>{\n          const editTodo = new _EditTodo_js__WEBPACK_IMPORTED_MODULE_3__.EditTodo(this.manager, this.project, todo.id, this.todoContainer,this);\n                editTodo.openEditForm(); // Open the edit form\n            });\n\n      div.querySelector(\".delete\").addEventListener(\"click\", () => {\n        (0,_ToDoAction_js__WEBPACK_IMPORTED_MODULE_1__.DeleteToDo)(this.manager,this.project, todo.id);\n        this.display(); // Re-render after deletion\n      });\n\n      this.todoContainer.appendChild(div); // Append each to-do card\n    });\n  }\n}\n\n\n//# sourceURL=webpack://webpack-starter/./src/To-do/DisplayTodo.js?");

/***/ }),

/***/ "./src/To-do/EditTodo.js":
/*!*******************************!*\
  !*** ./src/To-do/EditTodo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EditTodo: () => (/* binding */ EditTodo)\n/* harmony export */ });\n/* harmony import */ var _ToDoAction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDoAction.js */ \"./src/To-do/ToDoAction.js\");\n// src/ToDo/EditTodo.js\n\n // Import the EditTodo function from todoActions\n\nclass EditTodo {\n    constructor(manager, project, todoId, todoContainer, displayTodo) {\n        this.manager = manager;\n        this.project = project;\n        this.todoId = todoId;\n        this.todoContainer = todoContainer;\n        this.displayTodo = displayTodo;  // Pass the displayTodo instance to trigger the re-render\n    }\n\n    openEditForm() {\n        const todo = this.project.todos.find(t => t.id === this.todoId);\n\n        if (todo) {\n            const modal = document.createElement(\"div\");\n            modal.classList.add(\"edit-modal\");\n\n            modal.innerHTML = `\n                <div class=\"edit-modal-content\">\n                    <h3>Edit Todo</h3>\n                    <input type=\"text\" class=\"edit-title\" value=\"${todo.title}\" />\n                    <textarea class=\"edit-description\">${todo.description}</textarea>\n                    <select class=\"edit-priority\">\n                        <option value=\"low\" ${todo.priority === \"low\" ? \"selected\" : \"\"}>Low</option>\n                        <option value=\"medium\" ${todo.priority === \"medium\" ? \"selected\" : \"\"}>Medium</option>\n                        <option value=\"high\" ${todo.priority === \"high\" ? \"selected\" : \"\"}>High</option>\n                    </select>\n                    <input type=\"date\" class=\"edit-due-date\" value=\"${todo.dueDate}\" />\n                    <button class=\"save\">Save</button>\n                    <button class=\"cancel\">Cancel</button>\n                </div>\n            `;\n\n            // Save button click event\n            modal.querySelector(\".save\").addEventListener(\"click\", () => {\n                const updatedData = {\n                    title: modal.querySelector(\".edit-title\").value,\n                    description: modal.querySelector(\".edit-description\").value,\n                    priority: modal.querySelector(\".edit-priority\").value,\n                    dueDate: modal.querySelector(\".edit-due-date\").value,\n                };\n\n                // Call the EditTodo function to update the todo\n                (0,_ToDoAction_js__WEBPACK_IMPORTED_MODULE_0__.EditTodo)(this.manager, this.project, this.todoId, updatedData);\n\n                // Close the modal\n                this.closeModal(modal);\n\n                // Re-render the todo list to reflect the update\n                this.displayTodo.display();\n            });\n\n            // Cancel button click event\n            modal.querySelector(\".cancel\").addEventListener(\"click\", () => {\n                this.closeModal(modal); // Close modal without saving\n            });\n\n            this.todoContainer.appendChild(modal); // Append the modal to the container\n        }\n    }\n\n    // Close the edit modal\n    closeModal(modal) {\n        modal.remove();\n    }\n}\n\n\n//# sourceURL=webpack://webpack-starter/./src/To-do/EditTodo.js?");

/***/ }),

/***/ "./src/To-do/ToDoAction.js":
/*!*********************************!*\
  !*** ./src/To-do/ToDoAction.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DeleteToDo: () => (/* binding */ DeleteToDo),\n/* harmony export */   EditTodo: () => (/* binding */ EditTodo),\n/* harmony export */   ToggleToDo: () => (/* binding */ ToggleToDo),\n/* harmony export */   addTodo: () => (/* binding */ addTodo)\n/* harmony export */ });\n/* harmony import */ var _HomePage_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../HomePage/storage */ \"./src/HomePage/storage.js\");\n/* harmony import */ var _to_do__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./to-do */ \"./src/To-do/to-do.js\");\n\n\n\nfunction addTodo(manager,project,title, description, priority, dueDate){\n     const todo = new _to_do__WEBPACK_IMPORTED_MODULE_1__.Todo(title, description, priority, dueDate);\n     project.todos.push(todo);\n     (0,_HomePage_storage__WEBPACK_IMPORTED_MODULE_0__.saveToStorage)(manager.list());\n}\n\nfunction DeleteToDo(manager,project,todoId){\n    project.todos = project.todos.filter(t => t.id !== todoId);\n    (0,_HomePage_storage__WEBPACK_IMPORTED_MODULE_0__.saveToStorage)(manager.list());\n}\n\nfunction ToggleToDo(manager,project,todoId){\n    const todo = project.todos.find(t => t.id == todoId);\n    if(todo){\n        todo.completed = !todo.completed;\n    }\n    (0,_HomePage_storage__WEBPACK_IMPORTED_MODULE_0__.saveToStorage)(manager.list());\n}\n\nfunction EditTodo(manager, project, todoId, updatedData) {\n    const todo = project.todos.find(t => t.id === todoId);\n\n    if (todo) {\n        // Update the todo with new data\n        todo.title = updatedData.title;\n        todo.description = updatedData.description;\n        todo.priority = updatedData.priority;\n        todo.dueDate = updatedData.dueDate;\n\n        // Save to storage after editing\n        (0,_HomePage_storage__WEBPACK_IMPORTED_MODULE_0__.saveToStorage)(manager.list());\n    }\n}\n\n//# sourceURL=webpack://webpack-starter/./src/To-do/ToDoAction.js?");

/***/ }),

/***/ "./src/To-do/to-do.js":
/*!****************************!*\
  !*** ./src/To-do/to-do.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Todo: () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo{\n    constructor(title,description,priority,dueDate){\n        this.id = crypto.randomUUID();\n        this.title = title;\n        this.description = description;\n        this.priority = priority;\n        this.dueDate = dueDate;\n        this.completed = false;\n    }\n}\n\n//# sourceURL=webpack://webpack-starter/./src/To-do/to-do.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _HomePage_ProjectManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomePage/ProjectManager.js */ \"./src/HomePage/ProjectManager.js\");\n/* harmony import */ var _HomePage_ProjectActions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomePage/ProjectActions.js */ \"./src/HomePage/ProjectActions.js\");\n/* harmony import */ var _HomePage_displayProject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HomePage/displayProject.js */ \"./src/HomePage/displayProject.js\");\n/* harmony import */ var _HomePage_storage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HomePage/storage.js */ \"./src/HomePage/storage.js\");\n/* harmony import */ var _To_do_DisplayTodo_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./To-do/DisplayTodo.js */ \"./src/To-do/DisplayTodo.js\");\n\n\n\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const manager = new _HomePage_ProjectManager_js__WEBPACK_IMPORTED_MODULE_1__.ProjectManager();\n  const displayer = new _HomePage_displayProject_js__WEBPACK_IMPORTED_MODULE_3__.DisplayProject(\".main\", manager);\n  (0,_HomePage_storage_js__WEBPACK_IMPORTED_MODULE_4__.getFromStorage)(manager);\n  displayer.render(manager.list());\n\n  const currentProjectId = localStorage.getItem('currentProjectId');\n  if(currentProjectId){\n    const project = manager.list().find(p=> p.id == currentProjectId);\n    if(project){\n      const todoView = new _To_do_DisplayTodo_js__WEBPACK_IMPORTED_MODULE_5__.DisplayTodo('.main', project, '.todoSidebar', manager);\n      todoView.renderForm();\n      todoView.display();\n    }\n}\n\n  const form = document.querySelector(\".newtodoForm\");\n  form.addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n\n    const title = document.querySelector(\"#todoname\").value.trim();\n    const description = document\n      .querySelector(\"#projectdescription\")\n      .value.trim();\n\n    if (title === \"\" || description === \"\") return;\n\n    (0,_HomePage_ProjectActions_js__WEBPACK_IMPORTED_MODULE_2__.addProject)(manager, title, description);\n    displayer.render(manager.list());\n\n    form.reset();\n  });\n});\n\n\n//# sourceURL=webpack://webpack-starter/./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-starter/./src/style.css?");

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