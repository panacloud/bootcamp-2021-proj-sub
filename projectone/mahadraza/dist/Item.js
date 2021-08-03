"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
class Item {
    constructor(taskId, task, Complete) {
        this.taskId = taskId;
        this.task = task;
        this.Complete = Complete;
    }
    printTasks() {
        console.log(`TaskTd: ${this.taskId}, \tTask: ${this.task}, \tComplete: ${this.Complete}`);
    }
}
exports.Item = Item;
