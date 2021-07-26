"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItem = void 0;
class TodoItem {
    constructor(taskId, task, complete = false) {
        this.taskId = taskId;
        this.task = task;
        this.complete = complete;
        // no statements required
    }
    printDetails() {
        console.log(`${this.taskId}\t${this.task} ${this.complete
            ? "\t(complete)" : ""}`);
    }
}
exports.TodoItem = TodoItem;
