"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoCollection = void 0;
const TodoItem_1 = require("./TodoItem");
class TodoCollection {
    constructor(items = []) {
        this.items = items;
        this.nextId = 1;
        this.itemMap = new Map();
    }
    addTodo(items) {
        let item = new TodoItem_1.TodoItem(this.nextId, items, false);
        this.nextId++;
        this.items.push(item);
        this.itemMap.set(this.nextId, new TodoItem_1.TodoItem(this.nextId, items));
    }
    getTodoById(id) {
        return this.itemMap.get(id);
    }
    getTodoItems(includeComplete) {
        return [...this.itemMap.values()]
            .filter(item => includeComplete || !item.complete);
    }
    taskDone(id) {
        let item = this.items.find((item) => item.id == id);
        item.complete = true;
    }
    printAll() {
        this.items.forEach((item) => item.printDetails());
    }
}
exports.TodoCollection = TodoCollection;
