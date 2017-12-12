import {AlertPrinter, Printer} from "./printer";
import {PromptReader, Reader} from "./reader";
import {validLanguage} from "./dictionary";

class IOManager {
    constructor(private reader: Reader, private printer: Printer) {
    }

    performIO() {
        let worker = new Worker("dist/worker.js");
        let message = this.reader.read();
        if (validLanguage(message)) {
            worker.onmessage = (ev: MessageEvent) => {
                this.printer.print(ev.data);
                worker.terminate();
            };
            worker.postMessage(message);
        } else {
            this.printer.print("This message is invalid");
        }
    }
}

const magicIO = new IOManager(new PromptReader(), new AlertPrinter());
export = magicIO;
