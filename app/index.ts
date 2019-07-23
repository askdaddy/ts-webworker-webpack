import MyWorker = require("worker-loader?name=dist/[name].js!../worker");
class IOManager {
    performIO() {
        let worker = new MyWorker();
        worker.onmessage = (ev: MessageEvent) => {
            console.log(ev.data);
            worker.terminate();
        };
        worker.postMessage('hello worker!');
    }
}

const app = new IOManager();
export = app;
