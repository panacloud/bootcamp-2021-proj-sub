"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItem = void 0;
class TodoItem {
    // public id: number;
    // public task: string;
    // public complete: boolean = false;
    //concise constructor syntax
    constructor(id, task, complete = false) {
        this.id = id;
        this.task = task;
        this.complete = complete;
        // this.id = id;
        // this.task = task;
        // this.complete = complete;
    }
    // by default public
    printDetails() {
        console.log(`${this.id} \t ${this.task} \t 
                ${this.complete ? "complete" : ""}`);
    }
}
exports.TodoItem = TodoItem;
