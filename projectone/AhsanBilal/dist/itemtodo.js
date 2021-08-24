"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemtodo = void 0;
class itemtodo {
    constructor(id, task, complete = false) {
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    printdetails() {
        console.log(`${this.id}     ${this.task}      ${this.complete}`);
    }
}
exports.itemtodo = itemtodo;
