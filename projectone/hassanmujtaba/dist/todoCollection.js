"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoCollection = void 0;
const todoItems_1 = require("./todoItems");
class TodoCollection {
    constructor(items = []) {
        this.items = items;
        this.nextId = 1;
    }
    addTodos(item) {
        this.items.push(new todoItems_1.TodoItems(this.nextId, item, false));
        return this.nextId++;
    }
    printAll() {
        this.items.forEach(item => item.printTask());
    }
    printSelectedItem(id) {
        let item = this.items.find(item => item.id == id);
        item.printTask();
    }
    getItem(id) {
        return this.items.find(item => item.id == id);
    }
    taskDone(id) {
        this.getItem(id).status = true;
    }
    EditTask(id, task) {
        this.getItem(id).task = task;
    }
}
exports.TodoCollection = TodoCollection;
