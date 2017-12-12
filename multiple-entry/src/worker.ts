import {badWords} from "./dictionary";

const ctx: Worker = self as any;

// Respond to message from parent thread
ctx.onmessage = (ev) => {
    let message: string = ev.data;
    for (let word of badWords) {
        message = message.replace(new RegExp(word, "gi"), "*".repeat(word.length));
    }
    ctx.postMessage(message);
};

export function hello() {
    return false;
}
