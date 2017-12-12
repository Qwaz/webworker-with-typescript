(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["magicIO"] = factory();
	else
		root["magicIO"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return webpackJsonp_name_([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const printer_1 = __webpack_require__(2);
const reader_1 = __webpack_require__(3);
const dictionary_1 = __webpack_require__(0);
class IOManager {
    constructor(reader, printer) {
        this.reader = reader;
        this.printer = printer;
    }
    performIO() {
        let worker = new Worker("dist/worker.js");
        let message = this.reader.read();
        if (dictionary_1.validLanguage(message)) {
            worker.onmessage = (ev) => {
                this.printer.print(ev.data);
                worker.terminate();
            };
            worker.postMessage(message);
        }
        else {
            this.printer.print("This message is invalid");
        }
    }
}
const magicIO = new IOManager(new reader_1.PromptReader(), new printer_1.AlertPrinter());
module.exports = magicIO;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Printer {
}
exports.Printer = Printer;
class AlertPrinter {
    print(str) {
        window.alert(str);
    }
}
exports.AlertPrinter = AlertPrinter;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Reader {
}
exports.Reader = Reader;
class PromptReader {
    read() {
        return window.prompt("What is your input?") || "";
    }
}
exports.PromptReader = PromptReader;


/***/ })
],[1]);
});