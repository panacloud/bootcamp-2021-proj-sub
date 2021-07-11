"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemTodo = void 0;
class itemTodo {
    constructor(id, task, isCompleted) {
        this.id = id;
        this.task = task;
        this.isCompleted = isCompleted;
        this.id = id;
        this.task = task;
        this.isCompleted = isCompleted;
    }
    printDetails() {
        console.log(`${this.id}\t${this.task}\t${this.isCompleted}`);
    }
}
exports.itemTodo = itemTodo;
