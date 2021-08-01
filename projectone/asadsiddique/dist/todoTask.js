"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoTask = void 0;
class todoTask {
    constructor(id, task, isCompleted = false) {
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
exports.todoTask = todoTask;
