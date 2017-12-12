export abstract class Reader {
    abstract read(): string;
}

export class PromptReader {
    read(): string {
        return window.prompt("What is your input?") || "";
    }
}
