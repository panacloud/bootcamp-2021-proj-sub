"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItems = void 0;
class TodoItems {
    constructor(id, task, status) {
        this.id = id;
        this.task = task;
        this.status = status;
    }
    printTask() {
        console.log(`${this.id}\t${this.task}\t ${this.status}`);
    }
}
exports.TodoItems = TodoItems;
