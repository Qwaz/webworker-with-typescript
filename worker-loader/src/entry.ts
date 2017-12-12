import {AlertPrinter, Printer} from "./printer";
import {PromptReader, Reader} from "./reader";
import MyWorker = require("worker-loader?name=dist/[name].js!./worker");

class IOManager {
    constructor(private reader: Reader, private printer: Printer) {
    }

    performIO() {
        let worker = new MyWorker();
        let message = this.reader.read();
        worker.onmessage = (ev: MessageEvent) => {
            this.printer.print(ev.data);
            worker.terminate();
        };
        worker.postMessage(message);
    }
}

const magicIO = new IOManager(new PromptReader(), new AlertPrinter());
export = magicIO;
