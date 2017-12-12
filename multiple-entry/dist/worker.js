var window = self;importScripts("./common.js");
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["worker"] = factory();
	else
		root["worker"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return webpackJsonp_name_([1],{

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const dictionary_1 = __webpack_require__(0);
const ctx = self;
// Respond to message from parent thread
ctx.onmessage = (ev) => {
    let message = ev.data;
    for (let word of dictionary_1.badWords) {
        message = message.replace(new RegExp(word, "gi"), "*".repeat(word.length));
    }
    ctx.postMessage(message);
};
function hello() {
    return false;
}
exports.hello = hello;


/***/ })

},[4]);
});