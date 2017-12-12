export abstract class Printer {
    abstract print(str: string): void;
}

export class AlertPrinter {
    print(str: string) {
        window.alert(str);
    }
}
