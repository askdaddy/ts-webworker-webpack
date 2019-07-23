const ctx: Worker = self as any;

ctx.onmessage = ev => {
    let msg: string = ev.data;
    console.log(`I am the worker: ${msg}`);
    ctx.postMessage(`bot: hello boss.`);
};
