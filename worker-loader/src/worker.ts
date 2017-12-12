const ctx: Worker = self as any;

// Respond to message from parent thread
ctx.onmessage = (ev) => {
    let message: string = ev.data;
    message = message.replace(/fuck/gi, "****");
    ctx.postMessage(message);
};
