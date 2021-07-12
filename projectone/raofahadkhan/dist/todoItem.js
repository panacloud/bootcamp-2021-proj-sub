"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItem = void 0;
class TodoItem {
    constructor(id, task, complete = false) {
        this.id = id;
        this.task = task;
        this.complete = complete;
        // no code required because of typescripts concise code syntax
    }
    printDetails() {
        console.log(`${this.id}\t${this.task}\t ${this.complete ? "\t(complete)" : ""} `);
    }
}
exports.TodoItem = TodoItem;
