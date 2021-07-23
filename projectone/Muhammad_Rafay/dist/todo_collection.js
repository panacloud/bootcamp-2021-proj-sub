"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoCollection = void 0;
const todo_item_1 = require("./todo_item");
class TodoCollection {
    constructor(items = []) {
        this.items = items;
        this.nextId = 1;
    }
    addTodo(item) {
        this.items.push(new todo_item_1.TodoItem(this.nextId, item, false));
        return this.nextId++;
    }
    printAll() {
        this.items.forEach((items) => items.printDetails());
    }
    getItem(id) {
        return this.items.find((item) => item.id == id);
    }
    taskDone(id) {
        this.getItem(id).complete = true;
    }
}
exports.TodoCollection = TodoCollection;
