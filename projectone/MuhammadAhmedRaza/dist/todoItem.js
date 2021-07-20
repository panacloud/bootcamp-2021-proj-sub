"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItem = void 0;
class TodoItem {
    constructor(id, task, complete = false) {
        this.id = id;
        this.task = task;
        this.complete = complete;
        //consice syntax 
    }
    printDetails() {
        console.log(`ID:${this.id} \tTask:${this.task}\tCompleted:${this.complete}`);
    }
}
exports.TodoItem = TodoItem;
