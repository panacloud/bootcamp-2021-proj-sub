"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItem = void 0;
class TodoItem {
    constructor(id, todo, complete = false) {
        this.id = id;
        this.todo = todo;
        this.complete = complete;
        this.printDetails = () => {
            console.log(`${this.id}\t${this.todo}\t\t${this.complete}`);
        };
    }
}
exports.TodoItem = TodoItem;
