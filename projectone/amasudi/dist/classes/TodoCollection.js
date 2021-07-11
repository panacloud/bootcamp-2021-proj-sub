"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoCollection = void 0;
const TodoItem_1 = require("./TodoItem");
class TodoCollection {
    constructor(items = []) {
        this.items = items;
        this.nextId = 1;
        this.itemsMap = new Map();
        this.addTodo = (item) => {
            this.itemsMap.set(this.nextId, new TodoItem_1.TodoItem(this.nextId, item, false));
            return this.nextId++;
        };
        this.printAll = (completeOrNot = null) => {
            let filteredItems = this.getAllItems(completeOrNot);
            filteredItems.forEach((item) => item.printDetails());
        };
        this.getItem = (id) => {
            return this.itemsMap.get(id);
        };
        this.taskDone = (id) => {
            this.itemsMap.get(id).complete = true;
        };
        this.getAllItems = (completeOrNot = null) => {
            return (completeOrNot != null) ? [...this.itemsMap.values()].filter(item => item.complete == completeOrNot) : [...this.itemsMap.values()];
        };
        items.forEach(item => this.itemsMap.set(item.id, item));
    }
}
exports.TodoCollection = TodoCollection;
