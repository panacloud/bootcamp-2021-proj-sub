"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItem = void 0;
class TodoItem {
    // No need to define variables in the start
    // Can be defined in the constructor
    constructor(id, task, complete = false) {
        this.id = id;
        this.task = task;
        this.complete = complete;
        // no statements required here
        // TS compiler will auto genrate these
    }
    // Method to display details of a todo item in the console
    printDetails() {
        console.log(`ID : ${this.id}\t\tTask : ${this.task}\t\tCompleted : ${this.complete ? "Yes" : "No"}`);
    }
}
exports.TodoItem = TodoItem;
