/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/styles.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/styles.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --side-bar-width: max(200px, 15%); }\n\n#test-img-0001 {\n  animation: spin 3s infinite;\n  margin: 25% 50%; }\n\n@keyframes spin {\n  0% {\n    transform: rotateZ(0deg) scale(1); }\n  50% {\n    transform: rotateZ(180deg) scale(2); }\n  100% {\n    transform: rotateZ(360deg) scale(1); } }\n\nbody,\nhtml {\n  padding: 0;\n  margin: 0;\n  position: relative;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  min-width: 260px; }\n\n.form-module label {\n  font-weight: 600;\n  text-shadow: 1px 1px 2px rgba(162, 161, 161, 0.669); }\n\n#main-wrapper {\n  height: calc(100% - 50px);\n  position: relative;\n  display: flex; }\n\nbody::after {\n  display: flex; }\n\n#header {\n  background-color: #69b3e0;\n  width: 100%;\n  height: 50px;\n  font-size: 1.5rem; }\n\n#side-bar {\n  background-color: #b0d7e0;\n  height: 100%;\n  width: var(--side-bar-width);\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: clip;\n  text-align: center; }\n\n.test {\n  animation: name duration timing-function delay iteration-count direction fill-mode; }\n\n.slide-in1 {\n  animation: slide-in .65s forwards; }\n\n.slide-out1 {\n  animation: slide-out .85s forwards;\n  background-color: #71b3ec; }\n\n.slide-in2 {\n  animation: slide-in2 .65s forwards; }\n\n.slide-out2 {\n  animation: slide-out2 .85s forwards; }\n\n@keyframes slide-in2 {\n  0% {\n    width: 100%; }\n  50% {\n    width: 90%; }\n  100% {\n    width: 90%; } }\n\n@keyframes slide-out2 {\n  0% {\n    width: 90%; }\n  50% {\n    width: 90%; }\n  100% {\n    width: 100%; } }\n\n@keyframes slide-in {\n  0% {\n    width: var(--side-bar-width); }\n  100% {\n    width: 0%; } }\n\n@keyframes slide-out {\n  0% {\n    width: 0%; }\n  100% {\n    width: var(--side-bar-width); } }\n\n#content {\n  display: inline-block;\n  height: 100%;\n  max-width: 100%;\n  flex-grow: 2;\n  overflow: hidden; }\n\n.title {\n  text-align: center;\n  width: 25%;\n  margin: 0 37.5%;\n  padding: 5px; }\n\n.title input:read-only {\n  color: black;\n  text-shadow: 2px 1px 1px rgba(8, 8, 8, 0.324);\n  font-size: 1.2rem; }\n\n.title i {\n  font-size: .7rem; }\n\n.title input::placeholder {\n  color: blue;\n  text-decoration: underline; }\n\n.title input:read-only::placeholder {\n  color: green;\n  text-decoration: none; }\n\n.todo-area {\n  max-height: 80vh;\n  overflow-y: scroll; }\n\n.todo-list {\n  position: relative;\n  overflow: hidden; }\n\n.todo-ele-inner {\n  display: flex; }\n\n#content {\n  background-color: rgba(210, 210, 210, 0.283); }\n\n.todo-ele {\n  border: 1px solid black;\n  position: relative;\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.524);\n  width: 100%;\n  background-color: rgba(255, 255, 255, 0.434);\n  min-width: 120px;\n  border-radius: 5px; }\n\n@keyframes grow {\n  0% {\n    height: 2.5px; }\n  100% {\n    height: 45px; } }\n\n.checked-off .todo-ele {\n  height: 11px;\n  background-color: rgba(0, 0, 0, 0.083); }\n\n.todo-ele-wrapper.checked-off {\n  margin-top: 0%;\n  margin-bottom: 2px; }\n\n.checked-off .todo-ele-inner {\n  visibility: hidden; }\n\n@keyframes shrink {\n  0% {\n    height: 45px; }\n  100% {\n    height: 2.5px; } }\n\n.checked-off .banner {\n  background-color: rgba(15, 104, 187, 0.576);\n  height: 11px;\n  text-align: center;\n  font-stretch: wider;\n  font-weight: 600;\n  font-size: .7rem;\n  color: white; }\n\n.checked-off .banner:hover {\n  cursor: pointer; }\n\n.checked-off input {\n  text-decoration: line-through; }\n\n.todo-ele-wrapper {\n  position: relative;\n  width: 80%;\n  margin: 10px 10%; }\n\n.todo-ele:hover {\n  transform: scale(1.005);\n  box-shadow: 1px 1px 1px black; }\n\n.todo-ele .descr input {\n  text-align: left;\n  width: 90%;\n  font-size: .7rem; }\n\n.create-new-todo input {\n  outline: 0px;\n  border: 0px;\n  text-align: left;\n  font-size: .7rem;\n  font-weight: 600;\n  height: 20px;\n  margin: 0;\n  padding: 0;\n  padding-top: 2px;\n  display: inline-block;\n  max-width: 75%;\n  width: 30%; }\n\ninput {\n  background-color: rgba(255, 255, 255, 0); }\n\n.todo-area .todo-name input {\n  outline: 0px;\n  border: 0px;\n  text-align: left;\n  font-size: .7rem;\n  font-weight: 600;\n  height: 20px;\n  margin: 0;\n  padding: 0;\n  padding-top: 2px;\n  display: inline-block;\n  max-width: 75%;\n  width: 80%; }\n\n.tg-txt {\n  position: relative; }\n\n.tg-txt i {\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.slide-down {\n  transition: height .5s;\n  height: 50px;\n  overflow: hidden; }\n\n.check {\n  float: left;\n  color: blue; }\n\n.bi,\n.check {\n  cursor: pointer; }\n\n.tg-txt input:read-only {\n  cursor: default; }\n\n.todo-name i {\n  font-size: .6rem; }\n\n.todo-area .todo-name {\n  display: inline-block;\n  overflow: hidden;\n  flex-grow: 2; }\n\n.title h3 {\n  height: 20px;\n  margin: 0;\n  padding: 0; }\n\n.tg-txt:after {\n  display: inline-block;\n  color: red; }\n\n.title.todos {\n  width: 90%;\n  margin: auto 2.5%; }\n\n.title.todos input {\n  outline: 0px;\n  border: 0px;\n  text-align: center;\n  font-size: .85rem;\n  font-weight: 700;\n  margin: 0;\n  padding: 0;\n  width: 80%;\n  padding-top: 2px; }\n\n.todo-area .title input {\n  color: red;\n  outline: 0px;\n  border: 0px;\n  text-align: center;\n  font-size: .85rem;\n  font-weight: 700;\n  max-height: 30px;\n  margin: 0;\n  padding: 0;\n  width: 200px;\n  padding-top: 2px; }\n\n.banner {\n  height: 8px;\n  width: 100%;\n  background-color: #c6c6c6;\n  margin: 0;\n  padding: 0;\n  border-bottom-left-radius: 100px;\n  border-bottom-right-radius: 100px; }\n\n.controls {\n  flex-shrink: 1.5;\n  display: flex;\n  position: relative; }\n\n.controls .bi {\n  display: inline-block;\n  margin-right: 2%; }\n\n.stats,\n.controls,\n.controls > * {\n  display: inline-block; }\n\n.stats {\n  flex-grow: 2; }\n\n.stats > * {\n  margin-left: 5%; }\n\n.create-new-todo {\n  width: 66%;\n  border: 1px solid black;\n  margin: 5px 16.6666%; }\n\n.push-new {\n  display: inline-block;\n  background-color: #eaeaea;\n  font-size: .8rem;\n  border-radius: 10px;\n  margin-left: 10px;\n  cursor: pointer;\n  padding: 3px 8px 3px 8px; }\n\n.push-new:hover {\n  transform: scale(1.015);\n  color: rgba(26, 172, 234, 0.448); }\n\ni.open-form {\n  float: right;\n  font-size: 1.25rem;\n  margin-right: 10px; }\n\n.form-module {\n  position: absolute;\n  z-index: 60;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(229, 229, 229, 0.71);\n  top: 0%;\n  left: 0%; }\n\n.form-module .content {\n  width: 80%;\n  height: 80%;\n  margin: 10% 10%;\n  background-color: white;\n  box-shadow: 0px 0px 5px black;\n  z-index: 65;\n  position: absolute;\n  border-radius: 5px;\n  overflow: hidden; }\n\n.due-date {\n  background-color: rgba(4, 255, 29, 0.558);\n  border-radius: 15px;\n  box-shadow: 1px 1px 2px rgba(138, 138, 138, 0.717);\n  font-size: .55rem;\n  padding: 3px;\n  user-select: none;\n  display: inline-block;\n  text-decoration: none; }\n\n.due-date:hover {\n  background-color: #04ff1d;\n  transform: scale(1.05); }\n\n.tooltip {\n  position: relative;\n  display: inline-block; }\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 50px;\n  background-color: rgba(0, 0, 0, 0.705);\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 2px 0;\n  top: -20px;\n  left: 20px;\n  /* Position the tooltip */\n  position: absolute; }\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n  font-size: .6rem;\n  z-index: 200000;\n  opacity: .9;\n  transform: scale(1.1);\n  position: absolute; }\n\n.stats {\n  display: inline-flex;\n  align-items: center; }\n\n.tooltip:hover {\n  text-shadow: 0px 0px 2px #6f6f6f; }\n\nform {\n  display: grid;\n  grid-template-columns: auto auto;\n  grid-template-rows: auto auto 2fr; }\n\nform div {\n  margin: 2%;\n  text-align: center; }\n\n.btn-div {\n  width: 200%;\n  align-items: center; }\n\n.btn-div button {\n  border: 0px;\n  box-shadow: 0px 0px 2px #848282;\n  padding: 1%; }\n\n.btn-div button:hover {\n  box-shadow: 0px 0px 4px #848282;\n  transform: scale(1.1);\n  cursor: pointer; }\n\n.form-module div input,\n.form-module div textarea {\n  border: 0px;\n  border-bottom: 2px solid black;\n  background-color: rgba(231, 231, 231, 0.427); }\n\n.form-module div input::selection,\n.form-module div textarea::selection,\n.form-module div input:focus,\n.form-module div textarea:focus {\n  border: 0px;\n  border-bottom: 2px solid #5e95cf;\n  background-color: rgba(231, 231, 231, 0.538);\n  outline: 0px; }\n\n#description {\n  width: 50%;\n  height: 100%; }\n\n.info-box {\n  overflow: hidden;\n  width: 100%;\n  height: 0;\n  background-color: rgba(236, 236, 236, 0.648);\n  border: 1px solid black;\n  border-top: 0px;\n  border-left: 0px;\n  border-right: 0px;\n  z-index: 70; }\n\n.info-box.new {\n  animation: slide-dwn 1s forwards; }\n\n.info-box.old {\n  animation: slide-up 1s forwards; }\n\n.info-box.new.fast {\n  animation: slide-dwn .25s forwards; }\n\n.info-box.old.fast {\n  animation: slide-up .25s forwards; }\n\n.info-box h3 {\n  font-size: .7rem;\n  margin: 0;\n  padding: 0; }\n\n.descr-txt {\n  font-size: .85rem; }\n\n@keyframes slide-up {\n  0% {\n    height: 36px; }\n  100% {\n    height: 0px; } }\n\n@keyframes slide-dwn {\n  0% {\n    height: 0px; }\n  100% {\n    height: 36px; } }\n\n.note {\n  background-color: #f1f1f1;\n  border-radius: 3px;\n  box-shadow: 1px 1px 3px;\n  text-align: center;\n  position: relative;\n  margin: 5px;\n  min-height: 30px;\n  display: inline-block;\n  padding: 8px;\n  height: fit-content;\n  word-wrap: break-word; }\n\n.del-comment {\n  float: right; }\n\n.del-comment:hover {\n  color: rgba(22, 22, 22, 0.51);\n  transform: scale(1.075); }\n\n.comment-input {\n  position: absolute;\n  bottom: 0;\n  width: 100%; }\n\n.comment-input input {\n  width: 60%; }\n\n.comment-section {\n  overflow-y: scroll;\n  height: 60%;\n  display: grid;\n  grid-template-columns: 25% 25% 25% 25%;\n  border: 1px solid black; }\n\n.note:hover .comment-time {\n  visibility: visible;\n  text-shadow: 1px 1px 1px gray; }\n\n.note:hover {\n  color: gray; }\n\n.note:hover i {\n  color: #4d4d4d; }\n\n.note:hover i:hover {\n  color: black; }\n\n.comment-time {\n  visibility: hidden;\n  position: absolute;\n  right: 0;\n  font-size: .55rem;\n  bottom: -10px;\n  color: rgba(28, 100, 255, 0.876); }\n\n.make-new-todos input {\n  background-color: rgba(255, 255, 255, 0.021);\n  outline: 0px;\n  border: 0px;\n  border-bottom: 1px solid black; }\n\n.make-new-todos {\n  position: relative; }\n\n.side-bar-titles {\n  position: relative; }\n\n.bar-title {\n  color: White;\n  margin: 5% 15%;\n  width: 70%;\n  cursor: default; }\n\n.bar-title > * {\n  display: inline-block;\n  margin-left: 5%; }\n\n.bar-title.sel {\n  transform: scale(1.3);\n  text-decoration: underline 2px rgba(0, 157, 255, 0.903);\n  box-shadow: 0px 0px 2px white; }\n\n.bar-title.unsel:hover {\n  transform: scale(1.1);\n  color: rgba(0, 157, 255, 0.903);\n  cursor: pointer; }\n\n.bar-title:hover i:hover {\n  color: black;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.655); }\n\n.make-new-todos input {\n  max-width: 60%;\n  margin-bottom: 10%; }\n\n.slide-in1 .make-new-todos,\n.slide-in1 .side-bar-titles {\n  visibility: hidden; }\n\n.make-new-todos i {\n  position: absolute;\n  right: 1px;\n  top: 30%;\n  color: white; }\n\n@media screen and (max-width: 800px) {\n  :root {\n    --side-bar-width: max(150px, 10%); }\n  .todo-ele-wrapper {\n    width: 95%;\n    margin: 5px 2.5%; }\n  .todo-name {\n    max-width: 35%; }\n  .create-new-todo {\n    width: 80%;\n    border: 1px solid black;\n    margin: 5px 10%; } }\n\n@media screen and (max-width: 320px) {\n  .todo-ele-wrapper {\n    width: 100%;\n    margin: 5px 0%; }\n  .todo-area .todo-name {\n    max-width: 25%; }\n  .create-new-todo {\n    width: 95%;\n    margin: auto 2.5%; } }\n", "",{"version":3,"sources":["webpack://./src/css/styles.scss"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n    --side-bar-width: max(200px, 15%);\r\n}\r\n\r\n@import url(\"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css\");\r\n#test-img-0001 {\r\n    animation: spin 3s infinite;\r\n    margin: 25% 50%;\r\n    @keyframes spin {\r\n        0% {\r\n            transform: rotateZ(0deg) scale(1);\r\n        }\r\n        50% {\r\n            transform: rotateZ(180deg) scale(2)\r\n        }\r\n        100% {\r\n            transform: rotateZ(360deg) scale(1)\r\n        }\r\n    }\r\n}\r\n\r\nbody,\r\nhtml {\r\n    padding: 0;\r\n    margin: 0;\r\n    position: relative;\r\n    height: 100%;\r\n    width: 100%;\r\n    $w: 10%;\r\n    overflow: hidden;\r\n    min-width: 260px;\r\n}\r\n\r\n.form-module label {\r\n    font-weight: 600;\r\n    text-shadow: 1px 1px 2px rgba(162, 161, 161, 0.669);\r\n}\r\n\r\n#main-wrapper {\r\n    height: calc(100% - 50px);\r\n    position: relative;\r\n    display: flex;\r\n}\r\n\r\nbody::after {\r\n    // grid-template-columns: 10% auto;\r\n    display: flex;\r\n}\r\n\r\n#header {\r\n    background-color: rgb(105, 179, 224);\r\n    width: 100%;\r\n    height: 50px;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n#side-bar {\r\n    background-color: rgb(176, 215, 224);\r\n    height: 100%;\r\n    width: var(--side-bar-width);\r\n    display: inline-block;\r\n    overflow: hidden;\r\n    text-overflow: clip;\r\n    text-align: center;\r\n}\r\n\r\n.test {\r\n    animation: name duration timing-function delay iteration-count direction fill-mode;\r\n}\r\n\r\n.slide-in1 {\r\n    animation: slide-in .65s forwards;\r\n}\r\n\r\n.slide-out1 {\r\n    animation: slide-out .85s forwards;\r\n    background-color: rgb(113, 179, 236);\r\n}\r\n\r\n.slide-in2 {\r\n    animation: slide-in2 .65s forwards;\r\n}\r\n\r\n.slide-out2 {\r\n    animation: slide-out2 .85s forwards;\r\n}\r\n\r\n@keyframes slide-in2 {\r\n    0% {\r\n        width: 100%;\r\n    }\r\n    50% {\r\n        width: 90%\r\n    }\r\n    100% {\r\n        width: 90%\r\n    }\r\n}\r\n\r\n@keyframes slide-out2 {\r\n    0% {\r\n        width: 90%\r\n    }\r\n    50% {\r\n        width: 90%\r\n    }\r\n    100% {\r\n        width: 100%\r\n    }\r\n}\r\n\r\n@keyframes slide-in {\r\n    0% {\r\n        width: var(--side-bar-width);\r\n    }\r\n    100% {\r\n        width: 0%\r\n    }\r\n}\r\n\r\n@keyframes slide-out {\r\n    0% {\r\n        width: 0%\r\n    }\r\n    100% {\r\n        width: var(--side-bar-width);\r\n    }\r\n}\r\n\r\n#content {\r\n    display: inline-block;\r\n    height: 100%;\r\n    max-width: 100%;\r\n    flex-grow: 2;\r\n    overflow: hidden;\r\n}\r\n\r\n.title {\r\n    text-align: center;\r\n    width: 25%;\r\n    margin: 0 37.5%;\r\n    padding: 5px\r\n}\r\n\r\n.title input:read-only {\r\n    color: black;\r\n    text-shadow: 2px 1px 1px rgba(8, 8, 8, 0.324);\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.title i {\r\n    font-size: .7rem;\r\n}\r\n\r\n.title input::placeholder {\r\n    color: blue;\r\n    text-decoration: underline;\r\n}\r\n\r\n.title input:read-only::placeholder {\r\n    color: green;\r\n    text-decoration: none;\r\n}\r\n\r\n.todo-area {\r\n    max-height: 80vh;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.todo-list {\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n.todo-ele-inner {\r\n    display: flex;\r\n}\r\n\r\n#content {\r\n    background-color: rgba(210, 210, 210, 0.283);\r\n}\r\n\r\n.todo-ele {\r\n    border: 1px solid black;\r\n    position: relative;\r\n    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.524);\r\n    width: 100%;\r\n    background-color: rgba(255, 255, 255, 0.434);\r\n    min-width: 120px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.not-checked {\r\n    // animation: grow 1s forwards;\r\n}\r\n\r\n@keyframes grow {\r\n    0% {\r\n        height: 2.5px;\r\n    }\r\n    100% {\r\n        height: 45px;\r\n    }\r\n}\r\n\r\n.checked-off .todo-ele {\r\n    // background-color: rgba(167, 169, 168, 0.192);\r\n    // animation: shrink 1s forwards;\r\n    // margin: 0;\r\n}\r\n\r\n.checked-off .todo-ele {\r\n    height: 11px;\r\n    background-color: rgba(0, 0, 0, 0.083);\r\n}\r\n\r\n.todo-ele-wrapper.checked-off {\r\n    margin-top: 0%;\r\n    margin-bottom: 2px;\r\n}\r\n\r\n.checked-off .todo-ele-inner {\r\n    visibility: hidden;\r\n}\r\n\r\n@keyframes shrink {\r\n    0% {\r\n        height: 45px;\r\n    }\r\n    100% {\r\n        height: 2.5px;\r\n    }\r\n}\r\n\r\n.checked-off .banner {\r\n    background-color: rgba(15, 104, 187, 0.576);\r\n    height: 11px;\r\n    text-align: center;\r\n    font-stretch: wider;\r\n    font-weight: 600;\r\n    font-size: .7rem;\r\n    color: white\r\n}\r\n\r\n.checked-off .banner:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.checked-off input {\r\n    text-decoration: line-through;\r\n}\r\n\r\n.checked-off .todo-ele-inner {}\r\n\r\n.todo-ele-wrapper {\r\n    position: relative;\r\n    width: 80%;\r\n    margin: 10px 10%;\r\n}\r\n\r\n.todo-ele:hover {\r\n    transform: scale(1.005);\r\n    box-shadow: 1px 1px 1px black;\r\n}\r\n\r\n.todo-ele .descr input {\r\n    text-align: left;\r\n    width: 90%;\r\n    font-size: .7rem;\r\n}\r\n\r\n.create-new-todo input {\r\n    outline: 0px;\r\n    border: 0px;\r\n    text-align: left;\r\n    font-size: .7rem;\r\n    font-weight: 600;\r\n    height: 20px;\r\n    margin: 0;\r\n    padding: 0;\r\n    padding-top: 2px;\r\n    display: inline-block;\r\n    max-width: 75%;\r\n    width: 30%;\r\n}\r\n\r\ninput {\r\n    background-color: rgba(255, 255, 255, 0);\r\n}\r\n\r\n.todo-area .todo-name input {\r\n    outline: 0px;\r\n    border: 0px;\r\n    text-align: left;\r\n    font-size: .7rem;\r\n    font-weight: 600;\r\n    height: 20px;\r\n    margin: 0;\r\n    padding: 0;\r\n    padding-top: 2px;\r\n    display: inline-block;\r\n    max-width: 75%;\r\n    width: 80%;\r\n}\r\n\r\n.tg-txt {\r\n    position: relative;\r\n}\r\n\r\n.tg-txt i {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n}\r\n\r\n.slide-down {\r\n    transition: height .5s;\r\n    height: 50px;\r\n    overflow: hidden;\r\n}\r\n\r\n.check {\r\n    float: left;\r\n    color: blue;\r\n}\r\n\r\n.bi,\r\n.check {\r\n    cursor: pointer;\r\n}\r\n\r\n.tg-txt input:read-only {\r\n    cursor: default;\r\n}\r\n\r\n.todo-name i {\r\n    font-size: .6rem;\r\n}\r\n\r\n.todo-area .todo-name {\r\n    display: inline-block;\r\n    overflow: hidden;\r\n    flex-grow: 2;\r\n}\r\n\r\n.title h3 {\r\n    height: 20px;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.tg-txt:after {\r\n    display: inline-block;\r\n    color: red;\r\n}\r\n\r\n.title.todos {\r\n    width: 90%;\r\n    margin: auto 2.5%;\r\n}\r\n\r\n.title.todos input {\r\n    outline: 0px;\r\n    border: 0px;\r\n    text-align: center;\r\n    font-size: .85rem;\r\n    font-weight: 700;\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 80%;\r\n    padding-top: 2px;\r\n}\r\n\r\n.todo-area .title input {\r\n    color: red;\r\n    outline: 0px;\r\n    border: 0px;\r\n    text-align: center;\r\n    font-size: .85rem;\r\n    font-weight: 700;\r\n    max-height: 30px;\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 200px;\r\n    padding-top: 2px;\r\n}\r\n\r\n.banner {\r\n    height: 8px;\r\n    width: 100%;\r\n    background-color: rgb(198, 198, 198);\r\n    margin: 0;\r\n    padding: 0;\r\n    border-bottom-left-radius: 100px;\r\n    border-bottom-right-radius: 100px;\r\n}\r\n\r\n.controls {\r\n    flex-shrink: 1.5;\r\n    display: flex;\r\n    position: relative;\r\n}\r\n\r\n.controls .bi {\r\n    display: inline-block;\r\n    margin-right: 2%;\r\n}\r\n\r\n.stats,\r\n.controls,\r\n.controls>* {\r\n    display: inline-block;\r\n}\r\n\r\n.stats {\r\n    flex-grow: 2;\r\n}\r\n\r\n.stats>* {\r\n    margin-left: 5%;\r\n}\r\n\r\n.create-new-todo {\r\n    width: 66%;\r\n    border: 1px solid black;\r\n    margin: 5px 16.6666%;\r\n}\r\n\r\n.push-new {\r\n    display: inline-block;\r\n    background-color: rgb(234, 234, 234);\r\n    font-size: .8rem;\r\n    border-radius: 10px;\r\n    margin-left: 10px;\r\n    cursor: pointer;\r\n    padding: 3px 8px 3px 8px;\r\n}\r\n\r\n.push-new:hover {\r\n    transform: scale(1.015);\r\n    color: rgba(26, 172, 234, 0.448);\r\n}\r\n\r\ni.open-form {\r\n    float: right;\r\n    font-size: 1.25rem;\r\n    margin-right: 10px;\r\n}\r\n\r\n.form-module {\r\n    position: absolute;\r\n    z-index: 60;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(229, 229, 229, 0.71);\r\n    top: 0%;\r\n    left: 0%;\r\n}\r\n\r\n.form-module .content {\r\n    width: 80%;\r\n    height: 80%;\r\n    margin: 10% 10%;\r\n    background-color: rgb(255, 255, 255);\r\n    box-shadow: 0px 0px 5px black;\r\n    z-index: 65;\r\n    position: absolute;\r\n    border-radius: 5px;\r\n    overflow: hidden;\r\n}\r\n\r\n.due-date {\r\n    background-color: rgba(4, 255, 29, 0.558);\r\n    border-radius: 15px;\r\n    box-shadow: 1px 1px 2px rgba(138, 138, 138, 0.717);\r\n    font-size: .55rem;\r\n    padding: 3px;\r\n    user-select: none;\r\n    display: inline-block;\r\n    text-decoration: none;\r\n}\r\n\r\n.due-date:hover {\r\n    background-color: rgb(4, 255, 29);\r\n    transform: scale(1.05);\r\n}\r\n\r\n.tooltip {\r\n    position: relative;\r\n    display: inline-block;\r\n}\r\n\r\n.tooltip .tooltiptext {\r\n    visibility: hidden;\r\n    width: 50px;\r\n    background-color: rgba(0, 0, 0, 0.705);\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 6px;\r\n    padding: 2px 0;\r\n    top: -20px;\r\n    left: 20px;\r\n    /* Position the tooltip */\r\n    position: absolute;\r\n}\r\n\r\n.tooltip:hover .tooltiptext {\r\n    visibility: visible;\r\n    font-size: .6rem;\r\n    z-index: 200000;\r\n    opacity: .9;\r\n    transform: scale(1.1);\r\n    position: absolute;\r\n}\r\n\r\n.stats {\r\n    display: inline-flex;\r\n    align-items: center;\r\n}\r\n\r\n.tooltip:hover {\r\n    text-shadow: 0px 0px 2px rgb(111, 111, 111);\r\n}\r\n\r\n.descr-btn {}\r\n\r\nform {\r\n    display: grid;\r\n    grid-template-columns: auto auto;\r\n    grid-template-rows: auto auto 2fr;\r\n}\r\n\r\nform div {\r\n    margin: 2%;\r\n    text-align: center;\r\n}\r\n\r\n.btn-div {\r\n    width: 200%;\r\n    align-items: center;\r\n}\r\n\r\n.btn-div button {\r\n    border: 0px;\r\n    box-shadow: 0px 0px 2px rgb(132, 130, 130);\r\n    padding: 1%;\r\n}\r\n\r\n.btn-div button:hover {\r\n    box-shadow: 0px 0px 4px rgb(132, 130, 130);\r\n    transform: scale(1.1);\r\n    cursor: pointer;\r\n}\r\n\r\n.form-module div input,\r\n.form-module div textarea {\r\n    border: 0px;\r\n    border-bottom: 2px solid black;\r\n    background-color: rgba(231, 231, 231, 0.427);\r\n}\r\n\r\n.form-module div input::selection,\r\n.form-module div textarea::selection,\r\n.form-module div input:focus,\r\n.form-module div textarea:focus {\r\n    border: 0px;\r\n    border-bottom: 2px solid rgb(94, 149, 207);\r\n    background-color: rgba(231, 231, 231, 0.538);\r\n    outline: 0px;\r\n}\r\n\r\n#description {\r\n    width: 50%;\r\n    height: 100%;\r\n}\r\n\r\n.info-box {\r\n    overflow: hidden;\r\n    width: 100%;\r\n    height: 0;\r\n    background-color: rgba(236, 236, 236, 0.648);\r\n    border: 1px solid black;\r\n    border-top: 0px;\r\n    border-left: 0px;\r\n    border-right: 0px;\r\n    z-index: 70;\r\n}\r\n\r\n.info-box.new {\r\n    animation: slide-dwn 1s forwards;\r\n}\r\n\r\n.info-box.old {\r\n    animation: slide-up 1s forwards;\r\n}\r\n\r\n.info-box.new.fast {\r\n    animation: slide-dwn .25s forwards;\r\n}\r\n\r\n.info-box.old.fast {\r\n    animation: slide-up .25s forwards;\r\n}\r\n\r\n.info-box h3 {\r\n    font-size: .7rem;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.descr-txt {\r\n    font-size: .85rem;\r\n}\r\n\r\n@keyframes slide-up {\r\n    0% {\r\n        height: 36px;\r\n    }\r\n    100% {\r\n        height: 0px;\r\n    }\r\n}\r\n\r\n@keyframes slide-dwn {\r\n    0% {\r\n        height: 0px;\r\n    }\r\n    100% {\r\n        height: 36px;\r\n    }\r\n}\r\n\r\n.note {\r\n    //max-width:50%;\r\n    background-color: rgb(241, 241, 241);\r\n    border-radius: 3px;\r\n    box-shadow: 1px 1px 3px;\r\n    text-align: center;\r\n    position: relative;\r\n    margin: 5px;\r\n    //@extend:25%;\r\n    min-height: 30px;\r\n    display: inline-block;\r\n    padding: 8px;\r\n    height: fit-content;\r\n    word-wrap: break-word;\r\n}\r\n\r\n.del-comment {\r\n    float: right;\r\n}\r\n\r\n.del-comment:hover {\r\n    color: rgba(22, 22, 22, 0.51);\r\n    transform: scale(1.075);\r\n}\r\n\r\n.comment-input {\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n}\r\n\r\n.comment-input input {\r\n    width: 60%\r\n}\r\n\r\n.comment-section {\r\n    overflow-y: scroll;\r\n    height: 60%;\r\n    display: grid;\r\n    grid-template-columns: 25% 25% 25% 25%;\r\n    border: 1px solid black;\r\n}\r\n\r\n.note:hover .comment-time {\r\n    visibility: visible;\r\n    text-shadow: 1px 1px 1px gray;\r\n}\r\n\r\n.note:hover {\r\n    color: gray\r\n}\r\n\r\n.note:hover i {\r\n    color: rgb(77, 77, 77);\r\n}\r\n\r\n.note:hover i:hover {\r\n    color: rgb(0, 0, 0);\r\n}\r\n\r\n.comment-time {\r\n    visibility: hidden;\r\n    position: absolute;\r\n    right: 0;\r\n    font-size: .55rem;\r\n    bottom: -10px;\r\n    color: rgba(28, 100, 255, 0.876);\r\n}\r\n\r\n.make-new-todos input {\r\n    background-color: rgba(255, 255, 255, 0.021);\r\n    outline: 0px;\r\n    border: 0px;\r\n    border-bottom: 1px solid black;\r\n}\r\n\r\n.make-new-todos {\r\n    position: relative;\r\n}\r\n\r\n.side-bar-titles {\r\n    position: relative;\r\n}\r\n\r\n.bar-title {\r\n    color: White;\r\n    margin: 5% 15%;\r\n    width: 70%;\r\n    cursor: default;\r\n}\r\n\r\n.bar-title>* {\r\n    display: inline-block;\r\n    margin-left: 5%;\r\n}\r\n\r\n.bar-title.sel {\r\n    transform: scale(1.3);\r\n    text-decoration: underline 2px rgba(0, 157, 255, 0.903);\r\n    box-shadow: 0px 0px 2px white;\r\n}\r\n\r\n.bar-title.unsel:hover {\r\n    transform: scale(1.1);\r\n    color: rgba(0, 157, 255, 0.903);\r\n    cursor: pointer;\r\n}\r\n\r\n.bar-title:hover i:hover {\r\n    color: black;\r\n    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.655);\r\n}\r\n\r\n.make-new-todos input {\r\n    max-width: 60%;\r\n    margin-bottom: 10%;\r\n}\r\n\r\n.slide-in1 .make-new-todos,\r\n.slide-in1 .side-bar-titles {\r\n    visibility: hidden;\r\n}\r\n\r\n.make-new-todos i {\r\n    position: absolute;\r\n    right: 1px;\r\n    top: 30%;\r\n    color: white;\r\n}\r\n\r\n@media screen and (max-width:800px) {\r\n     :root {\r\n        --side-bar-width: max(150px, 10%);\r\n    }\r\n    .todo-ele-wrapper {\r\n        width: 95%;\r\n        margin: 5px 2.5%;\r\n    }\r\n    .todo-name {\r\n        max-width: 35%;\r\n    }\r\n    .create-new-todo {\r\n        width: 80%;\r\n        border: 1px solid black;\r\n        margin: 5px 10%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width:320px) {\r\n    .todo-ele-wrapper {\r\n        width: 100%;\r\n        margin: 5px 0%;\r\n    }\r\n    .todo-area .todo-name {\r\n        max-width: 25%;\r\n    }\r\n    .create-new-todo {\r\n        width: 95%;\r\n        margin: auto 2.5%;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/styles.scss":
/*!*****************************!*\
  !*** ./src/css/styles.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/getTarget.js */ "./node_modules/style-loader/dist/runtime/getTarget.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/styles.scss");

      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = function(css, style){
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
      while (style.firstChild) {
        style.removeChild(style.firstChild);
      }

      style.appendChild(document.createTextNode(css));
    }
  };
options.setAttributes = function(style) {
        var nonce =
           true ? __webpack_require__.nc : 0;

        if (nonce) {
          style.setAttribute("nonce", nonce);
        }
      };
options.insert = function(style){
    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()("head");

    if (!target) {
      throw new Error(
        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
      );
    }

    target.appendChild(style);
  };
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_4__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}

module.exports = getTarget;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/styles.scss */ "./src/css/styles.scss");
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};

// import img1 from "./assets/images/test.png"
// let image:HTMLImageElement = new Image();
// image.src = img1;
// image.id = "test-img-0001"
// document.body.appendChild(image);
var header = makeHtmlElement("div", document.body, { id: "header" });
var wrapper = makeHtmlElement("div", document.body, { id: "main-wrapper" });
var sidebar = makeHtmlElement("div", wrapper, { id: "side-bar" });
var content = makeHtmlElement("div", wrapper, { id: "content" });
var sidebarToggle = makeHtmlElement("i", header, { classes: "bi bi-list" });
sidebarToggle.onclick = function (e) {
    if (sidebar.classList.contains("slide-in1")) {
        sidebar.classList.remove("slide-in1");
        sidebar.classList.add("slide-out1");
        // content.classList.remove("slide-out2")
        // content.classList.add("slide-in2")
        //content.style.width = "90%";
    }
    else {
        sidebar.classList.remove("slide-out1");
        sidebar.classList.add("slide-in1");
        // content.classList.remove("slide-in2")
        // content.classList.add("slide-out2")
        // content.style.width = "100%";
    }
};
function makeHtmlElement(eleType, eleSource, option) {
    if (eleSource === void 0) { eleSource = null; }
    if (option === void 0) { option = {}; }
    var newEle = document.createElement(eleType);
    if (option.id) {
        newEle.id = option.id;
    }
    if (option.classes) {
        option.classes.split(" ").forEach(function (child) {
            if (child) {
                newEle.classList.add(child);
            }
        });
    }
    ;
    if (option.text) {
        newEle.innerText = option.text;
    }
    if (option.click) {
        newEle.onclick = function () { return option.click(); };
    }
    if (option.hover) {
        newEle.onmouseover = function () { return option.hover(); };
    }
    if (option.listeners) {
        option.listeners.forEach(function (el) { if (el) {
            newEle.addEventListener(el.type, function () { return el.func(); });
        } });
    }
    if (option.children) {
        option.children.forEach(function (child) { return makeHtmlElement(child[0], newEle, child[1]); });
    }
    if (option.name) {
        newEle.name = option.name;
    }
    if (option.type) {
        newEle.type = option.type;
    }
    if (option.placeholder) {
        newEle.placeholder = option.placeholder;
    }
    if (option.readOnly)
        (newEle.readOnly = option.readOnly);
    if (option.value)
        (newEle.value = option.value);
    //if (option.disabled)(newEle.disabled = option.disabled)
    if (eleSource) {
        eleSource.appendChild(newEle);
    }
    return newEle;
}
function getTodos(id) {
    return allTodos.filter(function (todos) { return todos.getId() === id; })[0];
}
function changeText(id, target) {
    var todos = getTodos(id);
    todos.setName(target.value);
    target.readOnly = false;
    target.removeEventListener('click', function () { return changeText(id, target); });
}
function newTodoNameText(id) {
    var newInput = document.querySelector("#section-" + id + " .make-new .create-new-todo input");
    if (!newInput.value) {
        return newInput.placeholder;
    }
    return newInput.value;
}
function resetNewTodoNameText(id) {
    var newInput = document.querySelector("#section-" + id + " .make-new .create-new-todo input");
    newInput.value = "";
}
function addNewToDo(todos) {
    var todoName = newTodoNameText(todos.getId());
    resetNewTodoNameText(todos.getId());
    var newTodo = new todo(todoName);
    todos.add(newTodo);
    createTodo(newTodo, todos);
    localStorage.setItem("allTodos", JSON.stringify(allTodos));
}
function drawMakeNew(todos) {
    var section = document.querySelector("#section-" + todos.getId() + " .make-new");
    var createBox = makeHtmlElement("div", section, { classes: "create-new-todo container " });
    //let fastCreate = makeToggableTextBox("new todo","fastCreate-"+todos.getId(),createBox,"todo-name");
    var fastCreate = makeHtmlElement("input", createBox, { placeholder: "new todo", value: "new todo title", classes: "title" });
    var push = makeHtmlElement("i", createBox, { classes: "push-new ", text: "quick create" });
    push.addEventListener("click", function (e) {
        addNewToDo(todos);
        e.stopPropagation();
        e.stopImmediatePropagation();
    }, true);
    fastCreate.addEventListener("keypress", function (e) {
        if (e.key !== "Enter") {
            return;
        }
        addNewToDo(todos);
        e.stopPropagation();
        e.stopImmediatePropagation();
    }, true);
    var createFormBtn = makeHtmlElement("i", createBox, { classes: "open-form bi bi-plus-square-fill" });
    createFormBtn.onclick = function (e) { return createForm(todos); };
}
function createEditForm(todos, todo) {
    createForm(todos);
    setCreateEditFormDefaults(todo);
    var formBase = document.querySelector(".form-module");
    var form = document.querySelector(".form-module form");
    document.querySelector("form button").textContent = "Update";
    form.onsubmit = function (e) {
        e.preventDefault();
        var formData = getFormData();
        if (formData.date) {
            todo.setOptions("dueDate", formData.date);
        }
        if (formData.priority) {
            todo.setOptions("priority", formData.priority);
        }
        if (formData.title) {
            todo.setTitle(formData.title);
            todo.setDescription(formData.descr);
            redrawTodo(todos, todo);
            document.body.removeChild(formBase);
        }
        ;
    };
    drawCommentSection(todo);
    drawCommentInput(todo);
}
function setCreateEditFormDefaults(todo) {
    document.querySelector("#inputTitle").value = todo.getTitle();
    document.querySelector("#priority").value = todo.getOptions("priority") ? todo.getOptions("priority") : "#c6c6c6";
    document.querySelector("#description").value = todo.getDescription();
}
function redrawTodo(todos, todo) {
    var htmlTodoWrapper = createTodo(todo, todos, false);
    var oldTodoWrapper = document.querySelector("#todo-" + todo.getId());
    oldTodoWrapper.replaceWith(htmlTodoWrapper);
}
function drawCommentSection(todo) {
    var formContent = document.querySelector(".form-module .content");
    makeHtmlElement("hr", document.querySelector(".form-module"));
    var commentSection = makeHtmlElement("div", formContent, { classes: "comment-section" });
    drawComments(commentSection, todo);
}
function deleteHTMLComment(id) {
    var commentSection = document.querySelector(".comment-section");
    commentSection.childNodes.forEach(function (comment) {
        if (id === comment.id) {
            commentSection.removeChild(comment);
        }
    });
}
function drawCommentInput(todo) {
    var formContent = document.querySelector(".form-module .content");
    var inputSection = makeHtmlElement("div", formContent, { classes: "comment-input", children: [["hr", {}]] });
    var commentSection = document.querySelector(" .form-module .content .comment-section");
    var label = makeHtmlElement("label", inputSection, { text: "Message: " });
    var textBox = makeHtmlElement("input", inputSection, { id: "message-input" }); // add a keypress on enter ? maybe ?
    var textPush = makeHtmlElement("i", inputSection, { classes: "bi bi-arrow-right-square-fill" });
    textBox.onkeypress = function (e) {
        if (e.key === "Enter") {
            if (textBox.value) {
                var note = todo.addNote(textBox.value);
                localStorage.setItem("allTodos", JSON.stringify(allTodos));
                drawComment(commentSection, note, todo);
                textBox.value = "";
            }
        }
    };
    textPush.onclick = function () {
        if (textBox.value) {
            var note = todo.addNote(textBox.value);
            localStorage.setItem("allTodos", JSON.stringify(allTodos));
            drawComment(commentSection, note, todo);
            textBox.value = "";
        }
    };
}
function getTimeFromTimeBasedId(id) {
    var date = new Date(+id);
    return date.toLocaleString('default', { month: 'short', day: '2-digit' }) + " " + (date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
}
function drawComment(section, note, todo) {
    makeHtmlElement("div", section, {
        classes: "note",
        id: note.id,
        text: note.message,
        children: [["i",
                {
                    classes: "bi bi-backspace-reverse-fill del-comment",
                    click: function (e) {
                        todo.deleteNote(note.id);
                        deleteHTMLComment(note.id);
                    }
                }
            ], ["div",
                { classes: "comment-time",
                    text: getTimeFromTimeBasedId(note.id) }
            ]]
    });
}
function drawComments(section, todo) {
    if (todo.getOptions("notes"))
        todo.getOptions("notes").forEach(function (note) { drawComment(section, note, todo); });
}
function getFormData() {
    var text = document.querySelector("#inputTitle").value;
    var priority = document.querySelector("#priority").value;
    var descr = document.querySelector("#description").value;
    var date = document.querySelector("#date").value;
    var dateObj = new Date(date);
    dateObj.setDate(dateObj.getDate() + 1);
    date = date ? dateObj.toLocaleString('default', { month: 'short' }) + date.slice(date.length - 2) : date;
    return { title: text, priority: priority, descr: descr, date: date };
}
function createForm(todos, allowComments) {
    if (allowComments === void 0) { allowComments = false; }
    var formBase = makeHtmlElement("div", document.body, { classes: "form-module" });
    formBase.addEventListener("click", function (e) {
        if (e.target === formBase) {
            document.body.removeChild(formBase);
        }
    }, true);
    var content = makeHtmlElement("div", formBase, { classes: "content" });
    var form = makeHtmlElement("form", content, {});
    var formdiv1 = makeHtmlElement("div", form, {});
    var formdiv2 = makeHtmlElement("div", form, {});
    var formdiv3 = makeHtmlElement("div", form, {});
    var formdiv4 = makeHtmlElement("div", form, {});
    var formdiv5 = makeHtmlElement("div", form, { classes: "btn-div" });
    var titleLabel = makeHtmlElement("label", formdiv1, { name: "title", text: "Title:" });
    var title = makeHtmlElement("input", formdiv1, { name: "title", placeholder: "newTodo", id: "inputTitle" });
    title.required = true;
    var descrLabel = makeHtmlElement("label", formdiv2, { name: "descr", text: "Description:" });
    var descr = makeHtmlElement("textArea", formdiv2, { name: "descr", placeholder: "description...", id: "description" });
    descr.style.resize = "none";
    var dateLabel = makeHtmlElement("label", formdiv3, { name: "descr", text: "Date:" });
    var date = makeHtmlElement("input", formdiv3, { name: "date", type: "date", id: "date" });
    var priorityLabel = makeHtmlElement("label", formdiv4, { name: "priority", text: "Priority:" });
    var priority = makeHtmlElement("input", formdiv4, { name: "priority", type: "color", value: "#c6c6c6", id: "priority" });
    var createBtn = makeHtmlElement("button", formdiv5, { text: "Create" });
    form.onsubmit = function (e) {
        e.preventDefault();
        // let newTodo = new todo(todoName);
        // todos.add(newTodo);
        // createTodo(newTodo,todos);
        var formData = getFormData();
        var newTodo = new todo(formData.title, formData.descr, { priority: formData.priority, dueDate: formData.date });
        todos.add(newTodo);
        createTodo(newTodo, todos);
        document.body.removeChild(formBase);
    };
}
function enableText(id, setFunc) {
    var target = document.querySelector("#txtbox-" + id + " input");
    var editBtn = document.querySelector("#txtbox-" + id + " i");
    target.value = "";
    target.readOnly = false;
    target.select();
    var func = function (e) {
        if (e.key === "Enter" || e.type === "click") {
            var todos = getTodos(id);
            var value = target.value;
            if (!value.length) {
                value = target.placeholder;
            }
            if (setFunc) {
                setFunc(value);
            }
            target.readOnly = true;
            target.removeEventListener('keypress', func);
            enterBtn.replaceWith(editBtn);
            target.placeholder = value;
        }
    };
    var enterBtn = makeHtmlElement("i", null, { classes: "bi bi-box-arrow-in-right" });
    enterBtn.onclick = func;
    editBtn.replaceWith(enterBtn);
    var k = target.addEventListener("keypress", func);
}
function makeToggableTextBox(text, id, parentEle, classes, func) {
    if (parentEle === void 0) { parentEle = null; }
    if (classes === void 0) { classes = ""; }
    if (func === void 0) { func = null; }
    return makeHtmlElement("div", parentEle, { classes: "tg-txt " + classes,
        id: "txtbox-" + id,
        children: [
            ["input",
                { text: text,
                    placeholder: text,
                    readOnly: true,
                    value: text }
            ],
            ["i",
                { classes: "bi-pencil-square bi",
                    click: function () { return enableText(id, func); }
                }
            ]
        ]
    });
    // let div = document.createElement("div");
    // div.classList.add("tg-text")
    // div.id = "txtbox";
    // let input = document.createElement("input");
    // input.textContent = text;
    // let btn = document.createElement("i");
    // btn.classList.add("bi");
    // btn.classList.add("bi-pencil-square");
    // btn.addEventListener("click",()=>{});
    // div.appendChild(input);
    // div.appendChild(btn)
    // return div;
}
function makeTitle(eleSel, todos, listeners) {
    if (listeners === void 0) { listeners = []; }
    makeToggableTextBox(todos.getName(), todos.getId(), document.querySelector(eleSel), "todos title", function (value) {
        todos.setName(value);
        changeNameSidebar(todos.getId(), value);
    });
    //     makeHtmlElement("div",document.querySelector(eleSel),
    //     {classes:["title"],
    //     id: "title-" + todos.getId(),
    //     children:[
    //         ["input",
    //         {text:todos.getName()}],
    //         ["i",
    //         {classes:["edit"],
    //          text:"edit",
    //         listeners:[{
    //             type:"click",
    //             func:()=>replaceTitleWithTextBox(todos)
    //             }]
    //     }]]
    // });
}
function hideElement(ele) {
    ele.style.visibility = "hidden";
}
function showElement(ele) {
    ele.style.visibility = "visible";
}
function enableTitleTextBox() {
}
// function createTextTitleArea(todos:TodosModel){
//     let title = document.querySelector(`#title-${todos.getId()}`)
//     let titleText = document.querySelector(`#title-${todos.getId()} h3`);
//     let editBtn = (<HTMLElement>document.querySelector(`#title-${todos.getId()} i`));
//     hideElement(editBtn);
//     if (!titleText){
//         return
//     }
//     let textArea = makeHtmlElement("div",null,{
//         children:[["input",
//         {placeholder:titleText.textContent}
//         ],
//         ["i",
//         {classes:"close","bi "bi-x",
//         click:()=>{
//             textArea.replaceWith(titleText)
//             showElement(editBtn);
//         }}],
//         ["i",
//         {
//            classes:["bi","bi-reply","enter"],
//             click:()=>{
//                 let text = (<HTMLInputElement>document.querySelector(`#title-${todos.getId()} div input`)).value;
//                 if (text.length){
//                     titleText.textContent = text;
//                     textArea.replaceWith(titleText);
//                     todos.setName(text);
//                     showElement(editBtn);
//                 }
//             }
//         }
//         ]
//     ]
//     }
//         )
//         return textArea;
// }
function createTodo(todo, todos, addToDom) {
    if (addToDom === void 0) { addToDom = true; }
    var section = document.querySelector("#section-" + todos.getId() + " .todo-area");
    if (!addToDom) {
        section = null;
    }
    var isChecked = !todo.getOptions('checkValue') ? "not-checked" : "checked-off";
    var todoEleWrapper = makeHtmlElement("div", section, { classes: "todo-ele-wrapper " + isChecked + " " });
    var todoEle = makeHtmlElement("div", todoEleWrapper, { classes: "todo-ele" });
    todoEleWrapper.id = "todo-" + todo.getId();
    var banner = makeHtmlElement("div", todoEle, { classes: "banner" });
    var todoEleInnerWrapper = makeHtmlElement("div", todoEle, { classes: "todo-ele-inner" });
    if (todo.getOptions("priority")) {
        banner.style.backgroundColor = todo.getOptions("priority");
    }
    var check = makeHtmlElement("input", todoEleInnerWrapper, { classes: "check", type: "checkbox" });
    var titlebox = makeToggableTextBox(todo.getTitle(), "title-" + todo.getId(), todoEleInnerWrapper, "todo-name", function (value) { return todo.setTitle(value); });
    var stats = makeHtmlElement("div", todoEleInnerWrapper, { classes: "stats" });
    if (todo.getOptions("dueDate")) {
        var date = makeHtmlElement("div", stats, { text: todo.getOptions("dueDate"), classes: "due-date" });
    }
    if (todo.getDescription()) {
        var descrBtn_1 = makeHtmlElement("i", stats, { classes: "descr-btn bi bi-card-text tooltip" });
        var ttp = makeHtmlElement("div", descrBtn_1, { classes: "tooltiptext", text: "has a description" });
        descrBtn_1.onclick = function (e) {
            if (document.querySelector("#todo-" + todo.getId() + " .info-box.com-btn")) {
                document.querySelector("#todo-" + todo.getId() + " .info-box").classList.add("fast");
                document.querySelector("#todo-" + todo.getId() + " .info-box").classList.replace("new", "old");
                var commentBtnRef_1 = document.querySelector("#todo-" + todo.getId() + " .comment-btn");
                if (commentBtnRef_1) {
                    commentBtnRef_1.disabled = true;
                }
                setTimeout(function () {
                    todoEleWrapper.removeChild(document.querySelector("#todo-" + todo.getId() + " .info-box"));
                    if (commentBtnRef_1) {
                        commentBtnRef_1.disabled = false;
                    }
                    var descriptionBox = makeHtmlElement("div", todoEleWrapper, { classes: "info-box new fast de-btn", children: [["div", { text: "Description: " }], ["div", { text: todo.getDescription(), classes: "descr-txt" }]] });
                }, 250);
            }
            else if (document.querySelector("#todo-" + todo.getId() + " .info-box.new")) {
                document.querySelector("#todo-" + todo.getId() + " .info-box").classList.remove("fast");
                document.querySelector("#todo-" + todo.getId() + " .info-box").classList.replace("new", "old");
                descrBtn_1.disabled = true;
                setTimeout(function () {
                    todoEleWrapper.removeChild(document.querySelector("#todo-" + todo.getId() + " .info-box"));
                    descrBtn_1.disabled = false;
                }, 1000);
            }
            else {
                var descriptionBox = makeHtmlElement("div", todoEleWrapper, { classes: "info-box new de-btn ", children: [["div", { text: "Description: " }], ["div", { text: todo.getDescription(), classes: "descr-txt" }]] });
            }
        };
    }
    if (todo.getOptions("notes")) {
        var length_1 = todo.getOptions("notes").length;
        var comment_1 = makeHtmlElement("i", stats, { classes: "comment-btn bi bi-chat-right-quote-fill tooltip" });
        var ttp2 = makeHtmlElement("div", comment_1, { classes: "tooltiptext", text: "" + length_1 + " comments" });
        comment_1.onclick = function (e) {
            if (document.querySelector("#todo-" + todo.getId() + " .info-box.de-btn")) {
                document.querySelector("#todo-" + todo.getId() + " .info-box").classList.add("fast");
                document.querySelector("#todo-" + todo.getId() + " .info-box").classList.replace("new", "old");
                var descrBtnRef_1 = document.querySelector("#todo-" + todo.getId() + " .descr-btn");
                if (descrBtnRef_1) {
                    descrBtnRef_1.disabled = true;
                }
                comment_1.disabled = true;
                setTimeout(function () {
                    todoEleWrapper.removeChild(document.querySelector("#todo-" + todo.getId() + " .info-box"));
                    if (descrBtnRef_1) {
                        descrBtnRef_1.disabled = false;
                    }
                    var notes = todo.getOptions("notes");
                    var message = notes[notes.length - 1].message;
                    var descriptionBox = makeHtmlElement("div", todoEleWrapper, { classes: "info-box new fast com-btn", children: [["div", { text: "LastMessage: " }], ["div", { text: message, classes: "descr-txt" }]] });
                }, 250);
            }
            else if (document.querySelector("#todo-" + todo.getId() + " .info-box.new")) {
                document.querySelector("#todo-" + todo.getId() + " .info-box").classList.remove("fast");
                document.querySelector("#todo-" + todo.getId() + " .info-box").classList.replace("new", "old");
                comment_1.disabled = true;
                setTimeout(function () {
                    todoEleWrapper.removeChild(document.querySelector("#todo-" + todo.getId() + " .info-box"));
                    comment_1.disabled = false;
                }, 1000);
            }
            else {
                var notes = todo.getOptions("notes");
                var message = notes[notes.length - 1].message;
                var descriptionBox = makeHtmlElement("div", todoEleWrapper, { classes: "info-box new com-btn", children: [["div", { text: "Last Message: " }], ["div", { text: message, classes: "descr-txt" }]] });
            }
        };
    }
    var controls = makeHtmlElement("div", todoEleInnerWrapper, { classes: "controls" });
    var editBtn = makeHtmlElement("i", controls, { classes: "edit bi bi-pen" });
    editBtn.onclick = function (e) {
        createEditForm(todos, todo);
    };
    var delBtn = makeHtmlElement("i", controls, { classes: "delete bi bi-trash2-fill" });
    delBtn.onclick = function () {
        var parent = document.querySelector("#section-" + (todos.getId() + " .todo-area "));
        parent.removeChild(todoEleWrapper);
        todos.removeByTodo(todo);
    };
    check.onclick = function (e) {
        todo.setOptions("checkValue", !todo.getOptions("checkValue"));
        if (todo.getOptions("checkValue")) {
            document.querySelector("#todo-" + todo.getId()).classList.replace("not-checked", "checked-off");
            banner.innerText = todo.getTitle();
        }
        else {
            document.querySelector("#todo-" + todo.getId()).classList.replace("checked-off", "not-checked");
            banner.innerText = "";
        }
    };
    if (isChecked === "checked-off") {
        banner.innerText = todo.getTitle();
    }
    banner.onclick = function (e) {
        todo.setOptions("checkValue", false);
        check.checked = false;
        document.querySelector("#todo-" + todo.getId()).classList.replace("checked-off", "not-checked");
        banner.innerText = "";
    };
    return todoEleWrapper;
}
var onTodosView = (function (currentTodos) {
    clearContent();
    makeTitle("#content", currentTodos);
    var section = makeHtmlElement("div", document.querySelector("#content"), { classes: "todo-list", id: "section-" + currentTodos.getId() });
    var makeNewArea = makeHtmlElement("div", section, { classes: "make-new" });
    var todoArea = makeHtmlElement("div", section, { classes: "todo-area" });
    drawMakeNew(currentTodos);
    currentTodos.getTodos().forEach(function (todo) {
        createTodo(todo, currentTodos);
        // let todoEle = makeHtmlElement("div",todoSection,{classes:"todo-ele"})
        // let check = makeHtmlElement("input",todoEle,{classes:"check",type:"checkbox"})
        // makeToggableTextBox(todo.getTitle(),"title-"+todo.getId(),todoEle,"todo-name",
        // {
        //     type:"click",
        //     func:()=>enableText("title-"+todo.getId(),(value:any)=>todo.setTitle(value))
        // })
        // makeToggableTextBox(todo.getDescription(),"descr-"+todo.getId(),todoEle,"descr title",
        // {
        //     type:"click",
        //     func:()=>enableText("descr-"+todo.getId(),(value:any)=>todo.setTitle(value))
        // })
        // check.onclick =(e:any)=>
        // {
        //     todo.setOptions("checkValue",!todo.getOptions("checkValue"))
        //     //(<HTMLElement>e.target.checked)
        //     if (!todo.getOptions("checkValue")){
        //     (<HTMLElement>document.querySelector("#txtbox-title-"+todo.getId() + " input")).style.textDecoration ="line-through";
        //     console.log(e)
        // }else{
        //     (<HTMLElement>document.querySelector("#txtbox-title-"+todo.getId() + " input")).style.textDecoration ="none";
        // }
        // }
        // });
    });
});
var todo = /** @class */ (function () {
    function todo(title, desciption, options) {
        if (title === void 0) { title = ""; }
        if (desciption === void 0) { desciption = ""; }
        if (options === void 0) { options = {}; }
        this.title = title;
        this.desciption = desciption;
        this.option = options;
        this.id = "" + new Date().getTime();
    }
    todo.prototype.getProps = function (obj, name) {
        return obj[name];
    };
    todo.prototype.setProps = function (obj, name, value) {
        obj[name] = value;
    };
    todo.prototype.getOptions = function (name) { return this.option[name]; };
    todo.prototype.getTitle = function () { return this.title; };
    todo.prototype.getDescription = function () { return this.desciption; };
    todo.prototype.getId = function () { return this.id; };
    todo.prototype.setOptions = function (name, value) {
        this.setProps(this.option, name, value);
    };
    todo.prototype.setTitle = function (title) {
        if (!title) {
            return;
        }
        this.title = title;
    };
    todo.prototype.setDescription = function (text) {
        this.desciption = text;
    };
    todo.prototype.addNote = function (message) {
        var note = {
            message: message,
            id: "" + new Date().getTime(),
        };
        if (!this.option.notes) {
            this.option.notes = [note];
        }
        else {
            this.option.notes.push(note);
        }
        return note;
    };
    todo.prototype.deleteNote = function (id) {
        this.option.notes = this.option.notes.filter(function (note) { return note.id !== id; });
    };
    todo.prototype.fromStringify = function (inp) {
        this.title = inp.title;
        this.id = inp.id;
        this.option = inp.option;
        this.desciption = inp.description;
        return this;
    };
    return todo;
}());
var TodosModel = /** @class */ (function () {
    function TodosModel(name) {
        this.todos = [];
        this.name = name;
        this.id = "" + name.length + "-" + new Date().getTime();
    }
    TodosModel.prototype.add = function (todo) {
        this.todos.push(todo);
    };
    TodosModel.prototype.removeIndex = function (index) {
        this.todos = __spreadArray(__spreadArray([], this.todos.splice(0, index)), this.todos.splice(index + 1));
    };
    TodosModel.prototype.removeById = function (id) {
        this.todos = this.todos.filter(function (item) { return item.getId() !== id; });
    };
    TodosModel.prototype.removeByTodo = function (todo) {
        this.removeById(todo.getId());
    };
    TodosModel.prototype.show = function () {
        this.todos.forEach(function (item) { return console.log(item.getTitle()); });
    };
    TodosModel.prototype.getName = function () {
        return this.name;
    };
    TodosModel.prototype.setName = function (name) {
        if (!name) {
            return;
        }
        this.name = name;
    };
    TodosModel.prototype.getId = function () {
        return this.id;
    };
    TodosModel.prototype.getTodos = function () {
        return this.todos;
    };
    TodosModel.prototype.fromStringify = function (inp) {
        this.name = inp.name;
        this.todos = inp.todos.map(function (td) { if (td)
            new todo("", "", {}).fromStringify(td); });
        this.id = inp.id;
        return this;
    };
    return TodosModel;
}());
var table = new TodosModel("thoughts");
table.add(new todo("tired", "hi", { dueDate: "Jul10",
    notes: [{ message: "im going there soon!", id: "note-001" }]
}));
var table2 = new TodosModel("Foods");
table2.add(new todo("hi", "hi", { dueDate: "Jul10",
    notes: [{ message: "im going there soon!", id: "note-002" }]
}));
var allTodos = [table, table2];
// localStorage.setItem("allTodos","[]")
function changeNameSidebar(id, value) {
    var sidebarName = document.querySelector("#sidebarTodoName-" + id + " .bar-title-text");
    if (!sidebarName) {
        return;
    }
    sidebarName.textContent = value;
}
function clearContent() {
    var content = document.querySelector("#content");
    while (content.lastChild) {
        content.removeChild(content.lastChild);
    }
}
function removeTodos(id) {
    allTodos = allTodos.filter(function (todos) { return todos.getId() !== id; });
    localStorage.setItem("allTodos", JSON.stringify(allTodos));
}
var sidebarTitles = makeHtmlElement("div", null, { classes: "side-bar-titles" });
allTodos.forEach(function (todos, index) {
    var htmlTodos = makeHtmlElement("div", sidebarTitles, { classes: "bar-title " + (!index ? "sel" : "unsel"), id: "sidebarTodoName-" + todos.getId() });
    var text = makeHtmlElement("div", htmlTodos, { classes: "bar-title-text", text: todos.getName() });
    var del = makeHtmlElement("i", htmlTodos, { classes: "bi bi-trash2-fill" });
    htmlTodos.addEventListener("click", function (e) {
        if (e.target.nodeName === "I") {
            return;
        }
        onTodosView(todos);
        removeSelClass();
        htmlTodos.classList.replace("unsel", "sel");
        e.stopPropagation();
    }, true);
    del.onclick = function (e) {
        removeTodos(todos.getId());
        var ele = sidebarTitles.removeChild(htmlTodos);
        if (ele.classList.contains("sel")) {
            if (allTodos.length > 0) {
                var grabbedEle = document.querySelectorAll(".bar-title")[0];
                grabbedEle.click();
            }
            else {
                clearContent();
            }
        }
    };
});
var newTodosInput = makeHtmlElement("div", sidebar, { classes: "make-new-todos", children: [["input", {}],
    ] });
function removeSelClass() {
    var sidebarTitles = document.querySelector(".side-bar-titles");
    sidebarTitles.childNodes.forEach(function (node) { return node.classList.replace("sel", "unsel"); });
}
var newTodosBtn = makeHtmlElement("i", newTodosInput, { classes: "bi bi-plus-square-fill" });
newTodosBtn.onclick = function (e) {
    var input = document.querySelector(".make-new-todos input");
    if (!input.value) {
        return;
    }
    var todos = new TodosModel(input.value);
    allTodos.push(todos);
    localStorage.setItem("allTodos", JSON.stringify(allTodos));
    var htmlTodos = makeHtmlElement("div", sidebarTitles, { classes: "bar-title unsel", text: todos.getName(), id: "sidebarTodoName-" + todos.getId() });
    var del = makeHtmlElement("i", htmlTodos, { classes: "bi bi-trash2-fill" });
    htmlTodos.addEventListener("click", function (e) {
        onTodosView(todos);
        removeSelClass();
        htmlTodos.classList.replace("unsel", "sel");
        e.stopPropagation();
    }, false);
    del.addEventListener("click", function (e) {
        removeTodos(todos.getId());
        sidebarTitles.removeChild(htmlTodos);
        clearContent();
        e.stopPropagation();
    }, false);
};
sidebar.append(sidebarTitles);
var d = new Date();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ub2RvLy4vc3JjL2Nzcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly9Ub2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9Ub2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vVG9kby8uL3NyYy9jc3Mvc3R5bGVzLnNjc3M/N2IyZiIsIndlYnBhY2s6Ly9Ub2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzIiwid2VicGFjazovL1RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vVG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9Ub2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vVG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Ub2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL1RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Ub2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vVG9kby8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUssS0FBSyxlQUFlLEtBQUssZUFBZSxLQUFLLHFCQUFxQixLQUFLLEtBQUssaUJBQWlCLE1BQU0scUJBQXFCLEtBQUssS0FBSyxlQUFlLEtBQUssdUJBQXVCLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxrQkFBa0IsTUFBTSxZQUFZLFdBQVcsVUFBVSxnQkFBZ0IsS0FBSyxVQUFVLFlBQVksbUJBQW1CLE1BQU0sa0JBQWtCLE1BQU0sVUFBVSxrQkFBa0IsTUFBTSxVQUFVLGtCQUFrQixNQUFNLFlBQVksbUJBQW1CLE1BQU0sWUFBWSxtQkFBbUIsTUFBTSxnQkFBZ0IsTUFBTSxrQkFBa0IsTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxtQkFBbUIsTUFBTSxLQUFLLGVBQWUsTUFBTSxxQkFBcUIsTUFBTSxVQUFVLGtCQUFrQixNQUFNLFVBQVUsa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sS0FBSyxlQUFlLE1BQU0scUJBQXFCLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsaUJBQWlCLEtBQUssZ0JBQWdCLE1BQU0sa0JBQWtCLE1BQU0sWUFBWSxXQUFXLGtCQUFrQixNQUFNLFlBQVksbUJBQW1CLE1BQU0sWUFBWSxXQUFXLGtCQUFrQixNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxnQkFBZ0IsS0FBSyxrQkFBa0IsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsZ0JBQWdCLEtBQUssa0JBQWtCLE1BQU0sWUFBWSxXQUFXLGdCQUFnQixLQUFLLFlBQVksV0FBVyxrQkFBa0IsTUFBTSxVQUFVLGdCQUFnQixNQUFNLGdCQUFnQixNQUFNLGdCQUFnQixNQUFNLGtCQUFrQixNQUFNLFlBQVksYUFBYSxpQkFBaUIsTUFBTSxVQUFVLFVBQVUsZ0JBQWdCLEtBQUssWUFBWSxpQkFBaUIsS0FBSyxVQUFVLGtCQUFrQixNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxrQkFBa0IsTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLGtCQUFrQixNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLG1CQUFtQixNQUFNLFlBQVksV0FBVyxrQkFBa0IsTUFBTSxZQUFZLG1CQUFtQixRQUFRLGtCQUFrQixNQUFNLGdCQUFnQixNQUFNLGdCQUFnQixNQUFNLFVBQVUsWUFBWSxtQkFBbUIsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxrQkFBa0IsTUFBTSxZQUFZLG1CQUFtQixNQUFNLFVBQVUsWUFBWSxtQkFBbUIsTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxnQkFBZ0IsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsbUJBQW1CLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxtQkFBbUIsTUFBTSxZQUFZLG1CQUFtQixNQUFNLFlBQVksbUJBQW1CLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsV0FBVyxrQkFBa0IsTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksbUJBQW1CLE1BQU0sWUFBWSxtQkFBbUIsTUFBTSxrQkFBa0IsTUFBTSxVQUFVLFlBQVksbUJBQW1CLE1BQU0sVUFBVSxrQkFBa0IsTUFBTSxVQUFVLGtCQUFrQixNQUFNLFVBQVUsWUFBWSxpQkFBaUIsS0FBSyxZQUFZLGFBQWEsaUJBQWlCLE9BQU8sVUFBVSxZQUFZLG1CQUFtQixTQUFTLFVBQVUsWUFBWSxhQUFhLGlCQUFpQixNQUFNLFVBQVUsZ0JBQWdCLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGlCQUFpQixLQUFLLGtCQUFrQixNQUFNLGtCQUFrQixNQUFNLGtCQUFrQixNQUFNLGtCQUFrQixNQUFNLFlBQVksV0FBVyxnQkFBZ0IsS0FBSyxrQkFBa0IsTUFBTSxLQUFLLGVBQWUsTUFBTSxxQkFBcUIsTUFBTSxLQUFLLGVBQWUsS0FBSyxxQkFBcUIsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLG1CQUFtQixNQUFNLGdCQUFnQixNQUFNLFlBQVksbUJBQW1CLE1BQU0sWUFBWSxXQUFXLGdCQUFnQixLQUFLLGdCQUFnQixLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksbUJBQW1CLE1BQU0sWUFBWSxtQkFBbUIsTUFBTSxnQkFBZ0IsS0FBSyxpQkFBaUIsTUFBTSxpQkFBaUIsTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsa0JBQWtCLE1BQU0sWUFBWSxXQUFXLFVBQVUsa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sVUFBVSxVQUFVLFVBQVUsZ0JBQWdCLE1BQU0sWUFBWSxpQkFBaUIsTUFBTSxZQUFZLGFBQWEsbUJBQW1CLE1BQU0sWUFBWSxhQUFhLGlCQUFpQixNQUFNLFVBQVUsa0JBQWtCLE1BQU0sVUFBVSxrQkFBa0IsT0FBTyxrQkFBa0IsTUFBTSxZQUFZLFdBQVcsVUFBVSxnQkFBZ0IsTUFBTSxLQUFLLGlCQUFpQixNQUFNLFVBQVUsaUJBQWlCLE1BQU0sZUFBZSxNQUFNLFVBQVUsWUFBWSx1QkFBdUIsS0FBSyxLQUFLLFVBQVUsZUFBZSxNQUFNLGVBQWUsTUFBTSxVQUFVLGtEQUFrRCwwQ0FBMEMsS0FBSyxxR0FBcUcsb0JBQW9CLG9DQUFvQyx3QkFBd0IseUJBQXlCLGdCQUFnQixrREFBa0QsYUFBYSxpQkFBaUIsZ0VBQWdFLGtCQUFrQixnRUFBZ0UsU0FBUyxLQUFLLHVCQUF1QixtQkFBbUIsa0JBQWtCLDJCQUEyQixxQkFBcUIsb0JBQW9CLGdCQUFnQix5QkFBeUIseUJBQXlCLEtBQUssNEJBQTRCLHlCQUF5Qiw0REFBNEQsS0FBSyx1QkFBdUIsa0NBQWtDLDJCQUEyQixzQkFBc0IsS0FBSyxxQkFBcUIsMkNBQTJDLHNCQUFzQixLQUFLLGlCQUFpQiw2Q0FBNkMsb0JBQW9CLHFCQUFxQiwwQkFBMEIsS0FBSyxtQkFBbUIsNkNBQTZDLHFCQUFxQixxQ0FBcUMsOEJBQThCLHlCQUF5Qiw0QkFBNEIsMkJBQTJCLEtBQUssZUFBZSwyRkFBMkYsS0FBSyxvQkFBb0IsMENBQTBDLEtBQUsscUJBQXFCLDJDQUEyQyw2Q0FBNkMsS0FBSyxvQkFBb0IsMkNBQTJDLEtBQUsscUJBQXFCLDRDQUE0QyxLQUFLLDhCQUE4QixZQUFZLHdCQUF3QixTQUFTLGFBQWEsK0JBQStCLGNBQWMsK0JBQStCLEtBQUssK0JBQStCLFlBQVksK0JBQStCLGFBQWEsK0JBQStCLGNBQWMsZ0NBQWdDLEtBQUssNkJBQTZCLFlBQVkseUNBQXlDLFNBQVMsY0FBYyw4QkFBOEIsS0FBSyw4QkFBOEIsWUFBWSw4QkFBOEIsY0FBYyx5Q0FBeUMsU0FBUyxLQUFLLGtCQUFrQiw4QkFBOEIscUJBQXFCLHdCQUF3QixxQkFBcUIseUJBQXlCLEtBQUssZ0JBQWdCLDJCQUEyQixtQkFBbUIsd0JBQXdCLHlCQUF5QixnQ0FBZ0MscUJBQXFCLHNEQUFzRCwwQkFBMEIsS0FBSyxrQkFBa0IseUJBQXlCLEtBQUssbUNBQW1DLG9CQUFvQixtQ0FBbUMsS0FBSyw2Q0FBNkMscUJBQXFCLDhCQUE4QixLQUFLLG9CQUFvQix5QkFBeUIsMkJBQTJCLEtBQUssb0JBQW9CLDJCQUEyQix5QkFBeUIsS0FBSyx5QkFBeUIsc0JBQXNCLEtBQUssa0JBQWtCLHFEQUFxRCxLQUFLLG1CQUFtQixnQ0FBZ0MsMkJBQTJCLHFEQUFxRCxvQkFBb0IscURBQXFELHlCQUF5QiwyQkFBMkIsS0FBSyxzQkFBc0IsdUNBQXVDLEtBQUsseUJBQXlCLFlBQVksMEJBQTBCLFNBQVMsY0FBYyx5QkFBeUIsU0FBUyxLQUFLLGdDQUFnQyx3REFBd0QseUNBQXlDLHFCQUFxQixLQUFLLGdDQUFnQyxxQkFBcUIsK0NBQStDLEtBQUssdUNBQXVDLHVCQUF1QiwyQkFBMkIsS0FBSyxzQ0FBc0MsMkJBQTJCLEtBQUssMkJBQTJCLFlBQVkseUJBQXlCLFNBQVMsY0FBYywwQkFBMEIsU0FBUyxLQUFLLDhCQUE4QixvREFBb0QscUJBQXFCLDJCQUEyQiw0QkFBNEIseUJBQXlCLHlCQUF5Qix5QkFBeUIsb0NBQW9DLHdCQUF3QixLQUFLLDRCQUE0QixzQ0FBc0MsS0FBSyx1Q0FBdUMsMkJBQTJCLDJCQUEyQixtQkFBbUIseUJBQXlCLEtBQUsseUJBQXlCLGdDQUFnQyxzQ0FBc0MsS0FBSyxnQ0FBZ0MseUJBQXlCLG1CQUFtQix5QkFBeUIsS0FBSyxnQ0FBZ0MscUJBQXFCLG9CQUFvQix5QkFBeUIseUJBQXlCLHlCQUF5QixxQkFBcUIsa0JBQWtCLG1CQUFtQix5QkFBeUIsOEJBQThCLHVCQUF1QixtQkFBbUIsS0FBSyxlQUFlLGlEQUFpRCxLQUFLLHFDQUFxQyxxQkFBcUIsb0JBQW9CLHlCQUF5Qix5QkFBeUIseUJBQXlCLHFCQUFxQixrQkFBa0IsbUJBQW1CLHlCQUF5Qiw4QkFBOEIsdUJBQXVCLG1CQUFtQixLQUFLLGlCQUFpQiwyQkFBMkIsS0FBSyxtQkFBbUIsMkJBQTJCLGlCQUFpQixlQUFlLEtBQUsscUJBQXFCLCtCQUErQixxQkFBcUIseUJBQXlCLEtBQUssZ0JBQWdCLG9CQUFvQixvQkFBb0IsS0FBSyx3QkFBd0Isd0JBQXdCLEtBQUssaUNBQWlDLHdCQUF3QixLQUFLLHNCQUFzQix5QkFBeUIsS0FBSywrQkFBK0IsOEJBQThCLHlCQUF5QixxQkFBcUIsS0FBSyxtQkFBbUIscUJBQXFCLGtCQUFrQixtQkFBbUIsS0FBSyx1QkFBdUIsOEJBQThCLG1CQUFtQixLQUFLLHNCQUFzQixtQkFBbUIsMEJBQTBCLEtBQUssNEJBQTRCLHFCQUFxQixvQkFBb0IsMkJBQTJCLDBCQUEwQix5QkFBeUIsa0JBQWtCLG1CQUFtQixtQkFBbUIseUJBQXlCLEtBQUssaUNBQWlDLG1CQUFtQixxQkFBcUIsb0JBQW9CLDJCQUEyQiwwQkFBMEIseUJBQXlCLHlCQUF5QixrQkFBa0IsbUJBQW1CLHFCQUFxQix5QkFBeUIsS0FBSyxpQkFBaUIsb0JBQW9CLG9CQUFvQiw2Q0FBNkMsa0JBQWtCLG1CQUFtQix5Q0FBeUMsMENBQTBDLEtBQUssbUJBQW1CLHlCQUF5QixzQkFBc0IsMkJBQTJCLEtBQUssdUJBQXVCLDhCQUE4Qix5QkFBeUIsS0FBSyw4Q0FBOEMsOEJBQThCLEtBQUssZ0JBQWdCLHFCQUFxQixLQUFLLGtCQUFrQix3QkFBd0IsS0FBSywwQkFBMEIsbUJBQW1CLGdDQUFnQyw2QkFBNkIsS0FBSyxtQkFBbUIsOEJBQThCLDZDQUE2Qyx5QkFBeUIsNEJBQTRCLDBCQUEwQix3QkFBd0IsaUNBQWlDLEtBQUsseUJBQXlCLGdDQUFnQyx5Q0FBeUMsS0FBSyxxQkFBcUIscUJBQXFCLDJCQUEyQiwyQkFBMkIsS0FBSyxzQkFBc0IsMkJBQTJCLG9CQUFvQixvQkFBb0IscUJBQXFCLG9EQUFvRCxnQkFBZ0IsaUJBQWlCLEtBQUssK0JBQStCLG1CQUFtQixvQkFBb0Isd0JBQXdCLDZDQUE2QyxzQ0FBc0Msb0JBQW9CLDJCQUEyQiwyQkFBMkIseUJBQXlCLEtBQUssbUJBQW1CLGtEQUFrRCw0QkFBNEIsMkRBQTJELDBCQUEwQixxQkFBcUIsMEJBQTBCLDhCQUE4Qiw4QkFBOEIsS0FBSyx5QkFBeUIsMENBQTBDLCtCQUErQixLQUFLLGtCQUFrQiwyQkFBMkIsOEJBQThCLEtBQUssK0JBQStCLDJCQUEyQixvQkFBb0IsK0NBQStDLG9CQUFvQiwyQkFBMkIsMkJBQTJCLHVCQUF1QixtQkFBbUIsbUJBQW1CLDZEQUE2RCxLQUFLLHFDQUFxQyw0QkFBNEIseUJBQXlCLHdCQUF3QixvQkFBb0IsOEJBQThCLDJCQUEyQixLQUFLLGdCQUFnQiw2QkFBNkIsNEJBQTRCLEtBQUssd0JBQXdCLG9EQUFvRCxLQUFLLHFCQUFxQixjQUFjLHNCQUFzQix5Q0FBeUMsMENBQTBDLEtBQUssa0JBQWtCLG1CQUFtQiwyQkFBMkIsS0FBSyxrQkFBa0Isb0JBQW9CLDRCQUE0QixLQUFLLHlCQUF5QixvQkFBb0IsbURBQW1ELG9CQUFvQixLQUFLLCtCQUErQixtREFBbUQsOEJBQThCLHdCQUF3QixLQUFLLDhEQUE4RCxvQkFBb0IsdUNBQXVDLHFEQUFxRCxLQUFLLHlKQUF5SixvQkFBb0IsbURBQW1ELHFEQUFxRCxxQkFBcUIsS0FBSyxzQkFBc0IsbUJBQW1CLHFCQUFxQixLQUFLLG1CQUFtQix5QkFBeUIsb0JBQW9CLGtCQUFrQixxREFBcUQsZ0NBQWdDLHdCQUF3Qix5QkFBeUIsMEJBQTBCLG9CQUFvQixLQUFLLHVCQUF1Qix5Q0FBeUMsS0FBSyx1QkFBdUIsd0NBQXdDLEtBQUssNEJBQTRCLDJDQUEyQyxLQUFLLDRCQUE0QiwwQ0FBMEMsS0FBSyxzQkFBc0IseUJBQXlCLGtCQUFrQixtQkFBbUIsS0FBSyxvQkFBb0IsMEJBQTBCLEtBQUssNkJBQTZCLFlBQVkseUJBQXlCLFNBQVMsY0FBYyx3QkFBd0IsU0FBUyxLQUFLLDhCQUE4QixZQUFZLHdCQUF3QixTQUFTLGNBQWMseUJBQXlCLFNBQVMsS0FBSyxlQUFlLHdCQUF3Qiw2Q0FBNkMsMkJBQTJCLGdDQUFnQywyQkFBMkIsMkJBQTJCLG9CQUFvQixzQkFBc0IseUJBQXlCLDhCQUE4QixxQkFBcUIsNEJBQTRCLDhCQUE4QixLQUFLLHNCQUFzQixxQkFBcUIsS0FBSyw0QkFBNEIsc0NBQXNDLGdDQUFnQyxLQUFLLHdCQUF3QiwyQkFBMkIsa0JBQWtCLG9CQUFvQixLQUFLLDhCQUE4Qix1QkFBdUIsMEJBQTBCLDJCQUEyQixvQkFBb0Isc0JBQXNCLCtDQUErQyxnQ0FBZ0MsS0FBSyxtQ0FBbUMsNEJBQTRCLHNDQUFzQyxLQUFLLHFCQUFxQix3QkFBd0IsdUJBQXVCLCtCQUErQixLQUFLLDZCQUE2Qiw0QkFBNEIsS0FBSyx1QkFBdUIsMkJBQTJCLDJCQUEyQixpQkFBaUIsMEJBQTBCLHNCQUFzQix5Q0FBeUMsS0FBSywrQkFBK0IscURBQXFELHFCQUFxQixvQkFBb0IsdUNBQXVDLEtBQUsseUJBQXlCLDJCQUEyQixLQUFLLDBCQUEwQiwyQkFBMkIsS0FBSyxvQkFBb0IscUJBQXFCLHVCQUF1QixtQkFBbUIsd0JBQXdCLEtBQUssc0JBQXNCLDhCQUE4Qix3QkFBd0IsS0FBSyx3QkFBd0IsOEJBQThCLGdFQUFnRSxzQ0FBc0MsS0FBSyxnQ0FBZ0MsOEJBQThCLHdDQUF3Qyx3QkFBd0IsS0FBSyxrQ0FBa0MscUJBQXFCLHNEQUFzRCxLQUFLLCtCQUErQix1QkFBdUIsMkJBQTJCLEtBQUssb0VBQW9FLDJCQUEyQixLQUFLLDJCQUEyQiwyQkFBMkIsbUJBQW1CLGlCQUFpQixxQkFBcUIsS0FBSyw2Q0FBNkMsZ0JBQWdCLDhDQUE4QyxTQUFTLDJCQUEyQix1QkFBdUIsNkJBQTZCLFNBQVMsb0JBQW9CLDJCQUEyQixTQUFTLDBCQUEwQix1QkFBdUIsb0NBQW9DLDRCQUE0QixTQUFTLEtBQUssNkNBQTZDLDJCQUEyQix3QkFBd0IsMkJBQTJCLFNBQVMsK0JBQStCLDJCQUEyQixTQUFTLDBCQUEwQix1QkFBdUIsOEJBQThCLFNBQVMsS0FBSyxtQkFBbUI7QUFDdG9nQztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1IxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7Ozs7OztBQ2pFYTs7QUFFYixpQ0FBaUMsMkhBQTJIOztBQUU1Siw2QkFBNkIsa0tBQWtLOztBQUUvTCxpREFBaUQsZ0JBQWdCLGdFQUFnRSx3REFBd0QsNkRBQTZELHNEQUFzRCxrSEFBa0g7O0FBRTlaLHNDQUFzQyx1REFBdUQsdUNBQXVDLFNBQVMsT0FBTyxrQkFBa0IsRUFBRSxhQUFhOztBQUVyTCx3Q0FBd0MsOEZBQThGLHdCQUF3QixlQUFlLGVBQWUsZ0JBQWdCLFlBQVksTUFBTSx3QkFBd0IsK0JBQStCLGFBQWEscUJBQXFCLG1DQUFtQyxFQUFFLEVBQUUsY0FBYyxXQUFXLFVBQVUsRUFBRSxVQUFVLE1BQU0saURBQWlELEVBQUUsVUFBVSxrQkFBa0IsRUFBRSxFQUFFLGFBQWE7O0FBRW5mLCtCQUErQixvQ0FBb0M7O0FBRW5FO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQXlGO0FBQ3pGLE1BQTJHO0FBQzNHLE1BQW1KOzs7O0FBSW5KOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUU3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDJGQUFTOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDBIQUFPOzs7O0FBSTZGO0FBQ3JILE9BQU8saUVBQWUsMEhBQU8sSUFBSSxpSUFBYyxHQUFHLGlJQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUNqRGhFOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFEQUFxRDs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMkI7Ozs7Ozs7Ozs7QUMxQmE7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsd0JBQXdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IsNkJBQTZCO0FBQ2pEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7O0FDaEdhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9DOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsR0FBRzs7QUFFSDs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCOzs7Ozs7VUMvQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ05BLHFCQUFxQixTQUFJLElBQUksU0FBSTtBQUNqQyxvREFBb0QsUUFBUTtBQUM1RDtBQUNBO0FBQ0E7QUFDMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxlQUFlO0FBQ25FLHFEQUFxRCxxQkFBcUI7QUFDMUUsK0NBQStDLGlCQUFpQjtBQUNoRSwrQ0FBK0MsZ0JBQWdCO0FBQy9ELGtEQUFrRCx3QkFBd0I7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixrQkFBa0I7QUFDakQsNEJBQTRCLGFBQWE7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyx1QkFBdUI7QUFDN0Q7QUFDQTtBQUNBLDBDQUEwQyx1QkFBdUI7QUFDakU7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRCwwREFBMEQsa0JBQWtCLEVBQUU7QUFDOUUsU0FBUyxFQUFFO0FBQ1g7QUFDQTtBQUNBLGtEQUFrRCxvREFBb0QsRUFBRTtBQUN4RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsNkJBQTZCLEVBQUU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCwrQkFBK0IsRUFBRTtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCx3Q0FBd0M7QUFDN0Y7QUFDQSwwREFBMEQscUVBQXFFO0FBQy9ILGdEQUFnRCw2Q0FBNkM7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wseURBQXlELDhDQUE4QztBQUN2RywwQ0FBMEMsMEJBQTBCO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELDZCQUE2QjtBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCwrQ0FBK0MsSUFBSTtBQUMvRztBQUNBLHdEQUF3RCxvQkFBb0I7QUFDNUUsMERBQTBELHNCQUFzQixFQUFFO0FBQ2xGLHVEQUF1RCwyQ0FBMkM7QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGlDQUFpQztBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsa0NBQWtDLEVBQUU7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxpQkFBaUI7QUFDdEUsWUFBWTtBQUNaO0FBQ0E7QUFDQSxtQ0FBbUMsdUJBQXVCO0FBQzFELDBEQUEwRCx5QkFBeUI7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsb0RBQW9ELHFCQUFxQjtBQUN6RSxrREFBa0Q7QUFDbEQsa0RBQWtEO0FBQ2xELGtEQUFrRDtBQUNsRCxrREFBa0Q7QUFDbEQsa0RBQWtEO0FBQ2xELGlEQUFpRCxxQkFBcUI7QUFDdEUseURBQXlELGdDQUFnQztBQUN6RixvREFBb0QsMERBQTBEO0FBQzlHO0FBQ0EseURBQXlELHNDQUFzQztBQUMvRix1REFBdUQsa0VBQWtFO0FBQ3pIO0FBQ0Esd0RBQXdELCtCQUErQjtBQUN2RixtREFBbUQseUNBQXlDO0FBQzVGLDREQUE0RCxzQ0FBc0M7QUFDbEcsdURBQXVELG9FQUFvRTtBQUMzSCx5REFBeUQsaUJBQWlCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxzREFBc0Q7QUFDdEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLHNDQUFzQztBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGtCQUFrQjtBQUNqRCw2QkFBNkIsY0FBYztBQUMzQywwQkFBMEIsYUFBYTtBQUN2Qyw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsd0NBQXdDLDZCQUE2QjtBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGdCQUFnQjtBQUMvQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHFCQUFxQjtBQUNyQztBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixZQUFZO0FBQ1osUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGNBQWM7QUFDbEUsd0RBQXdELGNBQWM7QUFDdEUsb0VBQW9FLGNBQWM7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0ZBQWtGLGNBQWM7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGlCQUFpQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELGlEQUFpRDtBQUMzRywwREFBMEQsc0JBQXNCO0FBQ2hGO0FBQ0Esa0RBQWtELG9CQUFvQjtBQUN0RSwrREFBK0QsNEJBQTRCO0FBQzNGO0FBQ0E7QUFDQTtBQUNBLCtEQUErRCxxQ0FBcUM7QUFDcEcscUlBQXFJLDZCQUE2QixFQUFFO0FBQ3BLLDZEQUE2RCxtQkFBbUI7QUFDaEY7QUFDQSxrREFBa0Qsd0RBQXdEO0FBQzFHO0FBQ0E7QUFDQSxzREFBc0QsK0NBQStDO0FBQ3JHLHNEQUFzRCxvREFBb0Q7QUFDMUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRkFBaUYsMERBQTBELHdCQUF3QixZQUFZLG9EQUFvRCxJQUFJO0FBQ3ZPLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSw2RUFBNkUsc0RBQXNELHdCQUF3QixZQUFZLG9EQUFvRCxJQUFJO0FBQy9OO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsNkRBQTZEO0FBQ2xILHNEQUFzRCw0REFBNEQ7QUFDbEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRkFBaUYsMkRBQTJELHdCQUF3QixZQUFZLHNDQUFzQyxJQUFJO0FBQzFOLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkVBQTZFLHNEQUFzRCx5QkFBeUIsWUFBWSxzQ0FBc0MsSUFBSTtBQUNsTjtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0Usc0JBQXNCO0FBQ3RGLGtEQUFrRCw0QkFBNEI7QUFDOUU7QUFDQTtBQUNBO0FBQ0EsaURBQWlELHNDQUFzQztBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBOEUsOERBQThEO0FBQzVJLHVEQUF1RCxzQkFBc0I7QUFDN0Usb0RBQW9ELHVCQUF1QjtBQUMzRTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsbUJBQW1CO0FBQy9FLHdEQUF3RCxnQ0FBZ0M7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBLCtCQUErQixZQUFZO0FBQzNDLG9DQUFvQyxpQkFBaUI7QUFDckQsaUNBQWlDLGNBQWM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCwwQkFBMEI7QUFDM0UsMkNBQTJDLG1CQUFtQjtBQUM5RCxpREFBaUQsd0JBQXdCO0FBQ3pFLHdDQUF3QyxnQkFBZ0I7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRSx1QkFBdUIsRUFBRTtBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsNEJBQTRCLEVBQUU7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxxQ0FBcUMsRUFBRTtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQsK0JBQStCLG9CQUFvQixFQUFFO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsbUNBQW1DO0FBQ25DLGFBQWEsa0RBQWtEO0FBQy9ELENBQUM7QUFDRDtBQUNBLGlDQUFpQztBQUNqQyxhQUFhLGtEQUFrRDtBQUMvRCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsNkJBQTZCLEVBQUU7QUFDaEY7QUFDQTtBQUNBLGtEQUFrRCw2QkFBNkI7QUFDL0U7QUFDQSwyREFBMkQsNkZBQTZGO0FBQ3hKLGtEQUFrRCxtREFBbUQ7QUFDckcsK0NBQStDLCtCQUErQjtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELHFEQUFxRCxtREFBbUQ7QUFDeEcsT0FBTztBQUNQO0FBQ0E7QUFDQSxzREFBc0QsK0NBQStDLEVBQUU7QUFDdkc7QUFDQSx1REFBdUQsb0NBQW9DO0FBQzNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsNEZBQTRGO0FBQ3ZKLCtDQUErQywrQkFBK0I7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwLWljb25zQDEuNS4wL2ZvbnQvYm9vdHN0cmFwLWljb25zLmNzcyk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tc2lkZS1iYXItd2lkdGg6IG1heCgyMDBweCwgMTUlKTsgfVxcblxcbiN0ZXN0LWltZy0wMDAxIHtcXG4gIGFuaW1hdGlvbjogc3BpbiAzcyBpbmZpbml0ZTtcXG4gIG1hcmdpbjogMjUlIDUwJTsgfVxcblxcbkBrZXlmcmFtZXMgc3BpbiB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKSBzY2FsZSgxKTsgfVxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDE4MGRlZykgc2NhbGUoMik7IH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMzYwZGVnKSBzY2FsZSgxKTsgfSB9XFxuXFxuYm9keSxcXG5odG1sIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtaW4td2lkdGg6IDI2MHB4OyB9XFxuXFxuLmZvcm0tbW9kdWxlIGxhYmVsIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgxNjIsIDE2MSwgMTYxLCAwLjY2OSk7IH1cXG5cXG4jbWFpbi13cmFwcGVyIHtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNTBweCk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuYm9keTo6YWZ0ZXIge1xcbiAgZGlzcGxheTogZmxleDsgfVxcblxcbiNoZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY5YjNlMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZm9udC1zaXplOiAxLjVyZW07IH1cXG5cXG4jc2lkZS1iYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IwZDdlMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiB2YXIoLS1zaWRlLWJhci13aWR0aCk7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogY2xpcDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi50ZXN0IHtcXG4gIGFuaW1hdGlvbjogbmFtZSBkdXJhdGlvbiB0aW1pbmctZnVuY3Rpb24gZGVsYXkgaXRlcmF0aW9uLWNvdW50IGRpcmVjdGlvbiBmaWxsLW1vZGU7IH1cXG5cXG4uc2xpZGUtaW4xIHtcXG4gIGFuaW1hdGlvbjogc2xpZGUtaW4gLjY1cyBmb3J3YXJkczsgfVxcblxcbi5zbGlkZS1vdXQxIHtcXG4gIGFuaW1hdGlvbjogc2xpZGUtb3V0IC44NXMgZm9yd2FyZHM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzFiM2VjOyB9XFxuXFxuLnNsaWRlLWluMiB7XFxuICBhbmltYXRpb246IHNsaWRlLWluMiAuNjVzIGZvcndhcmRzOyB9XFxuXFxuLnNsaWRlLW91dDIge1xcbiAgYW5pbWF0aW9uOiBzbGlkZS1vdXQyIC44NXMgZm9yd2FyZHM7IH1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLWluMiB7XFxuICAwJSB7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICA1MCUge1xcbiAgICB3aWR0aDogOTAlOyB9XFxuICAxMDAlIHtcXG4gICAgd2lkdGg6IDkwJTsgfSB9XFxuXFxuQGtleWZyYW1lcyBzbGlkZS1vdXQyIHtcXG4gIDAlIHtcXG4gICAgd2lkdGg6IDkwJTsgfVxcbiAgNTAlIHtcXG4gICAgd2lkdGg6IDkwJTsgfVxcbiAgMTAwJSB7XFxuICAgIHdpZHRoOiAxMDAlOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLWluIHtcXG4gIDAlIHtcXG4gICAgd2lkdGg6IHZhcigtLXNpZGUtYmFyLXdpZHRoKTsgfVxcbiAgMTAwJSB7XFxuICAgIHdpZHRoOiAwJTsgfSB9XFxuXFxuQGtleWZyYW1lcyBzbGlkZS1vdXQge1xcbiAgMCUge1xcbiAgICB3aWR0aDogMCU7IH1cXG4gIDEwMCUge1xcbiAgICB3aWR0aDogdmFyKC0tc2lkZS1iYXItd2lkdGgpOyB9IH1cXG5cXG4jY29udGVudCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBmbGV4LWdyb3c6IDI7XFxuICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXFxuLnRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAyNSU7XFxuICBtYXJnaW46IDAgMzcuNSU7XFxuICBwYWRkaW5nOiA1cHg7IH1cXG5cXG4udGl0bGUgaW5wdXQ6cmVhZC1vbmx5IHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtc2hhZG93OiAycHggMXB4IDFweCByZ2JhKDgsIDgsIDgsIDAuMzI0KTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtOyB9XFxuXFxuLnRpdGxlIGkge1xcbiAgZm9udC1zaXplOiAuN3JlbTsgfVxcblxcbi50aXRsZSBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IGJsdWU7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxcblxcbi50aXRsZSBpbnB1dDpyZWFkLW9ubHk6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiBncmVlbjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxcblxcbi50b2RvLWFyZWEge1xcbiAgbWF4LWhlaWdodDogODB2aDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDsgfVxcblxcbi50b2RvLWxpc3Qge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcblxcbi50b2RvLWVsZS1pbm5lciB7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuI2NvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTAsIDIxMCwgMjEwLCAwLjI4Myk7IH1cXG5cXG4udG9kby1lbGUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNTI0KTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQzNCk7XFxuICBtaW4td2lkdGg6IDEyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4OyB9XFxuXFxuQGtleWZyYW1lcyBncm93IHtcXG4gIDAlIHtcXG4gICAgaGVpZ2h0OiAyLjVweDsgfVxcbiAgMTAwJSB7XFxuICAgIGhlaWdodDogNDVweDsgfSB9XFxuXFxuLmNoZWNrZWQtb2ZmIC50b2RvLWVsZSB7XFxuICBoZWlnaHQ6IDExcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDgzKTsgfVxcblxcbi50b2RvLWVsZS13cmFwcGVyLmNoZWNrZWQtb2ZmIHtcXG4gIG1hcmdpbi10b3A6IDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMnB4OyB9XFxuXFxuLmNoZWNrZWQtb2ZmIC50b2RvLWVsZS1pbm5lciB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47IH1cXG5cXG5Aa2V5ZnJhbWVzIHNocmluayB7XFxuICAwJSB7XFxuICAgIGhlaWdodDogNDVweDsgfVxcbiAgMTAwJSB7XFxuICAgIGhlaWdodDogMi41cHg7IH0gfVxcblxcbi5jaGVja2VkLW9mZiAuYmFubmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUsIDEwNCwgMTg3LCAwLjU3Nik7XFxuICBoZWlnaHQ6IDExcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXN0cmV0Y2g6IHdpZGVyO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogLjdyZW07XFxuICBjb2xvcjogd2hpdGU7IH1cXG5cXG4uY2hlY2tlZC1vZmYgLmJhbm5lcjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4uY2hlY2tlZC1vZmYgaW5wdXQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7IH1cXG5cXG4udG9kby1lbGUtd3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiAxMHB4IDEwJTsgfVxcblxcbi50b2RvLWVsZTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDA1KTtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IGJsYWNrOyB9XFxuXFxuLnRvZG8tZWxlIC5kZXNjciBpbnB1dCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgd2lkdGg6IDkwJTtcXG4gIGZvbnQtc2l6ZTogLjdyZW07IH1cXG5cXG4uY3JlYXRlLW5ldy10b2RvIGlucHV0IHtcXG4gIG91dGxpbmU6IDBweDtcXG4gIGJvcmRlcjogMHB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtc2l6ZTogLjdyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHBhZGRpbmctdG9wOiAycHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXgtd2lkdGg6IDc1JTtcXG4gIHdpZHRoOiAzMCU7IH1cXG5cXG5pbnB1dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApOyB9XFxuXFxuLnRvZG8tYXJlYSAudG9kby1uYW1lIGlucHV0IHtcXG4gIG91dGxpbmU6IDBweDtcXG4gIGJvcmRlcjogMHB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtc2l6ZTogLjdyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHBhZGRpbmctdG9wOiAycHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXgtd2lkdGg6IDc1JTtcXG4gIHdpZHRoOiA4MCU7IH1cXG5cXG4udGctdHh0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi50Zy10eHQgaSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDsgfVxcblxcbi5zbGlkZS1kb3duIHtcXG4gIHRyYW5zaXRpb246IGhlaWdodCAuNXM7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXFxuLmNoZWNrIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgY29sb3I6IGJsdWU7IH1cXG5cXG4uYmksXFxuLmNoZWNrIHtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi50Zy10eHQgaW5wdXQ6cmVhZC1vbmx5IHtcXG4gIGN1cnNvcjogZGVmYXVsdDsgfVxcblxcbi50b2RvLW5hbWUgaSB7XFxuICBmb250LXNpemU6IC42cmVtOyB9XFxuXFxuLnRvZG8tYXJlYSAudG9kby1uYW1lIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBmbGV4LWdyb3c6IDI7IH1cXG5cXG4udGl0bGUgaDMge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDsgfVxcblxcbi50Zy10eHQ6YWZ0ZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY29sb3I6IHJlZDsgfVxcblxcbi50aXRsZS50b2RvcyB7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiBhdXRvIDIuNSU7IH1cXG5cXG4udGl0bGUudG9kb3MgaW5wdXQge1xcbiAgb3V0bGluZTogMHB4O1xcbiAgYm9yZGVyOiAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IC44NXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgd2lkdGg6IDgwJTtcXG4gIHBhZGRpbmctdG9wOiAycHg7IH1cXG5cXG4udG9kby1hcmVhIC50aXRsZSBpbnB1dCB7XFxuICBjb2xvcjogcmVkO1xcbiAgb3V0bGluZTogMHB4O1xcbiAgYm9yZGVyOiAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IC44NXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBtYXgtaGVpZ2h0OiAzMHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIHBhZGRpbmctdG9wOiAycHg7IH1cXG5cXG4uYmFubmVyIHtcXG4gIGhlaWdodDogOHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzZjNmM2O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwMHB4O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwMHB4OyB9XFxuXFxuLmNvbnRyb2xzIHtcXG4gIGZsZXgtc2hyaW5rOiAxLjU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLmNvbnRyb2xzIC5iaSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tcmlnaHQ6IDIlOyB9XFxuXFxuLnN0YXRzLFxcbi5jb250cm9scyxcXG4uY29udHJvbHMgPiAqIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcblxcbi5zdGF0cyB7XFxuICBmbGV4LWdyb3c6IDI7IH1cXG5cXG4uc3RhdHMgPiAqIHtcXG4gIG1hcmdpbi1sZWZ0OiA1JTsgfVxcblxcbi5jcmVhdGUtbmV3LXRvZG8ge1xcbiAgd2lkdGg6IDY2JTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgbWFyZ2luOiA1cHggMTYuNjY2NiU7IH1cXG5cXG4ucHVzaC1uZXcge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTtcXG4gIGZvbnQtc2l6ZTogLjhyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAzcHggOHB4IDNweCA4cHg7IH1cXG5cXG4ucHVzaC1uZXc6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxNSk7XFxuICBjb2xvcjogcmdiYSgyNiwgMTcyLCAyMzQsIDAuNDQ4KTsgfVxcblxcbmkub3Blbi1mb3JtIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIG1hcmdpbi1yaWdodDogMTBweDsgfVxcblxcbi5mb3JtLW1vZHVsZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiA2MDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjksIDIyOSwgMjI5LCAwLjcxKTtcXG4gIHRvcDogMCU7XFxuICBsZWZ0OiAwJTsgfVxcblxcbi5mb3JtLW1vZHVsZSAuY29udGVudCB7XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiA4MCU7XFxuICBtYXJnaW46IDEwJSAxMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IGJsYWNrO1xcbiAgei1pbmRleDogNjU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXFxuLmR1ZS1kYXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNCwgMjU1LCAyOSwgMC41NTgpO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMTM4LCAxMzgsIDEzOCwgMC43MTcpO1xcbiAgZm9udC1zaXplOiAuNTVyZW07XFxuICBwYWRkaW5nOiAzcHg7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxcblxcbi5kdWUtZGF0ZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDRmZjFkO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTsgfVxcblxcbi50b29sdGlwIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcblxcbi50b29sdGlwIC50b29sdGlwdGV4dCB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB3aWR0aDogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43MDUpO1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBwYWRkaW5nOiAycHggMDtcXG4gIHRvcDogLTIwcHg7XFxuICBsZWZ0OiAyMHB4O1xcbiAgLyogUG9zaXRpb24gdGhlIHRvb2x0aXAgKi9cXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxcblxcbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgZm9udC1zaXplOiAuNnJlbTtcXG4gIHotaW5kZXg6IDIwMDAwMDtcXG4gIG9wYWNpdHk6IC45O1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgcG9zaXRpb246IGFic29sdXRlOyB9XFxuXFxuLnN0YXRzIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbi50b29sdGlwOmhvdmVyIHtcXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDJweCAjNmY2ZjZmOyB9XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byAyZnI7IH1cXG5cXG5mb3JtIGRpdiB7XFxuICBtYXJnaW46IDIlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLmJ0bi1kaXYge1xcbiAgd2lkdGg6IDIwMCU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXFxuLmJ0bi1kaXYgYnV0dG9uIHtcXG4gIGJvcmRlcjogMHB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAycHggIzg0ODI4MjtcXG4gIHBhZGRpbmc6IDElOyB9XFxuXFxuLmJ0bi1kaXYgYnV0dG9uOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNHB4ICM4NDgyODI7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4uZm9ybS1tb2R1bGUgZGl2IGlucHV0LFxcbi5mb3JtLW1vZHVsZSBkaXYgdGV4dGFyZWEge1xcbiAgYm9yZGVyOiAwcHg7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMSwgMjMxLCAyMzEsIDAuNDI3KTsgfVxcblxcbi5mb3JtLW1vZHVsZSBkaXYgaW5wdXQ6OnNlbGVjdGlvbixcXG4uZm9ybS1tb2R1bGUgZGl2IHRleHRhcmVhOjpzZWxlY3Rpb24sXFxuLmZvcm0tbW9kdWxlIGRpdiBpbnB1dDpmb2N1cyxcXG4uZm9ybS1tb2R1bGUgZGl2IHRleHRhcmVhOmZvY3VzIHtcXG4gIGJvcmRlcjogMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1ZTk1Y2Y7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMSwgMjMxLCAyMzEsIDAuNTM4KTtcXG4gIG91dGxpbmU6IDBweDsgfVxcblxcbiNkZXNjcmlwdGlvbiB7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiAxMDAlOyB9XFxuXFxuLmluZm8tYm94IHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM2LCAyMzYsIDIzNiwgMC42NDgpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItdG9wOiAwcHg7XFxuICBib3JkZXItbGVmdDogMHB4O1xcbiAgYm9yZGVyLXJpZ2h0OiAwcHg7XFxuICB6LWluZGV4OiA3MDsgfVxcblxcbi5pbmZvLWJveC5uZXcge1xcbiAgYW5pbWF0aW9uOiBzbGlkZS1kd24gMXMgZm9yd2FyZHM7IH1cXG5cXG4uaW5mby1ib3gub2xkIHtcXG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMXMgZm9yd2FyZHM7IH1cXG5cXG4uaW5mby1ib3gubmV3LmZhc3Qge1xcbiAgYW5pbWF0aW9uOiBzbGlkZS1kd24gLjI1cyBmb3J3YXJkczsgfVxcblxcbi5pbmZvLWJveC5vbGQuZmFzdCB7XFxuICBhbmltYXRpb246IHNsaWRlLXVwIC4yNXMgZm9yd2FyZHM7IH1cXG5cXG4uaW5mby1ib3ggaDMge1xcbiAgZm9udC1zaXplOiAuN3JlbTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG4uZGVzY3ItdHh0IHtcXG4gIGZvbnQtc2l6ZTogLjg1cmVtOyB9XFxuXFxuQGtleWZyYW1lcyBzbGlkZS11cCB7XFxuICAwJSB7XFxuICAgIGhlaWdodDogMzZweDsgfVxcbiAgMTAwJSB7XFxuICAgIGhlaWdodDogMHB4OyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLWR3biB7XFxuICAwJSB7XFxuICAgIGhlaWdodDogMHB4OyB9XFxuICAxMDAlIHtcXG4gICAgaGVpZ2h0OiAzNnB4OyB9IH1cXG5cXG4ubm90ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IDVweDtcXG4gIG1pbi1oZWlnaHQ6IDMwcHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkOyB9XFxuXFxuLmRlbC1jb21tZW50IHtcXG4gIGZsb2F0OiByaWdodDsgfVxcblxcbi5kZWwtY29tbWVudDpob3ZlciB7XFxuICBjb2xvcjogcmdiYSgyMiwgMjIsIDIyLCAwLjUxKTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNzUpOyB9XFxuXFxuLmNvbW1lbnQtaW5wdXQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uY29tbWVudC1pbnB1dCBpbnB1dCB7XFxuICB3aWR0aDogNjAlOyB9XFxuXFxuLmNvbW1lbnQtc2VjdGlvbiB7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBoZWlnaHQ6IDYwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1JSAyNSUgMjUlIDI1JTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyB9XFxuXFxuLm5vdGU6aG92ZXIgLmNvbW1lbnQtdGltZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IGdyYXk7IH1cXG5cXG4ubm90ZTpob3ZlciB7XFxuICBjb2xvcjogZ3JheTsgfVxcblxcbi5ub3RlOmhvdmVyIGkge1xcbiAgY29sb3I6ICM0ZDRkNGQ7IH1cXG5cXG4ubm90ZTpob3ZlciBpOmhvdmVyIHtcXG4gIGNvbG9yOiBibGFjazsgfVxcblxcbi5jb21tZW50LXRpbWUge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICBmb250LXNpemU6IC41NXJlbTtcXG4gIGJvdHRvbTogLTEwcHg7XFxuICBjb2xvcjogcmdiYSgyOCwgMTAwLCAyNTUsIDAuODc2KTsgfVxcblxcbi5tYWtlLW5ldy10b2RvcyBpbnB1dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDIxKTtcXG4gIG91dGxpbmU6IDBweDtcXG4gIGJvcmRlcjogMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrOyB9XFxuXFxuLm1ha2UtbmV3LXRvZG9zIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi5zaWRlLWJhci10aXRsZXMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLmJhci10aXRsZSB7XFxuICBjb2xvcjogV2hpdGU7XFxuICBtYXJnaW46IDUlIDE1JTtcXG4gIHdpZHRoOiA3MCU7XFxuICBjdXJzb3I6IGRlZmF1bHQ7IH1cXG5cXG4uYmFyLXRpdGxlID4gKiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tbGVmdDogNSU7IH1cXG5cXG4uYmFyLXRpdGxlLnNlbCB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAycHggcmdiYSgwLCAxNTcsIDI1NSwgMC45MDMpO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAycHggd2hpdGU7IH1cXG5cXG4uYmFyLXRpdGxlLnVuc2VsOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIGNvbG9yOiByZ2JhKDAsIDE1NywgMjU1LCAwLjkwMyk7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4uYmFyLXRpdGxlOmhvdmVyIGk6aG92ZXIge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC42NTUpOyB9XFxuXFxuLm1ha2UtbmV3LXRvZG9zIGlucHV0IHtcXG4gIG1heC13aWR0aDogNjAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMTAlOyB9XFxuXFxuLnNsaWRlLWluMSAubWFrZS1uZXctdG9kb3MsXFxuLnNsaWRlLWluMSAuc2lkZS1iYXItdGl0bGVzIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjsgfVxcblxcbi5tYWtlLW5ldy10b2RvcyBpIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxcHg7XFxuICB0b3A6IDMwJTtcXG4gIGNvbG9yOiB3aGl0ZTsgfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICA6cm9vdCB7XFxuICAgIC0tc2lkZS1iYXItd2lkdGg6IG1heCgxNTBweCwgMTAlKTsgfVxcbiAgLnRvZG8tZWxlLXdyYXBwZXIge1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBtYXJnaW46IDVweCAyLjUlOyB9XFxuICAudG9kby1uYW1lIHtcXG4gICAgbWF4LXdpZHRoOiAzNSU7IH1cXG4gIC5jcmVhdGUtbmV3LXRvZG8ge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgbWFyZ2luOiA1cHggMTAlOyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xcbiAgLnRvZG8tZWxlLXdyYXBwZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiA1cHggMCU7IH1cXG4gIC50b2RvLWFyZWEgLnRvZG8tbmFtZSB7XFxuICAgIG1heC13aWR0aDogMjUlOyB9XFxuICAuY3JlYXRlLW5ldy10b2RvIHtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgbWFyZ2luOiBhdXRvIDIuNSU7IH0gfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxpQ0FBaUIsRUFBQTs7QUFJckI7RUFDSSwyQkFBMkI7RUFDM0IsZUFBZSxFQUFBOztBQUNmO0VBQ0k7SUFDSSxpQ0FBaUMsRUFBQTtFQUVyQztJQUNJLG1DQUFtQyxFQUFBO0VBRXZDO0lBQ0ksbUNBQW1DLEVBQUEsRUFBQTs7QUFLL0M7O0VBRUksVUFBVTtFQUNWLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFFWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksZ0JBQWdCO0VBQ2hCLG1EQUFtRCxFQUFBOztBQUd2RDtFQUNJLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsYUFBYSxFQUFBOztBQUdqQjtFQUVJLGFBQWEsRUFBQTs7QUFHakI7RUFDSSx5QkFBb0M7RUFDcEMsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSx5QkFBb0M7RUFDcEMsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxrRkFBa0YsRUFBQTs7QUFHdEY7RUFDSSxpQ0FBaUMsRUFBQTs7QUFHckM7RUFDSSxrQ0FBa0M7RUFDbEMseUJBQW9DLEVBQUE7O0FBR3hDO0VBQ0ksa0NBQWtDLEVBQUE7O0FBR3RDO0VBQ0ksbUNBQW1DLEVBQUE7O0FBR3ZDO0VBQ0k7SUFDSSxXQUFXLEVBQUE7RUFFZjtJQUNJLFVBQ0osRUFBQTtFQUNBO0lBQ0ksVUFDSixFQUFBLEVBQUE7O0FBR0o7RUFDSTtJQUNJ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LDhCQUE4QixFQUFBOztBQUdsQztFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFlBQVk7RUFDWixjQUFjO0VBQ2QsVUFBVTtFQUNWLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxxQkFBcUI7RUFDckIsZUFBZSxFQUFBOztBQUduQjtFQUNJLHFCQUFxQjtFQUNyQix1REFBdUQ7RUFDdkQsNkJBQTZCLEVBQUE7O0FBR2pDO0VBQ0kscUJBQXFCO0VBQ3JCLCtCQUErQjtFQUMvQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksWUFBWTtFQUNaLDZDQUE2QyxFQUFBOztBQUdqRDtFQUNJLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTs7QUFHdEI7O0VBRUksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0VBQ1IsWUFBWSxFQUFBOztBQUdoQjtFQUNLO0lBQ0csaUNBQWlCLEVBQUE7RUFFckI7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCLEVBQUE7RUFFcEI7SUFDSSxjQUFjLEVBQUE7RUFFbEI7SUFDSSxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGVBQWUsRUFBQSxFQUNsQjs7QUFHTDtFQUNJO0lBQ0ksV0FBVztJQUNYLGNBQWMsRUFBQTtFQUVsQjtJQUNJLGNBQWMsRUFBQTtFQUVsQjtJQUNJLFVBQVU7SUFDVixpQkFBaUIsRUFBQSxFQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAgIC0tc2lkZS1iYXItd2lkdGg6IG1heCgyMDBweCwgMTUlKTtcXHJcXG59XFxyXFxuXFxyXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwLWljb25zQDEuNS4wL2ZvbnQvYm9vdHN0cmFwLWljb25zLmNzc1xcXCIpO1xcclxcbiN0ZXN0LWltZy0wMDAxIHtcXHJcXG4gICAgYW5pbWF0aW9uOiBzcGluIDNzIGluZmluaXRlO1xcclxcbiAgICBtYXJnaW46IDI1JSA1MCU7XFxyXFxuICAgIEBrZXlmcmFtZXMgc3BpbiB7XFxyXFxuICAgICAgICAwJSB7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpIHNjYWxlKDEpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgNTAlIHtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMTgwZGVnKSBzY2FsZSgyKVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgMTAwJSB7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDM2MGRlZykgc2NhbGUoMSlcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5ib2R5LFxcclxcbmh0bWwge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgJHc6IDEwJTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgbWluLXdpZHRoOiAyNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tbW9kdWxlIGxhYmVsIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMTYyLCAxNjEsIDE2MSwgMC42NjkpO1xcclxcbn1cXHJcXG5cXHJcXG4jbWFpbi13cmFwcGVyIHtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1MHB4KTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5OjphZnRlciB7XFxyXFxuICAgIC8vIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAlIGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA1LCAxNzksIDIyNCk7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZS1iYXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc2LCAyMTUsIDIyNCk7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IHZhcigtLXNpZGUtYmFyLXdpZHRoKTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB0ZXh0LW92ZXJmbG93OiBjbGlwO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50ZXN0IHtcXHJcXG4gICAgYW5pbWF0aW9uOiBuYW1lIGR1cmF0aW9uIHRpbWluZy1mdW5jdGlvbiBkZWxheSBpdGVyYXRpb24tY291bnQgZGlyZWN0aW9uIGZpbGwtbW9kZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlLWluMSB7XFxyXFxuICAgIGFuaW1hdGlvbjogc2xpZGUtaW4gLjY1cyBmb3J3YXJkcztcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlLW91dDEge1xcclxcbiAgICBhbmltYXRpb246IHNsaWRlLW91dCAuODVzIGZvcndhcmRzO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEzLCAxNzksIDIzNik7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZS1pbjIge1xcclxcbiAgICBhbmltYXRpb246IHNsaWRlLWluMiAuNjVzIGZvcndhcmRzO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGUtb3V0MiB7XFxyXFxuICAgIGFuaW1hdGlvbjogc2xpZGUtb3V0MiAuODVzIGZvcndhcmRzO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNsaWRlLWluMiB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuICAgIDUwJSB7XFxyXFxuICAgICAgICB3aWR0aDogOTAlXFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgICB3aWR0aDogOTAlXFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzbGlkZS1vdXQyIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgICAgd2lkdGg6IDkwJVxcclxcbiAgICB9XFxyXFxuICAgIDUwJSB7XFxyXFxuICAgICAgICB3aWR0aDogOTAlXFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2xpZGUtaW4ge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgICB3aWR0aDogdmFyKC0tc2lkZS1iYXItd2lkdGgpO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgICAgd2lkdGg6IDAlXFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzbGlkZS1vdXQge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgICB3aWR0aDogMCVcXHJcXG4gICAgfVxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICAgIHdpZHRoOiB2YXIoLS1zaWRlLWJhci13aWR0aCk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICBmbGV4LWdyb3c6IDI7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDI1JTtcXHJcXG4gICAgbWFyZ2luOiAwIDM3LjUlO1xcclxcbiAgICBwYWRkaW5nOiA1cHhcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIGlucHV0OnJlYWQtb25seSB7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAxcHggMXB4IHJnYmEoOCwgOCwgOCwgMC4zMjQpO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIGkge1xcclxcbiAgICBmb250LXNpemU6IC43cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgY29sb3I6IGJsdWU7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUgaW5wdXQ6cmVhZC1vbmx5OjpwbGFjZWhvbGRlciB7XFxyXFxuICAgIGNvbG9yOiBncmVlbjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1hcmVhIHtcXHJcXG4gICAgbWF4LWhlaWdodDogODB2aDtcXHJcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1saXN0IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1lbGUtaW5uZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjEwLCAyMTAsIDIxMCwgMC4yODMpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1lbGUge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNTI0KTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MzQpO1xcclxcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5ub3QtY2hlY2tlZCB7XFxyXFxuICAgIC8vIGFuaW1hdGlvbjogZ3JvdyAxcyBmb3J3YXJkcztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBncm93IHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgICAgaGVpZ2h0OiAyLjVweDtcXHJcXG4gICAgfVxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICAgIGhlaWdodDogNDVweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tlZC1vZmYgLnRvZG8tZWxlIHtcXHJcXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjcsIDE2OSwgMTY4LCAwLjE5Mik7XFxyXFxuICAgIC8vIGFuaW1hdGlvbjogc2hyaW5rIDFzIGZvcndhcmRzO1xcclxcbiAgICAvLyBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2VkLW9mZiAudG9kby1lbGUge1xcclxcbiAgICBoZWlnaHQ6IDExcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wODMpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1lbGUtd3JhcHBlci5jaGVja2VkLW9mZiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDAlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2VkLW9mZiAudG9kby1lbGUtaW5uZXIge1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2hyaW5rIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgICAgaGVpZ2h0OiAyLjVweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tlZC1vZmYgLmJhbm5lciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUsIDEwNCwgMTg3LCAwLjU3Nik7XFxyXFxuICAgIGhlaWdodDogMTFweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXN0cmV0Y2g6IHdpZGVyO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBmb250LXNpemU6IC43cmVtO1xcclxcbiAgICBjb2xvcjogd2hpdGVcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrZWQtb2ZmIC5iYW5uZXI6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2VkLW9mZiBpbnB1dCB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tlZC1vZmYgLnRvZG8tZWxlLWlubmVyIHt9XFxyXFxuXFxyXFxuLnRvZG8tZWxlLXdyYXBwZXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIG1hcmdpbjogMTBweCAxMCU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWVsZTpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMDUpO1xcclxcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZWxlIC5kZXNjciBpbnB1dCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjdyZW07XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGUtbmV3LXRvZG8gaW5wdXQge1xcclxcbiAgICBvdXRsaW5lOiAwcHg7XFxyXFxuICAgIGJvcmRlcjogMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBmb250LXNpemU6IC43cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDJweDtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBtYXgtd2lkdGg6IDc1JTtcXHJcXG4gICAgd2lkdGg6IDMwJTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1hcmVhIC50b2RvLW5hbWUgaW5wdXQge1xcclxcbiAgICBvdXRsaW5lOiAwcHg7XFxyXFxuICAgIGJvcmRlcjogMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBmb250LXNpemU6IC43cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDJweDtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBtYXgtd2lkdGg6IDc1JTtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRnLXR4dCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRnLXR4dCBpIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGUtZG93biB7XFxyXFxuICAgIHRyYW5zaXRpb246IGhlaWdodCAuNXM7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrIHtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIGNvbG9yOiBibHVlO1xcclxcbn1cXHJcXG5cXHJcXG4uYmksXFxyXFxuLmNoZWNrIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGctdHh0IGlucHV0OnJlYWQtb25seSB7XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbmFtZSBpIHtcXHJcXG4gICAgZm9udC1zaXplOiAuNnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tYXJlYSAudG9kby1uYW1lIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBmbGV4LWdyb3c6IDI7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSBoMyB7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGctdHh0OmFmdGVyIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUudG9kb3Mge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBtYXJnaW46IGF1dG8gMi41JTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlLnRvZG9zIGlucHV0IHtcXHJcXG4gICAgb3V0bGluZTogMHB4O1xcclxcbiAgICBib3JkZXI6IDBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IC44NXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1hcmVhIC50aXRsZSBpbnB1dCB7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxuICAgIG91dGxpbmU6IDBweDtcXHJcXG4gICAgYm9yZGVyOiAwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAuODVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDMwcHg7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYmFubmVyIHtcXHJcXG4gICAgaGVpZ2h0OiA4cHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk4LCAxOTgsIDE5OCk7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTAwcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRyb2xzIHtcXHJcXG4gICAgZmxleC1zaHJpbms6IDEuNTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udHJvbHMgLmJpIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhdHMsXFxyXFxuLmNvbnRyb2xzLFxcclxcbi5jb250cm9scz4qIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhdHMge1xcclxcbiAgICBmbGV4LWdyb3c6IDI7XFxyXFxufVxcclxcblxcclxcbi5zdGF0cz4qIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRlLW5ldy10b2RvIHtcXHJcXG4gICAgd2lkdGg6IDY2JTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIG1hcmdpbjogNXB4IDE2LjY2NjYlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHVzaC1uZXcge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzQsIDIzNCwgMjM0KTtcXHJcXG4gICAgZm9udC1zaXplOiAuOHJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcGFkZGluZzogM3B4IDhweCAzcHggOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHVzaC1uZXc6aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDE1KTtcXHJcXG4gICAgY29sb3I6IHJnYmEoMjYsIDE3MiwgMjM0LCAwLjQ0OCk7XFxyXFxufVxcclxcblxcclxcbmkub3Blbi1mb3JtIHtcXHJcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tbW9kdWxlIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB6LWluZGV4OiA2MDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjksIDIyOSwgMjI5LCAwLjcxKTtcXHJcXG4gICAgdG9wOiAwJTtcXHJcXG4gICAgbGVmdDogMCU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLW1vZHVsZSAuY29udGVudCB7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGhlaWdodDogODAlO1xcclxcbiAgICBtYXJnaW46IDEwJSAxMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggYmxhY2s7XFxyXFxuICAgIHotaW5kZXg6IDY1O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmR1ZS1kYXRlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0LCAyNTUsIDI5LCAwLjU1OCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMTM4LCAxMzgsIDEzOCwgMC43MTcpO1xcclxcbiAgICBmb250LXNpemU6IC41NXJlbTtcXHJcXG4gICAgcGFkZGluZzogM3B4O1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5kdWUtZGF0ZTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0LCAyNTUsIDI5KTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2x0aXAge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcwNSk7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gICAgcGFkZGluZzogMnB4IDA7XFxyXFxuICAgIHRvcDogLTIwcHg7XFxyXFxuICAgIGxlZnQ6IDIwcHg7XFxyXFxuICAgIC8qIFBvc2l0aW9uIHRoZSB0b29sdGlwICovXFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gICAgZm9udC1zaXplOiAuNnJlbTtcXHJcXG4gICAgei1pbmRleDogMjAwMDAwO1xcclxcbiAgICBvcGFjaXR5OiAuOTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcblxcclxcbi5zdGF0cyB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbHRpcDpob3ZlciB7XFxyXFxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDJweCByZ2IoMTExLCAxMTEsIDExMSk7XFxyXFxufVxcclxcblxcclxcbi5kZXNjci1idG4ge31cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIDJmcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBkaXYge1xcclxcbiAgICBtYXJnaW46IDIlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idG4tZGl2IHtcXHJcXG4gICAgd2lkdGg6IDIwMCU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idG4tZGl2IGJ1dHRvbiB7XFxyXFxuICAgIGJvcmRlcjogMHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCByZ2IoMTMyLCAxMzAsIDEzMCk7XFxyXFxuICAgIHBhZGRpbmc6IDElO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWRpdiBidXR0b246aG92ZXIge1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDRweCByZ2IoMTMyLCAxMzAsIDEzMCk7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1tb2R1bGUgZGl2IGlucHV0LFxcclxcbi5mb3JtLW1vZHVsZSBkaXYgdGV4dGFyZWEge1xcclxcbiAgICBib3JkZXI6IDBweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMSwgMjMxLCAyMzEsIDAuNDI3KTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tbW9kdWxlIGRpdiBpbnB1dDo6c2VsZWN0aW9uLFxcclxcbi5mb3JtLW1vZHVsZSBkaXYgdGV4dGFyZWE6OnNlbGVjdGlvbixcXHJcXG4uZm9ybS1tb2R1bGUgZGl2IGlucHV0OmZvY3VzLFxcclxcbi5mb3JtLW1vZHVsZSBkaXYgdGV4dGFyZWE6Zm9jdXMge1xcclxcbiAgICBib3JkZXI6IDBweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYig5NCwgMTQ5LCAyMDcpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMSwgMjMxLCAyMzEsIDAuNTM4KTtcXHJcXG4gICAgb3V0bGluZTogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jZGVzY3JpcHRpb24ge1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5pbmZvLWJveCB7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM2LCAyMzYsIDIzNiwgMC42NDgpO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXRvcDogMHB4O1xcclxcbiAgICBib3JkZXItbGVmdDogMHB4O1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDBweDtcXHJcXG4gICAgei1pbmRleDogNzA7XFxyXFxufVxcclxcblxcclxcbi5pbmZvLWJveC5uZXcge1xcclxcbiAgICBhbmltYXRpb246IHNsaWRlLWR3biAxcyBmb3J3YXJkcztcXHJcXG59XFxyXFxuXFxyXFxuLmluZm8tYm94Lm9sZCB7XFxyXFxuICAgIGFuaW1hdGlvbjogc2xpZGUtdXAgMXMgZm9yd2FyZHM7XFxyXFxufVxcclxcblxcclxcbi5pbmZvLWJveC5uZXcuZmFzdCB7XFxyXFxuICAgIGFuaW1hdGlvbjogc2xpZGUtZHduIC4yNXMgZm9yd2FyZHM7XFxyXFxufVxcclxcblxcclxcbi5pbmZvLWJveC5vbGQuZmFzdCB7XFxyXFxuICAgIGFuaW1hdGlvbjogc2xpZGUtdXAgLjI1cyBmb3J3YXJkcztcXHJcXG59XFxyXFxuXFxyXFxuLmluZm8tYm94IGgzIHtcXHJcXG4gICAgZm9udC1zaXplOiAuN3JlbTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3ItdHh0IHtcXHJcXG4gICAgZm9udC1zaXplOiAuODVyZW07XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2xpZGUtdXAge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDM2cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNsaWRlLWR3biB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICAgIGhlaWdodDogMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5ub3RlIHtcXHJcXG4gICAgLy9tYXgtd2lkdGg6NTAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAyNDEsIDI0MSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBtYXJnaW46IDVweDtcXHJcXG4gICAgLy9AZXh0ZW5kOjI1JTtcXHJcXG4gICAgbWluLWhlaWdodDogMzBweDtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBwYWRkaW5nOiA4cHg7XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbC1jb21tZW50IHtcXHJcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsLWNvbW1lbnQ6aG92ZXIge1xcclxcbiAgICBjb2xvcjogcmdiYSgyMiwgMjIsIDIyLCAwLjUxKTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA3NSk7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWlucHV0IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1pbnB1dCBpbnB1dCB7XFxyXFxuICAgIHdpZHRoOiA2MCVcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtc2VjdGlvbiB7XFxyXFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gICAgaGVpZ2h0OiA2MCU7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUlIDI1JSAyNSUgMjUlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLm5vdGU6aG92ZXIgLmNvbW1lbnQtdGltZSB7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4ubm90ZTpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiBncmF5XFxyXFxufVxcclxcblxcclxcbi5ub3RlOmhvdmVyIGkge1xcclxcbiAgICBjb2xvcjogcmdiKDc3LCA3NywgNzcpO1xcclxcbn1cXHJcXG5cXHJcXG4ubm90ZTpob3ZlciBpOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtdGltZSB7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgZm9udC1zaXplOiAuNTVyZW07XFxyXFxuICAgIGJvdHRvbTogLTEwcHg7XFxyXFxuICAgIGNvbG9yOiByZ2JhKDI4LCAxMDAsIDI1NSwgMC44NzYpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFrZS1uZXctdG9kb3MgaW5wdXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDIxKTtcXHJcXG4gICAgb3V0bGluZTogMHB4O1xcclxcbiAgICBib3JkZXI6IDBweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFrZS1uZXctdG9kb3Mge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5zaWRlLWJhci10aXRsZXMge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5iYXItdGl0bGUge1xcclxcbiAgICBjb2xvcjogV2hpdGU7XFxyXFxuICAgIG1hcmdpbjogNSUgMTUlO1xcclxcbiAgICB3aWR0aDogNzAlO1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcblxcclxcbi5iYXItdGl0bGU+KiB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFyLXRpdGxlLnNlbCB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgMnB4IHJnYmEoMCwgMTU3LCAyNTUsIDAuOTAzKTtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5iYXItdGl0bGUudW5zZWw6aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICAgIGNvbG9yOiByZ2JhKDAsIDE1NywgMjU1LCAwLjkwMyk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJhci10aXRsZTpob3ZlciBpOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjY1NSk7XFxyXFxufVxcclxcblxcclxcbi5tYWtlLW5ldy10b2RvcyBpbnB1dCB7XFxyXFxuICAgIG1heC13aWR0aDogNjAlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZS1pbjEgLm1ha2UtbmV3LXRvZG9zLFxcclxcbi5zbGlkZS1pbjEgLnNpZGUtYmFyLXRpdGxlcyB7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLm1ha2UtbmV3LXRvZG9zIGkge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAxcHg7XFxyXFxuICAgIHRvcDogMzAlO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ODAwcHgpIHtcXHJcXG4gICAgIDpyb290IHtcXHJcXG4gICAgICAgIC0tc2lkZS1iYXItd2lkdGg6IG1heCgxNTBweCwgMTAlKTtcXHJcXG4gICAgfVxcclxcbiAgICAudG9kby1lbGUtd3JhcHBlciB7XFxyXFxuICAgICAgICB3aWR0aDogOTUlO1xcclxcbiAgICAgICAgbWFyZ2luOiA1cHggMi41JTtcXHJcXG4gICAgfVxcclxcbiAgICAudG9kby1uYW1lIHtcXHJcXG4gICAgICAgIG1heC13aWR0aDogMzUlO1xcclxcbiAgICB9XFxyXFxuICAgIC5jcmVhdGUtbmV3LXRvZG8ge1xcclxcbiAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICAgICAgbWFyZ2luOiA1cHggMTAlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzIwcHgpIHtcXHJcXG4gICAgLnRvZG8tZWxlLXdyYXBwZXIge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBtYXJnaW46IDVweCAwJTtcXHJcXG4gICAgfVxcclxcbiAgICAudG9kby1hcmVhIC50b2RvLW5hbWUge1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAyNSU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmNyZWF0ZS1uZXctdG9kbyB7XFxyXFxuICAgICAgICB3aWR0aDogOTUlO1xcclxcbiAgICAgICAgbWFyZ2luOiBhdXRvIDIuNSU7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBnZXRUYXJnZXQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRUYXJnZXQuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gZnVuY3Rpb24oY3NzLCBzdHlsZSl7XG4gICAgICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICAgIH1cbiAgfTtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IGZ1bmN0aW9uKHN0eWxlKSB7XG4gICAgICAgIHZhciBub25jZSA9XG4gICAgICAgICAgdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgICAgIGlmIChub25jZSkge1xuICAgICAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oc3R5bGUpe1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoXCJoZWFkXCIpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCJcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFRhcmdldDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBfX3NwcmVhZEFycmF5ID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5KSB8fCBmdW5jdGlvbiAodG8sIGZyb20pIHtcclxuICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IGZyb20ubGVuZ3RoLCBqID0gdG8ubGVuZ3RoOyBpIDwgaWw7IGkrKywgaisrKVxyXG4gICAgICAgIHRvW2pdID0gZnJvbVtpXTtcclxuICAgIHJldHVybiB0bztcclxufTtcclxuaW1wb3J0ICcuL2Nzcy9zdHlsZXMuc2Nzcyc7XHJcbi8vIGltcG9ydCBpbWcxIGZyb20gXCIuL2Fzc2V0cy9pbWFnZXMvdGVzdC5wbmdcIlxyXG4vLyBsZXQgaW1hZ2U6SFRNTEltYWdlRWxlbWVudCA9IG5ldyBJbWFnZSgpO1xyXG4vLyBpbWFnZS5zcmMgPSBpbWcxO1xyXG4vLyBpbWFnZS5pZCA9IFwidGVzdC1pbWctMDAwMVwiXHJcbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG52YXIgaGVhZGVyID0gbWFrZUh0bWxFbGVtZW50KFwiZGl2XCIsIGRvY3VtZW50LmJvZHksIHsgaWQ6IFwiaGVhZGVyXCIgfSk7XHJcbnZhciB3cmFwcGVyID0gbWFrZUh0bWxFbGVtZW50KFwiZGl2XCIsIGRvY3VtZW50LmJvZHksIHsgaWQ6IFwibWFpbi13cmFwcGVyXCIgfSk7XHJcbnZhciBzaWRlYmFyID0gbWFrZUh0bWxFbGVtZW50KFwiZGl2XCIsIHdyYXBwZXIsIHsgaWQ6IFwic2lkZS1iYXJcIiB9KTtcclxudmFyIGNvbnRlbnQgPSBtYWtlSHRtbEVsZW1lbnQoXCJkaXZcIiwgd3JhcHBlciwgeyBpZDogXCJjb250ZW50XCIgfSk7XHJcbnZhciBzaWRlYmFyVG9nZ2xlID0gbWFrZUh0bWxFbGVtZW50KFwiaVwiLCBoZWFkZXIsIHsgY2xhc3NlczogXCJiaSBiaS1saXN0XCIgfSk7XHJcbnNpZGViYXJUb2dnbGUub25jbGljayA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICBpZiAoc2lkZWJhci5jbGFzc0xpc3QuY29udGFpbnMoXCJzbGlkZS1pbjFcIikpIHtcclxuICAgICAgICBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJzbGlkZS1pbjFcIik7XHJcbiAgICAgICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKFwic2xpZGUtb3V0MVwiKTtcclxuICAgICAgICAvLyBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzbGlkZS1vdXQyXCIpXHJcbiAgICAgICAgLy8gY29udGVudC5jbGFzc0xpc3QuYWRkKFwic2xpZGUtaW4yXCIpXHJcbiAgICAgICAgLy9jb250ZW50LnN0eWxlLndpZHRoID0gXCI5MCVcIjtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZShcInNsaWRlLW91dDFcIik7XHJcbiAgICAgICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKFwic2xpZGUtaW4xXCIpO1xyXG4gICAgICAgIC8vIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZShcInNsaWRlLWluMlwiKVxyXG4gICAgICAgIC8vIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcInNsaWRlLW91dDJcIilcclxuICAgICAgICAvLyBjb250ZW50LnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICB9XHJcbn07XHJcbmZ1bmN0aW9uIG1ha2VIdG1sRWxlbWVudChlbGVUeXBlLCBlbGVTb3VyY2UsIG9wdGlvbikge1xyXG4gICAgaWYgKGVsZVNvdXJjZSA9PT0gdm9pZCAwKSB7IGVsZVNvdXJjZSA9IG51bGw7IH1cclxuICAgIGlmIChvcHRpb24gPT09IHZvaWQgMCkgeyBvcHRpb24gPSB7fTsgfVxyXG4gICAgdmFyIG5ld0VsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlVHlwZSk7XHJcbiAgICBpZiAob3B0aW9uLmlkKSB7XHJcbiAgICAgICAgbmV3RWxlLmlkID0gb3B0aW9uLmlkO1xyXG4gICAgfVxyXG4gICAgaWYgKG9wdGlvbi5jbGFzc2VzKSB7XHJcbiAgICAgICAgb3B0aW9uLmNsYXNzZXMuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIGlmIChjaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgbmV3RWxlLmNsYXNzTGlzdC5hZGQoY2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICA7XHJcbiAgICBpZiAob3B0aW9uLnRleHQpIHtcclxuICAgICAgICBuZXdFbGUuaW5uZXJUZXh0ID0gb3B0aW9uLnRleHQ7XHJcbiAgICB9XHJcbiAgICBpZiAob3B0aW9uLmNsaWNrKSB7XHJcbiAgICAgICAgbmV3RWxlLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBvcHRpb24uY2xpY2soKTsgfTtcclxuICAgIH1cclxuICAgIGlmIChvcHRpb24uaG92ZXIpIHtcclxuICAgICAgICBuZXdFbGUub25tb3VzZW92ZXIgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBvcHRpb24uaG92ZXIoKTsgfTtcclxuICAgIH1cclxuICAgIGlmIChvcHRpb24ubGlzdGVuZXJzKSB7XHJcbiAgICAgICAgb3B0aW9uLmxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkgeyBpZiAoZWwpIHtcclxuICAgICAgICAgICAgbmV3RWxlLmFkZEV2ZW50TGlzdGVuZXIoZWwudHlwZSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gZWwuZnVuYygpOyB9KTtcclxuICAgICAgICB9IH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKG9wdGlvbi5jaGlsZHJlbikge1xyXG4gICAgICAgIG9wdGlvbi5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gbWFrZUh0bWxFbGVtZW50KGNoaWxkWzBdLCBuZXdFbGUsIGNoaWxkWzFdKTsgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAob3B0aW9uLm5hbWUpIHtcclxuICAgICAgICBuZXdFbGUubmFtZSA9IG9wdGlvbi5uYW1lO1xyXG4gICAgfVxyXG4gICAgaWYgKG9wdGlvbi50eXBlKSB7XHJcbiAgICAgICAgbmV3RWxlLnR5cGUgPSBvcHRpb24udHlwZTtcclxuICAgIH1cclxuICAgIGlmIChvcHRpb24ucGxhY2Vob2xkZXIpIHtcclxuICAgICAgICBuZXdFbGUucGxhY2Vob2xkZXIgPSBvcHRpb24ucGxhY2Vob2xkZXI7XHJcbiAgICB9XHJcbiAgICBpZiAob3B0aW9uLnJlYWRPbmx5KVxyXG4gICAgICAgIChuZXdFbGUucmVhZE9ubHkgPSBvcHRpb24ucmVhZE9ubHkpO1xyXG4gICAgaWYgKG9wdGlvbi52YWx1ZSlcclxuICAgICAgICAobmV3RWxlLnZhbHVlID0gb3B0aW9uLnZhbHVlKTtcclxuICAgIC8vaWYgKG9wdGlvbi5kaXNhYmxlZCkobmV3RWxlLmRpc2FibGVkID0gb3B0aW9uLmRpc2FibGVkKVxyXG4gICAgaWYgKGVsZVNvdXJjZSkge1xyXG4gICAgICAgIGVsZVNvdXJjZS5hcHBlbmRDaGlsZChuZXdFbGUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ld0VsZTtcclxufVxyXG5mdW5jdGlvbiBnZXRUb2RvcyhpZCkge1xyXG4gICAgcmV0dXJuIGFsbFRvZG9zLmZpbHRlcihmdW5jdGlvbiAodG9kb3MpIHsgcmV0dXJuIHRvZG9zLmdldElkKCkgPT09IGlkOyB9KVswXTtcclxufVxyXG5mdW5jdGlvbiBjaGFuZ2VUZXh0KGlkLCB0YXJnZXQpIHtcclxuICAgIHZhciB0b2RvcyA9IGdldFRvZG9zKGlkKTtcclxuICAgIHRvZG9zLnNldE5hbWUodGFyZ2V0LnZhbHVlKTtcclxuICAgIHRhcmdldC5yZWFkT25seSA9IGZhbHNlO1xyXG4gICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkgeyByZXR1cm4gY2hhbmdlVGV4dChpZCwgdGFyZ2V0KTsgfSk7XHJcbn1cclxuZnVuY3Rpb24gbmV3VG9kb05hbWVUZXh0KGlkKSB7XHJcbiAgICB2YXIgbmV3SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlY3Rpb24tXCIgKyBpZCArIFwiIC5tYWtlLW5ldyAuY3JlYXRlLW5ldy10b2RvIGlucHV0XCIpO1xyXG4gICAgaWYgKCFuZXdJbnB1dC52YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBuZXdJbnB1dC5wbGFjZWhvbGRlcjtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXdJbnB1dC52YWx1ZTtcclxufVxyXG5mdW5jdGlvbiByZXNldE5ld1RvZG9OYW1lVGV4dChpZCkge1xyXG4gICAgdmFyIG5ld0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWN0aW9uLVwiICsgaWQgKyBcIiAubWFrZS1uZXcgLmNyZWF0ZS1uZXctdG9kbyBpbnB1dFwiKTtcclxuICAgIG5ld0lucHV0LnZhbHVlID0gXCJcIjtcclxufVxyXG5mdW5jdGlvbiBhZGROZXdUb0RvKHRvZG9zKSB7XHJcbiAgICB2YXIgdG9kb05hbWUgPSBuZXdUb2RvTmFtZVRleHQodG9kb3MuZ2V0SWQoKSk7XHJcbiAgICByZXNldE5ld1RvZG9OYW1lVGV4dCh0b2Rvcy5nZXRJZCgpKTtcclxuICAgIHZhciBuZXdUb2RvID0gbmV3IHRvZG8odG9kb05hbWUpO1xyXG4gICAgdG9kb3MuYWRkKG5ld1RvZG8pO1xyXG4gICAgY3JlYXRlVG9kbyhuZXdUb2RvLCB0b2Rvcyk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFsbFRvZG9zXCIsIEpTT04uc3RyaW5naWZ5KGFsbFRvZG9zKSk7XHJcbn1cclxuZnVuY3Rpb24gZHJhd01ha2VOZXcodG9kb3MpIHtcclxuICAgIHZhciBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWN0aW9uLVwiICsgdG9kb3MuZ2V0SWQoKSArIFwiIC5tYWtlLW5ld1wiKTtcclxuICAgIHZhciBjcmVhdGVCb3ggPSBtYWtlSHRtbEVsZW1lbnQoXCJkaXZcIiwgc2VjdGlvbiwgeyBjbGFzc2VzOiBcImNyZWF0ZS1uZXctdG9kbyBjb250YWluZXIgXCIgfSk7XHJcbiAgICAvL2xldCBmYXN0Q3JlYXRlID0gbWFrZVRvZ2dhYmxlVGV4dEJveChcIm5ldyB0b2RvXCIsXCJmYXN0Q3JlYXRlLVwiK3RvZG9zLmdldElkKCksY3JlYXRlQm94LFwidG9kby1uYW1lXCIpO1xyXG4gICAgdmFyIGZhc3RDcmVhdGUgPSBtYWtlSHRtbEVsZW1lbnQoXCJpbnB1dFwiLCBjcmVhdGVCb3gsIHsgcGxhY2Vob2xkZXI6IFwibmV3IHRvZG9cIiwgdmFsdWU6IFwibmV3IHRvZG8gdGl0bGVcIiwgY2xhc3NlczogXCJ0aXRsZVwiIH0pO1xyXG4gICAgdmFyIHB1c2ggPSBtYWtlSHRtbEVsZW1lbnQoXCJpXCIsIGNyZWF0ZUJveCwgeyBjbGFzc2VzOiBcInB1c2gtbmV3IFwiLCB0ZXh0OiBcInF1aWNrIGNyZWF0ZVwiIH0pO1xyXG4gICAgcHVzaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBhZGROZXdUb0RvKHRvZG9zKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICB9LCB0cnVlKTtcclxuICAgIGZhc3RDcmVhdGUuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKGUua2V5ICE9PSBcIkVudGVyXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhZGROZXdUb0RvKHRvZG9zKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICB9LCB0cnVlKTtcclxuICAgIHZhciBjcmVhdGVGb3JtQnRuID0gbWFrZUh0bWxFbGVtZW50KFwiaVwiLCBjcmVhdGVCb3gsIHsgY2xhc3NlczogXCJvcGVuLWZvcm0gYmkgYmktcGx1cy1zcXVhcmUtZmlsbFwiIH0pO1xyXG4gICAgY3JlYXRlRm9ybUJ0bi5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGNyZWF0ZUZvcm0odG9kb3MpOyB9O1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZUVkaXRGb3JtKHRvZG9zLCB0b2RvKSB7XHJcbiAgICBjcmVhdGVGb3JtKHRvZG9zKTtcclxuICAgIHNldENyZWF0ZUVkaXRGb3JtRGVmYXVsdHModG9kbyk7XHJcbiAgICB2YXIgZm9ybUJhc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tbW9kdWxlXCIpO1xyXG4gICAgdmFyIGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tbW9kdWxlIGZvcm1cIik7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybSBidXR0b25cIikudGV4dENvbnRlbnQgPSBcIlVwZGF0ZVwiO1xyXG4gICAgZm9ybS5vbnN1Ym1pdCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IGdldEZvcm1EYXRhKCk7XHJcbiAgICAgICAgaWYgKGZvcm1EYXRhLmRhdGUpIHtcclxuICAgICAgICAgICAgdG9kby5zZXRPcHRpb25zKFwiZHVlRGF0ZVwiLCBmb3JtRGF0YS5kYXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZvcm1EYXRhLnByaW9yaXR5KSB7XHJcbiAgICAgICAgICAgIHRvZG8uc2V0T3B0aW9ucyhcInByaW9yaXR5XCIsIGZvcm1EYXRhLnByaW9yaXR5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZvcm1EYXRhLnRpdGxlKSB7XHJcbiAgICAgICAgICAgIHRvZG8uc2V0VGl0bGUoZm9ybURhdGEudGl0bGUpO1xyXG4gICAgICAgICAgICB0b2RvLnNldERlc2NyaXB0aW9uKGZvcm1EYXRhLmRlc2NyKTtcclxuICAgICAgICAgICAgcmVkcmF3VG9kbyh0b2RvcywgdG9kbyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZm9ybUJhc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICB9O1xyXG4gICAgZHJhd0NvbW1lbnRTZWN0aW9uKHRvZG8pO1xyXG4gICAgZHJhd0NvbW1lbnRJbnB1dCh0b2RvKTtcclxufVxyXG5mdW5jdGlvbiBzZXRDcmVhdGVFZGl0Rm9ybURlZmF1bHRzKHRvZG8pIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXRUaXRsZVwiKS52YWx1ZSA9IHRvZG8uZ2V0VGl0bGUoKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlcIikudmFsdWUgPSB0b2RvLmdldE9wdGlvbnMoXCJwcmlvcml0eVwiKSA/IHRvZG8uZ2V0T3B0aW9ucyhcInByaW9yaXR5XCIpIDogXCIjYzZjNmM2XCI7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uXCIpLnZhbHVlID0gdG9kby5nZXREZXNjcmlwdGlvbigpO1xyXG59XHJcbmZ1bmN0aW9uIHJlZHJhd1RvZG8odG9kb3MsIHRvZG8pIHtcclxuICAgIHZhciBodG1sVG9kb1dyYXBwZXIgPSBjcmVhdGVUb2RvKHRvZG8sIHRvZG9zLCBmYWxzZSk7XHJcbiAgICB2YXIgb2xkVG9kb1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tXCIgKyB0b2RvLmdldElkKCkpO1xyXG4gICAgb2xkVG9kb1dyYXBwZXIucmVwbGFjZVdpdGgoaHRtbFRvZG9XcmFwcGVyKTtcclxufVxyXG5mdW5jdGlvbiBkcmF3Q29tbWVudFNlY3Rpb24odG9kbykge1xyXG4gICAgdmFyIGZvcm1Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLW1vZHVsZSAuY29udGVudFwiKTtcclxuICAgIG1ha2VIdG1sRWxlbWVudChcImhyXCIsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1tb2R1bGVcIikpO1xyXG4gICAgdmFyIGNvbW1lbnRTZWN0aW9uID0gbWFrZUh0bWxFbGVtZW50KFwiZGl2XCIsIGZvcm1Db250ZW50LCB7IGNsYXNzZXM6IFwiY29tbWVudC1zZWN0aW9uXCIgfSk7XHJcbiAgICBkcmF3Q29tbWVudHMoY29tbWVudFNlY3Rpb24sIHRvZG8pO1xyXG59XHJcbmZ1bmN0aW9uIGRlbGV0ZUhUTUxDb21tZW50KGlkKSB7XHJcbiAgICB2YXIgY29tbWVudFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbW1lbnQtc2VjdGlvblwiKTtcclxuICAgIGNvbW1lbnRTZWN0aW9uLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY29tbWVudCkge1xyXG4gICAgICAgIGlmIChpZCA9PT0gY29tbWVudC5pZCkge1xyXG4gICAgICAgICAgICBjb21tZW50U2VjdGlvbi5yZW1vdmVDaGlsZChjb21tZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBkcmF3Q29tbWVudElucHV0KHRvZG8pIHtcclxuICAgIHZhciBmb3JtQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1tb2R1bGUgLmNvbnRlbnRcIik7XHJcbiAgICB2YXIgaW5wdXRTZWN0aW9uID0gbWFrZUh0bWxFbGVtZW50KFwiZGl2XCIsIGZvcm1Db250ZW50LCB7IGNsYXNzZXM6IFwiY29tbWVudC1pbnB1dFwiLCBjaGlsZHJlbjogW1tcImhyXCIsIHt9XV0gfSk7XHJcbiAgICB2YXIgY29tbWVudFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiIC5mb3JtLW1vZHVsZSAuY29udGVudCAuY29tbWVudC1zZWN0aW9uXCIpO1xyXG4gICAgdmFyIGxhYmVsID0gbWFrZUh0bWxFbGVtZW50KFwibGFiZWxcIiwgaW5wdXRTZWN0aW9uLCB7IHRleHQ6IFwiTWVzc2FnZTogXCIgfSk7XHJcbiAgICB2YXIgdGV4dEJveCA9IG1ha2VIdG1sRWxlbWVudChcImlucHV0XCIsIGlucHV0U2VjdGlvbiwgeyBpZDogXCJtZXNzYWdlLWlucHV0XCIgfSk7IC8vIGFkZCBhIGtleXByZXNzIG9uIGVudGVyID8gbWF5YmUgP1xyXG4gICAgdmFyIHRleHRQdXNoID0gbWFrZUh0bWxFbGVtZW50KFwiaVwiLCBpbnB1dFNlY3Rpb24sIHsgY2xhc3NlczogXCJiaSBiaS1hcnJvdy1yaWdodC1zcXVhcmUtZmlsbFwiIH0pO1xyXG4gICAgdGV4dEJveC5vbmtleXByZXNzID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAgICAgICBpZiAodGV4dEJveC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG5vdGUgPSB0b2RvLmFkZE5vdGUodGV4dEJveC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFsbFRvZG9zXCIsIEpTT04uc3RyaW5naWZ5KGFsbFRvZG9zKSk7XHJcbiAgICAgICAgICAgICAgICBkcmF3Q29tbWVudChjb21tZW50U2VjdGlvbiwgbm90ZSwgdG9kbyk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0Qm94LnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0ZXh0UHVzaC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0ZXh0Qm94LnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHZhciBub3RlID0gdG9kby5hZGROb3RlKHRleHRCb3gudmFsdWUpO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFsbFRvZG9zXCIsIEpTT04uc3RyaW5naWZ5KGFsbFRvZG9zKSk7XHJcbiAgICAgICAgICAgIGRyYXdDb21tZW50KGNvbW1lbnRTZWN0aW9uLCBub3RlLCB0b2RvKTtcclxuICAgICAgICAgICAgdGV4dEJveC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBnZXRUaW1lRnJvbVRpbWVCYXNlZElkKGlkKSB7XHJcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCtpZCk7XHJcbiAgICByZXR1cm4gZGF0ZS50b0xvY2FsZVN0cmluZygnZGVmYXVsdCcsIHsgbW9udGg6ICdzaG9ydCcsIGRheTogJzItZGlnaXQnIH0pICsgXCIgXCIgKyAoZGF0ZS5nZXRIb3VycygpICsgXCI6XCIgKyBkYXRlLmdldE1pbnV0ZXMoKSArIFwiOlwiICsgZGF0ZS5nZXRTZWNvbmRzKCkpO1xyXG59XHJcbmZ1bmN0aW9uIGRyYXdDb21tZW50KHNlY3Rpb24sIG5vdGUsIHRvZG8pIHtcclxuICAgIG1ha2VIdG1sRWxlbWVudChcImRpdlwiLCBzZWN0aW9uLCB7XHJcbiAgICAgICAgY2xhc3NlczogXCJub3RlXCIsXHJcbiAgICAgICAgaWQ6IG5vdGUuaWQsXHJcbiAgICAgICAgdGV4dDogbm90ZS5tZXNzYWdlLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbW1wiaVwiLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6IFwiYmkgYmktYmFja3NwYWNlLXJldmVyc2UtZmlsbCBkZWwtY29tbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvLmRlbGV0ZU5vdGUobm90ZS5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUhUTUxDb21tZW50KG5vdGUuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSwgW1wiZGl2XCIsXHJcbiAgICAgICAgICAgICAgICB7IGNsYXNzZXM6IFwiY29tbWVudC10aW1lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogZ2V0VGltZUZyb21UaW1lQmFzZWRJZChub3RlLmlkKSB9XHJcbiAgICAgICAgICAgIF1dXHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBkcmF3Q29tbWVudHMoc2VjdGlvbiwgdG9kbykge1xyXG4gICAgaWYgKHRvZG8uZ2V0T3B0aW9ucyhcIm5vdGVzXCIpKVxyXG4gICAgICAgIHRvZG8uZ2V0T3B0aW9ucyhcIm5vdGVzXCIpLmZvckVhY2goZnVuY3Rpb24gKG5vdGUpIHsgZHJhd0NvbW1lbnQoc2VjdGlvbiwgbm90ZSwgdG9kbyk7IH0pO1xyXG59XHJcbmZ1bmN0aW9uIGdldEZvcm1EYXRhKCkge1xyXG4gICAgdmFyIHRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0VGl0bGVcIikudmFsdWU7XHJcbiAgICB2YXIgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpLnZhbHVlO1xyXG4gICAgdmFyIGRlc2NyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKS52YWx1ZTtcclxuICAgIHZhciBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRlXCIpLnZhbHVlO1xyXG4gICAgdmFyIGRhdGVPYmogPSBuZXcgRGF0ZShkYXRlKTtcclxuICAgIGRhdGVPYmouc2V0RGF0ZShkYXRlT2JqLmdldERhdGUoKSArIDEpO1xyXG4gICAgZGF0ZSA9IGRhdGUgPyBkYXRlT2JqLnRvTG9jYWxlU3RyaW5nKCdkZWZhdWx0JywgeyBtb250aDogJ3Nob3J0JyB9KSArIGRhdGUuc2xpY2UoZGF0ZS5sZW5ndGggLSAyKSA6IGRhdGU7XHJcbiAgICByZXR1cm4geyB0aXRsZTogdGV4dCwgcHJpb3JpdHk6IHByaW9yaXR5LCBkZXNjcjogZGVzY3IsIGRhdGU6IGRhdGUgfTtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVGb3JtKHRvZG9zLCBhbGxvd0NvbW1lbnRzKSB7XHJcbiAgICBpZiAoYWxsb3dDb21tZW50cyA9PT0gdm9pZCAwKSB7IGFsbG93Q29tbWVudHMgPSBmYWxzZTsgfVxyXG4gICAgdmFyIGZvcm1CYXNlID0gbWFrZUh0bWxFbGVtZW50KFwiZGl2XCIsIGRvY3VtZW50LmJvZHksIHsgY2xhc3NlczogXCJmb3JtLW1vZHVsZVwiIH0pO1xyXG4gICAgZm9ybUJhc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBmb3JtQmFzZSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGZvcm1CYXNlKTtcclxuICAgICAgICB9XHJcbiAgICB9LCB0cnVlKTtcclxuICAgIHZhciBjb250ZW50ID0gbWFrZUh0bWxFbGVtZW50KFwiZGl2XCIsIGZvcm1CYXNlLCB7IGNsYXNzZXM6IFwiY29udGVudFwiIH0pO1xyXG4gICAgdmFyIGZvcm0gPSBtYWtlSHRtbEVsZW1lbnQoXCJmb3JtXCIsIGNvbnRlbnQsIHt9KTtcclxuICAgIHZhciBmb3JtZGl2MSA9IG1ha2VIdG1sRWxlbWVudChcImRpdlwiLCBmb3JtLCB7fSk7XHJcbiAgICB2YXIgZm9ybWRpdjIgPSBtYWtlSHRtbEVsZW1lbnQoXCJkaXZcIiwgZm9ybSwge30pO1xyXG4gICAgdmFyIGZvcm1kaXYzID0gbWFrZUh0bWxFbGVtZW50KFwiZGl2XCIsIGZvcm0sIHt9KTtcclxuICAgIHZhciBmb3JtZGl2NCA9IG1ha2VIdG1sRWxlbWVudChcImRpdlwiLCBmb3JtLCB7fSk7XHJcbiAgICB2YXIgZm9ybWRpdjUgPSBtYWtlSHRtbEVsZW1lbnQoXCJkaXZcIiwgZm9ybSwgeyBjbGFzc2VzOiBcImJ0bi1kaXZcIiB9KTtcclxuICAgIHZhciB0aXRsZUxhYmVsID0gbWFrZUh0bWxFbGVtZW50KFwibGFiZWxcIiwgZm9ybWRpdjEsIHsgbmFtZTogXCJ0aXRsZVwiLCB0ZXh0OiBcIlRpdGxlOlwiIH0pO1xyXG4gICAgdmFyIHRpdGxlID0gbWFrZUh0bWxFbGVtZW50KFwiaW5wdXRcIiwgZm9ybWRpdjEsIHsgbmFtZTogXCJ0aXRsZVwiLCBwbGFjZWhvbGRlcjogXCJuZXdUb2RvXCIsIGlkOiBcImlucHV0VGl0bGVcIiB9KTtcclxuICAgIHRpdGxlLnJlcXVpcmVkID0gdHJ1ZTtcclxuICAgIHZhciBkZXNjckxhYmVsID0gbWFrZUh0bWxFbGVtZW50KFwibGFiZWxcIiwgZm9ybWRpdjIsIHsgbmFtZTogXCJkZXNjclwiLCB0ZXh0OiBcIkRlc2NyaXB0aW9uOlwiIH0pO1xyXG4gICAgdmFyIGRlc2NyID0gbWFrZUh0bWxFbGVtZW50KFwidGV4dEFyZWFcIiwgZm9ybWRpdjIsIHsgbmFtZTogXCJkZXNjclwiLCBwbGFjZWhvbGRlcjogXCJkZXNjcmlwdGlvbi4uLlwiLCBpZDogXCJkZXNjcmlwdGlvblwiIH0pO1xyXG4gICAgZGVzY3Iuc3R5bGUucmVzaXplID0gXCJub25lXCI7XHJcbiAgICB2YXIgZGF0ZUxhYmVsID0gbWFrZUh0bWxFbGVtZW50KFwibGFiZWxcIiwgZm9ybWRpdjMsIHsgbmFtZTogXCJkZXNjclwiLCB0ZXh0OiBcIkRhdGU6XCIgfSk7XHJcbiAgICB2YXIgZGF0ZSA9IG1ha2VIdG1sRWxlbWVudChcImlucHV0XCIsIGZvcm1kaXYzLCB7IG5hbWU6IFwiZGF0ZVwiLCB0eXBlOiBcImRhdGVcIiwgaWQ6IFwiZGF0ZVwiIH0pO1xyXG4gICAgdmFyIHByaW9yaXR5TGFiZWwgPSBtYWtlSHRtbEVsZW1lbnQoXCJsYWJlbFwiLCBmb3JtZGl2NCwgeyBuYW1lOiBcInByaW9yaXR5XCIsIHRleHQ6IFwiUHJpb3JpdHk6XCIgfSk7XHJcbiAgICB2YXIgcHJpb3JpdHkgPSBtYWtlSHRtbEVsZW1lbnQoXCJpbnB1dFwiLCBmb3JtZGl2NCwgeyBuYW1lOiBcInByaW9yaXR5XCIsIHR5cGU6IFwiY29sb3JcIiwgdmFsdWU6IFwiI2M2YzZjNlwiLCBpZDogXCJwcmlvcml0eVwiIH0pO1xyXG4gICAgdmFyIGNyZWF0ZUJ0biA9IG1ha2VIdG1sRWxlbWVudChcImJ1dHRvblwiLCBmb3JtZGl2NSwgeyB0ZXh0OiBcIkNyZWF0ZVwiIH0pO1xyXG4gICAgZm9ybS5vbnN1Ym1pdCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vIGxldCBuZXdUb2RvID0gbmV3IHRvZG8odG9kb05hbWUpO1xyXG4gICAgICAgIC8vIHRvZG9zLmFkZChuZXdUb2RvKTtcclxuICAgICAgICAvLyBjcmVhdGVUb2RvKG5ld1RvZG8sdG9kb3MpO1xyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IGdldEZvcm1EYXRhKCk7XHJcbiAgICAgICAgdmFyIG5ld1RvZG8gPSBuZXcgdG9kbyhmb3JtRGF0YS50aXRsZSwgZm9ybURhdGEuZGVzY3IsIHsgcHJpb3JpdHk6IGZvcm1EYXRhLnByaW9yaXR5LCBkdWVEYXRlOiBmb3JtRGF0YS5kYXRlIH0pO1xyXG4gICAgICAgIHRvZG9zLmFkZChuZXdUb2RvKTtcclxuICAgICAgICBjcmVhdGVUb2RvKG5ld1RvZG8sIHRvZG9zKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGZvcm1CYXNlKTtcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gZW5hYmxlVGV4dChpZCwgc2V0RnVuYykge1xyXG4gICAgdmFyIHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdHh0Ym94LVwiICsgaWQgKyBcIiBpbnB1dFwiKTtcclxuICAgIHZhciBlZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0eHRib3gtXCIgKyBpZCArIFwiIGlcIik7XHJcbiAgICB0YXJnZXQudmFsdWUgPSBcIlwiO1xyXG4gICAgdGFyZ2V0LnJlYWRPbmx5ID0gZmFsc2U7XHJcbiAgICB0YXJnZXQuc2VsZWN0KCk7XHJcbiAgICB2YXIgZnVuYyA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIgfHwgZS50eXBlID09PSBcImNsaWNrXCIpIHtcclxuICAgICAgICAgICAgdmFyIHRvZG9zID0gZ2V0VG9kb3MoaWQpO1xyXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgIGlmICghdmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRhcmdldC5wbGFjZWhvbGRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2V0RnVuYykge1xyXG4gICAgICAgICAgICAgICAgc2V0RnVuYyh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGFyZ2V0LnJlYWRPbmx5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZnVuYyk7XHJcbiAgICAgICAgICAgIGVudGVyQnRuLnJlcGxhY2VXaXRoKGVkaXRCdG4pO1xyXG4gICAgICAgICAgICB0YXJnZXQucGxhY2Vob2xkZXIgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdmFyIGVudGVyQnRuID0gbWFrZUh0bWxFbGVtZW50KFwiaVwiLCBudWxsLCB7IGNsYXNzZXM6IFwiYmkgYmktYm94LWFycm93LWluLXJpZ2h0XCIgfSk7XHJcbiAgICBlbnRlckJ0bi5vbmNsaWNrID0gZnVuYztcclxuICAgIGVkaXRCdG4ucmVwbGFjZVdpdGgoZW50ZXJCdG4pO1xyXG4gICAgdmFyIGsgPSB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIGZ1bmMpO1xyXG59XHJcbmZ1bmN0aW9uIG1ha2VUb2dnYWJsZVRleHRCb3godGV4dCwgaWQsIHBhcmVudEVsZSwgY2xhc3NlcywgZnVuYykge1xyXG4gICAgaWYgKHBhcmVudEVsZSA9PT0gdm9pZCAwKSB7IHBhcmVudEVsZSA9IG51bGw7IH1cclxuICAgIGlmIChjbGFzc2VzID09PSB2b2lkIDApIHsgY2xhc3NlcyA9IFwiXCI7IH1cclxuICAgIGlmIChmdW5jID09PSB2b2lkIDApIHsgZnVuYyA9IG51bGw7IH1cclxuICAgIHJldHVybiBtYWtlSHRtbEVsZW1lbnQoXCJkaXZcIiwgcGFyZW50RWxlLCB7IGNsYXNzZXM6IFwidGctdHh0IFwiICsgY2xhc3NlcyxcclxuICAgICAgICBpZDogXCJ0eHRib3gtXCIgKyBpZCxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBbXCJpbnB1dFwiLFxyXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiB0ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiB0ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0ZXh0IH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1wiaVwiLFxyXG4gICAgICAgICAgICAgICAgeyBjbGFzc2VzOiBcImJpLXBlbmNpbC1zcXVhcmUgYmlcIixcclxuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gZW5hYmxlVGV4dChpZCwgZnVuYyk7IH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIF1cclxuICAgIH0pO1xyXG4gICAgLy8gbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAvLyBkaXYuY2xhc3NMaXN0LmFkZChcInRnLXRleHRcIilcclxuICAgIC8vIGRpdi5pZCA9IFwidHh0Ym94XCI7XHJcbiAgICAvLyBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAvLyBpbnB1dC50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICAvLyBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcbiAgICAvLyBidG4uY2xhc3NMaXN0LmFkZChcImJpXCIpO1xyXG4gICAgLy8gYnRuLmNsYXNzTGlzdC5hZGQoXCJiaS1wZW5jaWwtc3F1YXJlXCIpO1xyXG4gICAgLy8gYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57fSk7XHJcbiAgICAvLyBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG4gICAgLy8gZGl2LmFwcGVuZENoaWxkKGJ0bilcclxuICAgIC8vIHJldHVybiBkaXY7XHJcbn1cclxuZnVuY3Rpb24gbWFrZVRpdGxlKGVsZVNlbCwgdG9kb3MsIGxpc3RlbmVycykge1xyXG4gICAgaWYgKGxpc3RlbmVycyA9PT0gdm9pZCAwKSB7IGxpc3RlbmVycyA9IFtdOyB9XHJcbiAgICBtYWtlVG9nZ2FibGVUZXh0Qm94KHRvZG9zLmdldE5hbWUoKSwgdG9kb3MuZ2V0SWQoKSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVTZWwpLCBcInRvZG9zIHRpdGxlXCIsIGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIHRvZG9zLnNldE5hbWUodmFsdWUpO1xyXG4gICAgICAgIGNoYW5nZU5hbWVTaWRlYmFyKHRvZG9zLmdldElkKCksIHZhbHVlKTtcclxuICAgIH0pO1xyXG4gICAgLy8gICAgIG1ha2VIdG1sRWxlbWVudChcImRpdlwiLGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlU2VsKSxcclxuICAgIC8vICAgICB7Y2xhc3NlczpbXCJ0aXRsZVwiXSxcclxuICAgIC8vICAgICBpZDogXCJ0aXRsZS1cIiArIHRvZG9zLmdldElkKCksXHJcbiAgICAvLyAgICAgY2hpbGRyZW46W1xyXG4gICAgLy8gICAgICAgICBbXCJpbnB1dFwiLFxyXG4gICAgLy8gICAgICAgICB7dGV4dDp0b2Rvcy5nZXROYW1lKCl9XSxcclxuICAgIC8vICAgICAgICAgW1wiaVwiLFxyXG4gICAgLy8gICAgICAgICB7Y2xhc3NlczpbXCJlZGl0XCJdLFxyXG4gICAgLy8gICAgICAgICAgdGV4dDpcImVkaXRcIixcclxuICAgIC8vICAgICAgICAgbGlzdGVuZXJzOlt7XHJcbiAgICAvLyAgICAgICAgICAgICB0eXBlOlwiY2xpY2tcIixcclxuICAgIC8vICAgICAgICAgICAgIGZ1bmM6KCk9PnJlcGxhY2VUaXRsZVdpdGhUZXh0Qm94KHRvZG9zKVxyXG4gICAgLy8gICAgICAgICAgICAgfV1cclxuICAgIC8vICAgICB9XV1cclxuICAgIC8vIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGhpZGVFbGVtZW50KGVsZSkge1xyXG4gICAgZWxlLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG59XHJcbmZ1bmN0aW9uIHNob3dFbGVtZW50KGVsZSkge1xyXG4gICAgZWxlLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxufVxyXG5mdW5jdGlvbiBlbmFibGVUaXRsZVRleHRCb3goKSB7XHJcbn1cclxuLy8gZnVuY3Rpb24gY3JlYXRlVGV4dFRpdGxlQXJlYSh0b2RvczpUb2Rvc01vZGVsKXtcclxuLy8gICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0aXRsZS0ke3RvZG9zLmdldElkKCl9YClcclxuLy8gICAgIGxldCB0aXRsZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGl0bGUtJHt0b2Rvcy5nZXRJZCgpfSBoM2ApO1xyXG4vLyAgICAgbGV0IGVkaXRCdG4gPSAoPEhUTUxFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0aXRsZS0ke3RvZG9zLmdldElkKCl9IGlgKSk7XHJcbi8vICAgICBoaWRlRWxlbWVudChlZGl0QnRuKTtcclxuLy8gICAgIGlmICghdGl0bGVUZXh0KXtcclxuLy8gICAgICAgICByZXR1cm5cclxuLy8gICAgIH1cclxuLy8gICAgIGxldCB0ZXh0QXJlYSA9IG1ha2VIdG1sRWxlbWVudChcImRpdlwiLG51bGwse1xyXG4vLyAgICAgICAgIGNoaWxkcmVuOltbXCJpbnB1dFwiLFxyXG4vLyAgICAgICAgIHtwbGFjZWhvbGRlcjp0aXRsZVRleHQudGV4dENvbnRlbnR9XHJcbi8vICAgICAgICAgXSxcclxuLy8gICAgICAgICBbXCJpXCIsXHJcbi8vICAgICAgICAge2NsYXNzZXM6XCJjbG9zZVwiLFwiYmkgXCJiaS14XCIsXHJcbi8vICAgICAgICAgY2xpY2s6KCk9PntcclxuLy8gICAgICAgICAgICAgdGV4dEFyZWEucmVwbGFjZVdpdGgodGl0bGVUZXh0KVxyXG4vLyAgICAgICAgICAgICBzaG93RWxlbWVudChlZGl0QnRuKTtcclxuLy8gICAgICAgICB9fV0sXHJcbi8vICAgICAgICAgW1wiaVwiLFxyXG4vLyAgICAgICAgIHtcclxuLy8gICAgICAgICAgICBjbGFzc2VzOltcImJpXCIsXCJiaS1yZXBseVwiLFwiZW50ZXJcIl0sXHJcbi8vICAgICAgICAgICAgIGNsaWNrOigpPT57XHJcbi8vICAgICAgICAgICAgICAgICBsZXQgdGV4dCA9ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGl0bGUtJHt0b2Rvcy5nZXRJZCgpfSBkaXYgaW5wdXRgKSkudmFsdWU7XHJcbi8vICAgICAgICAgICAgICAgICBpZiAodGV4dC5sZW5ndGgpe1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHRpdGxlVGV4dC50ZXh0Q29udGVudCA9IHRleHQ7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgdGV4dEFyZWEucmVwbGFjZVdpdGgodGl0bGVUZXh0KTtcclxuLy8gICAgICAgICAgICAgICAgICAgICB0b2Rvcy5zZXROYW1lKHRleHQpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHNob3dFbGVtZW50KGVkaXRCdG4pO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIF1cclxuLy8gICAgIF1cclxuLy8gICAgIH1cclxuLy8gICAgICAgICApXHJcbi8vICAgICAgICAgcmV0dXJuIHRleHRBcmVhO1xyXG4vLyB9XHJcbmZ1bmN0aW9uIGNyZWF0ZVRvZG8odG9kbywgdG9kb3MsIGFkZFRvRG9tKSB7XHJcbiAgICBpZiAoYWRkVG9Eb20gPT09IHZvaWQgMCkgeyBhZGRUb0RvbSA9IHRydWU7IH1cclxuICAgIHZhciBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWN0aW9uLVwiICsgdG9kb3MuZ2V0SWQoKSArIFwiIC50b2RvLWFyZWFcIik7XHJcbiAgICBpZiAoIWFkZFRvRG9tKSB7XHJcbiAgICAgICAgc2VjdGlvbiA9IG51bGw7XHJcbiAgICB9XHJcbiAgICB2YXIgaXNDaGVja2VkID0gIXRvZG8uZ2V0T3B0aW9ucygnY2hlY2tWYWx1ZScpID8gXCJub3QtY2hlY2tlZFwiIDogXCJjaGVja2VkLW9mZlwiO1xyXG4gICAgdmFyIHRvZG9FbGVXcmFwcGVyID0gbWFrZUh0bWxFbGVtZW50KFwiZGl2XCIsIHNlY3Rpb24sIHsgY2xhc3NlczogXCJ0b2RvLWVsZS13cmFwcGVyIFwiICsgaXNDaGVja2VkICsgXCIgXCIgfSk7XHJcbiAgICB2YXIgdG9kb0VsZSA9IG1ha2VIdG1sRWxlbWVudChcImRpdlwiLCB0b2RvRWxlV3JhcHBlciwgeyBjbGFzc2VzOiBcInRvZG8tZWxlXCIgfSk7XHJcbiAgICB0b2RvRWxlV3JhcHBlci5pZCA9IFwidG9kby1cIiArIHRvZG8uZ2V0SWQoKTtcclxuICAgIHZhciBiYW5uZXIgPSBtYWtlSHRtbEVsZW1lbnQoXCJkaXZcIiwgdG9kb0VsZSwgeyBjbGFzc2VzOiBcImJhbm5lclwiIH0pO1xyXG4gICAgdmFyIHRvZG9FbGVJbm5lcldyYXBwZXIgPSBtYWtlSHRtbEVsZW1lbnQoXCJkaXZcIiwgdG9kb0VsZSwgeyBjbGFzc2VzOiBcInRvZG8tZWxlLWlubmVyXCIgfSk7XHJcbiAgICBpZiAodG9kby5nZXRPcHRpb25zKFwicHJpb3JpdHlcIikpIHtcclxuICAgICAgICBiYW5uZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdG9kby5nZXRPcHRpb25zKFwicHJpb3JpdHlcIik7XHJcbiAgICB9XHJcbiAgICB2YXIgY2hlY2sgPSBtYWtlSHRtbEVsZW1lbnQoXCJpbnB1dFwiLCB0b2RvRWxlSW5uZXJXcmFwcGVyLCB7IGNsYXNzZXM6IFwiY2hlY2tcIiwgdHlwZTogXCJjaGVja2JveFwiIH0pO1xyXG4gICAgdmFyIHRpdGxlYm94ID0gbWFrZVRvZ2dhYmxlVGV4dEJveCh0b2RvLmdldFRpdGxlKCksIFwidGl0bGUtXCIgKyB0b2RvLmdldElkKCksIHRvZG9FbGVJbm5lcldyYXBwZXIsIFwidG9kby1uYW1lXCIsIGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdG9kby5zZXRUaXRsZSh2YWx1ZSk7IH0pO1xyXG4gICAgdmFyIHN0YXRzID0gbWFrZUh0bWxFbGVtZW50KFwiZGl2XCIsIHRvZG9FbGVJbm5lcldyYXBwZXIsIHsgY2xhc3NlczogXCJzdGF0c1wiIH0pO1xyXG4gICAgaWYgKHRvZG8uZ2V0T3B0aW9ucyhcImR1ZURhdGVcIikpIHtcclxuICAgICAgICB2YXIgZGF0ZSA9IG1ha2VIdG1sRWxlbWVudChcImRpdlwiLCBzdGF0cywgeyB0ZXh0OiB0b2RvLmdldE9wdGlvbnMoXCJkdWVEYXRlXCIpLCBjbGFzc2VzOiBcImR1ZS1kYXRlXCIgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodG9kby5nZXREZXNjcmlwdGlvbigpKSB7XHJcbiAgICAgICAgdmFyIGRlc2NyQnRuXzEgPSBtYWtlSHRtbEVsZW1lbnQoXCJpXCIsIHN0YXRzLCB7IGNsYXNzZXM6IFwiZGVzY3ItYnRuIGJpIGJpLWNhcmQtdGV4dCB0b29sdGlwXCIgfSk7XHJcbiAgICAgICAgdmFyIHR0cCA9IG1ha2VIdG1sRWxlbWVudChcImRpdlwiLCBkZXNjckJ0bl8xLCB7IGNsYXNzZXM6IFwidG9vbHRpcHRleHRcIiwgdGV4dDogXCJoYXMgYSBkZXNjcmlwdGlvblwiIH0pO1xyXG4gICAgICAgIGRlc2NyQnRuXzEub25jbGljayA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tXCIgKyB0b2RvLmdldElkKCkgKyBcIiAuaW5mby1ib3guY29tLWJ0blwiKSkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLVwiICsgdG9kby5nZXRJZCgpICsgXCIgLmluZm8tYm94XCIpLmNsYXNzTGlzdC5hZGQoXCJmYXN0XCIpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLVwiICsgdG9kby5nZXRJZCgpICsgXCIgLmluZm8tYm94XCIpLmNsYXNzTGlzdC5yZXBsYWNlKFwibmV3XCIsIFwib2xkXCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbW1lbnRCdG5SZWZfMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1cIiArIHRvZG8uZ2V0SWQoKSArIFwiIC5jb21tZW50LWJ0blwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChjb21tZW50QnRuUmVmXzEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb21tZW50QnRuUmVmXzEuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9kb0VsZVdyYXBwZXIucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLVwiICsgdG9kby5nZXRJZCgpICsgXCIgLmluZm8tYm94XCIpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29tbWVudEJ0blJlZl8xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRCdG5SZWZfMS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVzY3JpcHRpb25Cb3ggPSBtYWtlSHRtbEVsZW1lbnQoXCJkaXZcIiwgdG9kb0VsZVdyYXBwZXIsIHsgY2xhc3NlczogXCJpbmZvLWJveCBuZXcgZmFzdCBkZS1idG5cIiwgY2hpbGRyZW46IFtbXCJkaXZcIiwgeyB0ZXh0OiBcIkRlc2NyaXB0aW9uOiBcIiB9XSwgW1wiZGl2XCIsIHsgdGV4dDogdG9kby5nZXREZXNjcmlwdGlvbigpLCBjbGFzc2VzOiBcImRlc2NyLXR4dFwiIH1dXSB9KTtcclxuICAgICAgICAgICAgICAgIH0sIDI1MCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLVwiICsgdG9kby5nZXRJZCgpICsgXCIgLmluZm8tYm94Lm5ld1wiKSkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLVwiICsgdG9kby5nZXRJZCgpICsgXCIgLmluZm8tYm94XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJmYXN0XCIpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLVwiICsgdG9kby5nZXRJZCgpICsgXCIgLmluZm8tYm94XCIpLmNsYXNzTGlzdC5yZXBsYWNlKFwibmV3XCIsIFwib2xkXCIpO1xyXG4gICAgICAgICAgICAgICAgZGVzY3JCdG5fMS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2RvRWxlV3JhcHBlci5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tXCIgKyB0b2RvLmdldElkKCkgKyBcIiAuaW5mby1ib3hcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyQnRuXzEuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRlc2NyaXB0aW9uQm94ID0gbWFrZUh0bWxFbGVtZW50KFwiZGl2XCIsIHRvZG9FbGVXcmFwcGVyLCB7IGNsYXNzZXM6IFwiaW5mby1ib3ggbmV3IGRlLWJ0biBcIiwgY2hpbGRyZW46IFtbXCJkaXZcIiwgeyB0ZXh0OiBcIkRlc2NyaXB0aW9uOiBcIiB9XSwgW1wiZGl2XCIsIHsgdGV4dDogdG9kby5nZXREZXNjcmlwdGlvbigpLCBjbGFzc2VzOiBcImRlc2NyLXR4dFwiIH1dXSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBpZiAodG9kby5nZXRPcHRpb25zKFwibm90ZXNcIikpIHtcclxuICAgICAgICB2YXIgbGVuZ3RoXzEgPSB0b2RvLmdldE9wdGlvbnMoXCJub3Rlc1wiKS5sZW5ndGg7XHJcbiAgICAgICAgdmFyIGNvbW1lbnRfMSA9IG1ha2VIdG1sRWxlbWVudChcImlcIiwgc3RhdHMsIHsgY2xhc3NlczogXCJjb21tZW50LWJ0biBiaSBiaS1jaGF0LXJpZ2h0LXF1b3RlLWZpbGwgdG9vbHRpcFwiIH0pO1xyXG4gICAgICAgIHZhciB0dHAyID0gbWFrZUh0bWxFbGVtZW50KFwiZGl2XCIsIGNvbW1lbnRfMSwgeyBjbGFzc2VzOiBcInRvb2x0aXB0ZXh0XCIsIHRleHQ6IFwiXCIgKyBsZW5ndGhfMSArIFwiIGNvbW1lbnRzXCIgfSk7XHJcbiAgICAgICAgY29tbWVudF8xLm9uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLVwiICsgdG9kby5nZXRJZCgpICsgXCIgLmluZm8tYm94LmRlLWJ0blwiKSkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLVwiICsgdG9kby5nZXRJZCgpICsgXCIgLmluZm8tYm94XCIpLmNsYXNzTGlzdC5hZGQoXCJmYXN0XCIpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLVwiICsgdG9kby5nZXRJZCgpICsgXCIgLmluZm8tYm94XCIpLmNsYXNzTGlzdC5yZXBsYWNlKFwibmV3XCIsIFwib2xkXCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRlc2NyQnRuUmVmXzEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tXCIgKyB0b2RvLmdldElkKCkgKyBcIiAuZGVzY3ItYnRuXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRlc2NyQnRuUmVmXzEpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZXNjckJ0blJlZl8xLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbW1lbnRfMS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2RvRWxlV3JhcHBlci5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tXCIgKyB0b2RvLmdldElkKCkgKyBcIiAuaW5mby1ib3hcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXNjckJ0blJlZl8xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyQnRuUmVmXzEuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vdGVzID0gdG9kby5nZXRPcHRpb25zKFwibm90ZXNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSBub3Rlc1tub3Rlcy5sZW5ndGggLSAxXS5tZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkZXNjcmlwdGlvbkJveCA9IG1ha2VIdG1sRWxlbWVudChcImRpdlwiLCB0b2RvRWxlV3JhcHBlciwgeyBjbGFzc2VzOiBcImluZm8tYm94IG5ldyBmYXN0IGNvbS1idG5cIiwgY2hpbGRyZW46IFtbXCJkaXZcIiwgeyB0ZXh0OiBcIkxhc3RNZXNzYWdlOiBcIiB9XSwgW1wiZGl2XCIsIHsgdGV4dDogbWVzc2FnZSwgY2xhc3NlczogXCJkZXNjci10eHRcIiB9XV0gfSk7XHJcbiAgICAgICAgICAgICAgICB9LCAyNTApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1cIiArIHRvZG8uZ2V0SWQoKSArIFwiIC5pbmZvLWJveC5uZXdcIikpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1cIiArIHRvZG8uZ2V0SWQoKSArIFwiIC5pbmZvLWJveFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiZmFzdFwiKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1cIiArIHRvZG8uZ2V0SWQoKSArIFwiIC5pbmZvLWJveFwiKS5jbGFzc0xpc3QucmVwbGFjZShcIm5ld1wiLCBcIm9sZFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRfMS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2RvRWxlV3JhcHBlci5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tXCIgKyB0b2RvLmdldElkKCkgKyBcIiAuaW5mby1ib3hcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnRfMS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbm90ZXMgPSB0b2RvLmdldE9wdGlvbnMoXCJub3Rlc1wiKTtcclxuICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlID0gbm90ZXNbbm90ZXMubGVuZ3RoIC0gMV0ubWVzc2FnZTtcclxuICAgICAgICAgICAgICAgIHZhciBkZXNjcmlwdGlvbkJveCA9IG1ha2VIdG1sRWxlbWVudChcImRpdlwiLCB0b2RvRWxlV3JhcHBlciwgeyBjbGFzc2VzOiBcImluZm8tYm94IG5ldyBjb20tYnRuXCIsIGNoaWxkcmVuOiBbW1wiZGl2XCIsIHsgdGV4dDogXCJMYXN0IE1lc3NhZ2U6IFwiIH1dLCBbXCJkaXZcIiwgeyB0ZXh0OiBtZXNzYWdlLCBjbGFzc2VzOiBcImRlc2NyLXR4dFwiIH1dXSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICB2YXIgY29udHJvbHMgPSBtYWtlSHRtbEVsZW1lbnQoXCJkaXZcIiwgdG9kb0VsZUlubmVyV3JhcHBlciwgeyBjbGFzc2VzOiBcImNvbnRyb2xzXCIgfSk7XHJcbiAgICB2YXIgZWRpdEJ0biA9IG1ha2VIdG1sRWxlbWVudChcImlcIiwgY29udHJvbHMsIHsgY2xhc3NlczogXCJlZGl0IGJpIGJpLXBlblwiIH0pO1xyXG4gICAgZWRpdEJ0bi5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBjcmVhdGVFZGl0Rm9ybSh0b2RvcywgdG9kbyk7XHJcbiAgICB9O1xyXG4gICAgdmFyIGRlbEJ0biA9IG1ha2VIdG1sRWxlbWVudChcImlcIiwgY29udHJvbHMsIHsgY2xhc3NlczogXCJkZWxldGUgYmkgYmktdHJhc2gyLWZpbGxcIiB9KTtcclxuICAgIGRlbEJ0bi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlY3Rpb24tXCIgKyAodG9kb3MuZ2V0SWQoKSArIFwiIC50b2RvLWFyZWEgXCIpKTtcclxuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQodG9kb0VsZVdyYXBwZXIpO1xyXG4gICAgICAgIHRvZG9zLnJlbW92ZUJ5VG9kbyh0b2RvKTtcclxuICAgIH07XHJcbiAgICBjaGVjay5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB0b2RvLnNldE9wdGlvbnMoXCJjaGVja1ZhbHVlXCIsICF0b2RvLmdldE9wdGlvbnMoXCJjaGVja1ZhbHVlXCIpKTtcclxuICAgICAgICBpZiAodG9kby5nZXRPcHRpb25zKFwiY2hlY2tWYWx1ZVwiKSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tXCIgKyB0b2RvLmdldElkKCkpLmNsYXNzTGlzdC5yZXBsYWNlKFwibm90LWNoZWNrZWRcIiwgXCJjaGVja2VkLW9mZlwiKTtcclxuICAgICAgICAgICAgYmFubmVyLmlubmVyVGV4dCA9IHRvZG8uZ2V0VGl0bGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1cIiArIHRvZG8uZ2V0SWQoKSkuY2xhc3NMaXN0LnJlcGxhY2UoXCJjaGVja2VkLW9mZlwiLCBcIm5vdC1jaGVja2VkXCIpO1xyXG4gICAgICAgICAgICBiYW5uZXIuaW5uZXJUZXh0ID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgaWYgKGlzQ2hlY2tlZCA9PT0gXCJjaGVja2VkLW9mZlwiKSB7XHJcbiAgICAgICAgYmFubmVyLmlubmVyVGV4dCA9IHRvZG8uZ2V0VGl0bGUoKTtcclxuICAgIH1cclxuICAgIGJhbm5lci5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB0b2RvLnNldE9wdGlvbnMoXCJjaGVja1ZhbHVlXCIsIGZhbHNlKTtcclxuICAgICAgICBjaGVjay5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLVwiICsgdG9kby5nZXRJZCgpKS5jbGFzc0xpc3QucmVwbGFjZShcImNoZWNrZWQtb2ZmXCIsIFwibm90LWNoZWNrZWRcIik7XHJcbiAgICAgICAgYmFubmVyLmlubmVyVGV4dCA9IFwiXCI7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHRvZG9FbGVXcmFwcGVyO1xyXG59XHJcbnZhciBvblRvZG9zVmlldyA9IChmdW5jdGlvbiAoY3VycmVudFRvZG9zKSB7XHJcbiAgICBjbGVhckNvbnRlbnQoKTtcclxuICAgIG1ha2VUaXRsZShcIiNjb250ZW50XCIsIGN1cnJlbnRUb2Rvcyk7XHJcbiAgICB2YXIgc2VjdGlvbiA9IG1ha2VIdG1sRWxlbWVudChcImRpdlwiLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIiksIHsgY2xhc3NlczogXCJ0b2RvLWxpc3RcIiwgaWQ6IFwic2VjdGlvbi1cIiArIGN1cnJlbnRUb2Rvcy5nZXRJZCgpIH0pO1xyXG4gICAgdmFyIG1ha2VOZXdBcmVhID0gbWFrZUh0bWxFbGVtZW50KFwiZGl2XCIsIHNlY3Rpb24sIHsgY2xhc3NlczogXCJtYWtlLW5ld1wiIH0pO1xyXG4gICAgdmFyIHRvZG9BcmVhID0gbWFrZUh0bWxFbGVtZW50KFwiZGl2XCIsIHNlY3Rpb24sIHsgY2xhc3NlczogXCJ0b2RvLWFyZWFcIiB9KTtcclxuICAgIGRyYXdNYWtlTmV3KGN1cnJlbnRUb2Rvcyk7XHJcbiAgICBjdXJyZW50VG9kb3MuZ2V0VG9kb3MoKS5mb3JFYWNoKGZ1bmN0aW9uICh0b2RvKSB7XHJcbiAgICAgICAgY3JlYXRlVG9kbyh0b2RvLCBjdXJyZW50VG9kb3MpO1xyXG4gICAgICAgIC8vIGxldCB0b2RvRWxlID0gbWFrZUh0bWxFbGVtZW50KFwiZGl2XCIsdG9kb1NlY3Rpb24se2NsYXNzZXM6XCJ0b2RvLWVsZVwifSlcclxuICAgICAgICAvLyBsZXQgY2hlY2sgPSBtYWtlSHRtbEVsZW1lbnQoXCJpbnB1dFwiLHRvZG9FbGUse2NsYXNzZXM6XCJjaGVja1wiLHR5cGU6XCJjaGVja2JveFwifSlcclxuICAgICAgICAvLyBtYWtlVG9nZ2FibGVUZXh0Qm94KHRvZG8uZ2V0VGl0bGUoKSxcInRpdGxlLVwiK3RvZG8uZ2V0SWQoKSx0b2RvRWxlLFwidG9kby1uYW1lXCIsXHJcbiAgICAgICAgLy8ge1xyXG4gICAgICAgIC8vICAgICB0eXBlOlwiY2xpY2tcIixcclxuICAgICAgICAvLyAgICAgZnVuYzooKT0+ZW5hYmxlVGV4dChcInRpdGxlLVwiK3RvZG8uZ2V0SWQoKSwodmFsdWU6YW55KT0+dG9kby5zZXRUaXRsZSh2YWx1ZSkpXHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICAvLyBtYWtlVG9nZ2FibGVUZXh0Qm94KHRvZG8uZ2V0RGVzY3JpcHRpb24oKSxcImRlc2NyLVwiK3RvZG8uZ2V0SWQoKSx0b2RvRWxlLFwiZGVzY3IgdGl0bGVcIixcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIHR5cGU6XCJjbGlja1wiLFxyXG4gICAgICAgIC8vICAgICBmdW5jOigpPT5lbmFibGVUZXh0KFwiZGVzY3ItXCIrdG9kby5nZXRJZCgpLCh2YWx1ZTphbnkpPT50b2RvLnNldFRpdGxlKHZhbHVlKSlcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIC8vIGNoZWNrLm9uY2xpY2sgPShlOmFueSk9PlxyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgICAgdG9kby5zZXRPcHRpb25zKFwiY2hlY2tWYWx1ZVwiLCF0b2RvLmdldE9wdGlvbnMoXCJjaGVja1ZhbHVlXCIpKVxyXG4gICAgICAgIC8vICAgICAvLyg8SFRNTEVsZW1lbnQ+ZS50YXJnZXQuY2hlY2tlZClcclxuICAgICAgICAvLyAgICAgaWYgKCF0b2RvLmdldE9wdGlvbnMoXCJjaGVja1ZhbHVlXCIpKXtcclxuICAgICAgICAvLyAgICAgKDxIVE1MRWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3R4dGJveC10aXRsZS1cIit0b2RvLmdldElkKCkgKyBcIiBpbnB1dFwiKSkuc3R5bGUudGV4dERlY29yYXRpb24gPVwibGluZS10aHJvdWdoXCI7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICAgICAgLy8gfWVsc2V7XHJcbiAgICAgICAgLy8gICAgICg8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0eHRib3gtdGl0bGUtXCIrdG9kby5nZXRJZCgpICsgXCIgaW5wdXRcIikpLnN0eWxlLnRleHREZWNvcmF0aW9uID1cIm5vbmVcIjtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfSk7XHJcbn0pO1xyXG52YXIgdG9kbyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIHRvZG8odGl0bGUsIGRlc2NpcHRpb24sIG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAodGl0bGUgPT09IHZvaWQgMCkgeyB0aXRsZSA9IFwiXCI7IH1cclxuICAgICAgICBpZiAoZGVzY2lwdGlvbiA9PT0gdm9pZCAwKSB7IGRlc2NpcHRpb24gPSBcIlwiOyB9XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5kZXNjaXB0aW9uID0gZGVzY2lwdGlvbjtcclxuICAgICAgICB0aGlzLm9wdGlvbiA9IG9wdGlvbnM7XHJcbiAgICAgICAgdGhpcy5pZCA9IFwiXCIgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgIH1cclxuICAgIHRvZG8ucHJvdG90eXBlLmdldFByb3BzID0gZnVuY3Rpb24gKG9iaiwgbmFtZSkge1xyXG4gICAgICAgIHJldHVybiBvYmpbbmFtZV07XHJcbiAgICB9O1xyXG4gICAgdG9kby5wcm90b3R5cGUuc2V0UHJvcHMgPSBmdW5jdGlvbiAob2JqLCBuYW1lLCB2YWx1ZSkge1xyXG4gICAgICAgIG9ialtuYW1lXSA9IHZhbHVlO1xyXG4gICAgfTtcclxuICAgIHRvZG8ucHJvdG90eXBlLmdldE9wdGlvbnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gdGhpcy5vcHRpb25bbmFtZV07IH07XHJcbiAgICB0b2RvLnByb3RvdHlwZS5nZXRUaXRsZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMudGl0bGU7IH07XHJcbiAgICB0b2RvLnByb3RvdHlwZS5nZXREZXNjcmlwdGlvbiA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuZGVzY2lwdGlvbjsgfTtcclxuICAgIHRvZG8ucHJvdG90eXBlLmdldElkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5pZDsgfTtcclxuICAgIHRvZG8ucHJvdG90eXBlLnNldE9wdGlvbnMgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldFByb3BzKHRoaXMub3B0aW9uLCBuYW1lLCB2YWx1ZSk7XHJcbiAgICB9O1xyXG4gICAgdG9kby5wcm90b3R5cGUuc2V0VGl0bGUgPSBmdW5jdGlvbiAodGl0bGUpIHtcclxuICAgICAgICBpZiAoIXRpdGxlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgfTtcclxuICAgIHRvZG8ucHJvdG90eXBlLnNldERlc2NyaXB0aW9uID0gZnVuY3Rpb24gKHRleHQpIHtcclxuICAgICAgICB0aGlzLmRlc2NpcHRpb24gPSB0ZXh0O1xyXG4gICAgfTtcclxuICAgIHRvZG8ucHJvdG90eXBlLmFkZE5vdGUgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgICAgIHZhciBub3RlID0ge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICBpZDogXCJcIiArIG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbi5ub3Rlcykge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbi5ub3RlcyA9IFtub3RlXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9uLm5vdGVzLnB1c2gobm90ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBub3RlO1xyXG4gICAgfTtcclxuICAgIHRvZG8ucHJvdG90eXBlLmRlbGV0ZU5vdGUgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICB0aGlzLm9wdGlvbi5ub3RlcyA9IHRoaXMub3B0aW9uLm5vdGVzLmZpbHRlcihmdW5jdGlvbiAobm90ZSkgeyByZXR1cm4gbm90ZS5pZCAhPT0gaWQ7IH0pO1xyXG4gICAgfTtcclxuICAgIHRvZG8ucHJvdG90eXBlLmZyb21TdHJpbmdpZnkgPSBmdW5jdGlvbiAoaW5wKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IGlucC50aXRsZTtcclxuICAgICAgICB0aGlzLmlkID0gaW5wLmlkO1xyXG4gICAgICAgIHRoaXMub3B0aW9uID0gaW5wLm9wdGlvbjtcclxuICAgICAgICB0aGlzLmRlc2NpcHRpb24gPSBpbnAuZGVzY3JpcHRpb247XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHRvZG87XHJcbn0oKSk7XHJcbnZhciBUb2Rvc01vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVG9kb3NNb2RlbChuYW1lKSB7XHJcbiAgICAgICAgdGhpcy50b2RvcyA9IFtdO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5pZCA9IFwiXCIgKyBuYW1lLmxlbmd0aCArIFwiLVwiICsgbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICB9XHJcbiAgICBUb2Rvc01vZGVsLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAodG9kbykge1xyXG4gICAgICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKTtcclxuICAgIH07XHJcbiAgICBUb2Rvc01vZGVsLnByb3RvdHlwZS5yZW1vdmVJbmRleCA9IGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgIHRoaXMudG9kb3MgPSBfX3NwcmVhZEFycmF5KF9fc3ByZWFkQXJyYXkoW10sIHRoaXMudG9kb3Muc3BsaWNlKDAsIGluZGV4KSksIHRoaXMudG9kb3Muc3BsaWNlKGluZGV4ICsgMSkpO1xyXG4gICAgfTtcclxuICAgIFRvZG9zTW9kZWwucHJvdG90eXBlLnJlbW92ZUJ5SWQgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICB0aGlzLnRvZG9zID0gdGhpcy50b2Rvcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW0uZ2V0SWQoKSAhPT0gaWQ7IH0pO1xyXG4gICAgfTtcclxuICAgIFRvZG9zTW9kZWwucHJvdG90eXBlLnJlbW92ZUJ5VG9kbyA9IGZ1bmN0aW9uICh0b2RvKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVCeUlkKHRvZG8uZ2V0SWQoKSk7XHJcbiAgICB9O1xyXG4gICAgVG9kb3NNb2RlbC5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnRvZG9zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGNvbnNvbGUubG9nKGl0ZW0uZ2V0VGl0bGUoKSk7IH0pO1xyXG4gICAgfTtcclxuICAgIFRvZG9zTW9kZWwucHJvdG90eXBlLmdldE5hbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH07XHJcbiAgICBUb2Rvc01vZGVsLnByb3RvdHlwZS5zZXROYW1lID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICBpZiAoIW5hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgfTtcclxuICAgIFRvZG9zTW9kZWwucHJvdG90eXBlLmdldElkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xyXG4gICAgfTtcclxuICAgIFRvZG9zTW9kZWwucHJvdG90eXBlLmdldFRvZG9zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvZG9zO1xyXG4gICAgfTtcclxuICAgIFRvZG9zTW9kZWwucHJvdG90eXBlLmZyb21TdHJpbmdpZnkgPSBmdW5jdGlvbiAoaW5wKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gaW5wLm5hbWU7XHJcbiAgICAgICAgdGhpcy50b2RvcyA9IGlucC50b2Rvcy5tYXAoZnVuY3Rpb24gKHRkKSB7IGlmICh0ZClcclxuICAgICAgICAgICAgbmV3IHRvZG8oXCJcIiwgXCJcIiwge30pLmZyb21TdHJpbmdpZnkodGQpOyB9KTtcclxuICAgICAgICB0aGlzLmlkID0gaW5wLmlkO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBUb2Rvc01vZGVsO1xyXG59KCkpO1xyXG52YXIgdGFibGUgPSBuZXcgVG9kb3NNb2RlbChcInRob3VnaHRzXCIpO1xyXG50YWJsZS5hZGQobmV3IHRvZG8oXCJ0aXJlZFwiLCBcImhpXCIsIHsgZHVlRGF0ZTogXCJKdWwxMFwiLFxyXG4gICAgbm90ZXM6IFt7IG1lc3NhZ2U6IFwiaW0gZ29pbmcgdGhlcmUgc29vbiFcIiwgaWQ6IFwibm90ZS0wMDFcIiB9XVxyXG59KSk7XHJcbnZhciB0YWJsZTIgPSBuZXcgVG9kb3NNb2RlbChcIkZvb2RzXCIpO1xyXG50YWJsZTIuYWRkKG5ldyB0b2RvKFwiaGlcIiwgXCJoaVwiLCB7IGR1ZURhdGU6IFwiSnVsMTBcIixcclxuICAgIG5vdGVzOiBbeyBtZXNzYWdlOiBcImltIGdvaW5nIHRoZXJlIHNvb24hXCIsIGlkOiBcIm5vdGUtMDAyXCIgfV1cclxufSkpO1xyXG52YXIgYWxsVG9kb3MgPSBbdGFibGUsIHRhYmxlMl07XHJcbi8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWxsVG9kb3NcIixcIltdXCIpXHJcbmZ1bmN0aW9uIGNoYW5nZU5hbWVTaWRlYmFyKGlkLCB2YWx1ZSkge1xyXG4gICAgdmFyIHNpZGViYXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaWRlYmFyVG9kb05hbWUtXCIgKyBpZCArIFwiIC5iYXItdGl0bGUtdGV4dFwiKTtcclxuICAgIGlmICghc2lkZWJhck5hbWUpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBzaWRlYmFyTmFtZS50ZXh0Q29udGVudCA9IHZhbHVlO1xyXG59XHJcbmZ1bmN0aW9uIGNsZWFyQ29udGVudCgpIHtcclxuICAgIHZhciBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gICAgd2hpbGUgKGNvbnRlbnQubGFzdENoaWxkKSB7XHJcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50Lmxhc3RDaGlsZCk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gcmVtb3ZlVG9kb3MoaWQpIHtcclxuICAgIGFsbFRvZG9zID0gYWxsVG9kb3MuZmlsdGVyKGZ1bmN0aW9uICh0b2RvcykgeyByZXR1cm4gdG9kb3MuZ2V0SWQoKSAhPT0gaWQ7IH0pO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhbGxUb2Rvc1wiLCBKU09OLnN0cmluZ2lmeShhbGxUb2RvcykpO1xyXG59XHJcbnZhciBzaWRlYmFyVGl0bGVzID0gbWFrZUh0bWxFbGVtZW50KFwiZGl2XCIsIG51bGwsIHsgY2xhc3NlczogXCJzaWRlLWJhci10aXRsZXNcIiB9KTtcclxuYWxsVG9kb3MuZm9yRWFjaChmdW5jdGlvbiAodG9kb3MsIGluZGV4KSB7XHJcbiAgICB2YXIgaHRtbFRvZG9zID0gbWFrZUh0bWxFbGVtZW50KFwiZGl2XCIsIHNpZGViYXJUaXRsZXMsIHsgY2xhc3NlczogXCJiYXItdGl0bGUgXCIgKyAoIWluZGV4ID8gXCJzZWxcIiA6IFwidW5zZWxcIiksIGlkOiBcInNpZGViYXJUb2RvTmFtZS1cIiArIHRvZG9zLmdldElkKCkgfSk7XHJcbiAgICB2YXIgdGV4dCA9IG1ha2VIdG1sRWxlbWVudChcImRpdlwiLCBodG1sVG9kb3MsIHsgY2xhc3NlczogXCJiYXItdGl0bGUtdGV4dFwiLCB0ZXh0OiB0b2Rvcy5nZXROYW1lKCkgfSk7XHJcbiAgICB2YXIgZGVsID0gbWFrZUh0bWxFbGVtZW50KFwiaVwiLCBodG1sVG9kb3MsIHsgY2xhc3NlczogXCJiaSBiaS10cmFzaDItZmlsbFwiIH0pO1xyXG4gICAgaHRtbFRvZG9zLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5ub2RlTmFtZSA9PT0gXCJJXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvblRvZG9zVmlldyh0b2Rvcyk7XHJcbiAgICAgICAgcmVtb3ZlU2VsQ2xhc3MoKTtcclxuICAgICAgICBodG1sVG9kb3MuY2xhc3NMaXN0LnJlcGxhY2UoXCJ1bnNlbFwiLCBcInNlbFwiKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfSwgdHJ1ZSk7XHJcbiAgICBkZWwub25jbGljayA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgcmVtb3ZlVG9kb3ModG9kb3MuZ2V0SWQoKSk7XHJcbiAgICAgICAgdmFyIGVsZSA9IHNpZGViYXJUaXRsZXMucmVtb3ZlQ2hpbGQoaHRtbFRvZG9zKTtcclxuICAgICAgICBpZiAoZWxlLmNsYXNzTGlzdC5jb250YWlucyhcInNlbFwiKSkge1xyXG4gICAgICAgICAgICBpZiAoYWxsVG9kb3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGdyYWJiZWRFbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJhci10aXRsZVwiKVswXTtcclxuICAgICAgICAgICAgICAgIGdyYWJiZWRFbGUuY2xpY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyQ29udGVudCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSk7XHJcbnZhciBuZXdUb2Rvc0lucHV0ID0gbWFrZUh0bWxFbGVtZW50KFwiZGl2XCIsIHNpZGViYXIsIHsgY2xhc3NlczogXCJtYWtlLW5ldy10b2Rvc1wiLCBjaGlsZHJlbjogW1tcImlucHV0XCIsIHt9XSxcclxuICAgIF0gfSk7XHJcbmZ1bmN0aW9uIHJlbW92ZVNlbENsYXNzKCkge1xyXG4gICAgdmFyIHNpZGViYXJUaXRsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGUtYmFyLXRpdGxlc1wiKTtcclxuICAgIHNpZGViYXJUaXRsZXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7IHJldHVybiBub2RlLmNsYXNzTGlzdC5yZXBsYWNlKFwic2VsXCIsIFwidW5zZWxcIik7IH0pO1xyXG59XHJcbnZhciBuZXdUb2Rvc0J0biA9IG1ha2VIdG1sRWxlbWVudChcImlcIiwgbmV3VG9kb3NJbnB1dCwgeyBjbGFzc2VzOiBcImJpIGJpLXBsdXMtc3F1YXJlLWZpbGxcIiB9KTtcclxubmV3VG9kb3NCdG4ub25jbGljayA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1ha2UtbmV3LXRvZG9zIGlucHV0XCIpO1xyXG4gICAgaWYgKCFpbnB1dC52YWx1ZSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciB0b2RvcyA9IG5ldyBUb2Rvc01vZGVsKGlucHV0LnZhbHVlKTtcclxuICAgIGFsbFRvZG9zLnB1c2godG9kb3MpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhbGxUb2Rvc1wiLCBKU09OLnN0cmluZ2lmeShhbGxUb2RvcykpO1xyXG4gICAgdmFyIGh0bWxUb2RvcyA9IG1ha2VIdG1sRWxlbWVudChcImRpdlwiLCBzaWRlYmFyVGl0bGVzLCB7IGNsYXNzZXM6IFwiYmFyLXRpdGxlIHVuc2VsXCIsIHRleHQ6IHRvZG9zLmdldE5hbWUoKSwgaWQ6IFwic2lkZWJhclRvZG9OYW1lLVwiICsgdG9kb3MuZ2V0SWQoKSB9KTtcclxuICAgIHZhciBkZWwgPSBtYWtlSHRtbEVsZW1lbnQoXCJpXCIsIGh0bWxUb2RvcywgeyBjbGFzc2VzOiBcImJpIGJpLXRyYXNoMi1maWxsXCIgfSk7XHJcbiAgICBodG1sVG9kb3MuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgb25Ub2Rvc1ZpZXcodG9kb3MpO1xyXG4gICAgICAgIHJlbW92ZVNlbENsYXNzKCk7XHJcbiAgICAgICAgaHRtbFRvZG9zLmNsYXNzTGlzdC5yZXBsYWNlKFwidW5zZWxcIiwgXCJzZWxcIik7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH0sIGZhbHNlKTtcclxuICAgIGRlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICByZW1vdmVUb2Rvcyh0b2Rvcy5nZXRJZCgpKTtcclxuICAgICAgICBzaWRlYmFyVGl0bGVzLnJlbW92ZUNoaWxkKGh0bWxUb2Rvcyk7XHJcbiAgICAgICAgY2xlYXJDb250ZW50KCk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH0sIGZhbHNlKTtcclxufTtcclxuc2lkZWJhci5hcHBlbmQoc2lkZWJhclRpdGxlcyk7XHJcbnZhciBkID0gbmV3IERhdGUoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==