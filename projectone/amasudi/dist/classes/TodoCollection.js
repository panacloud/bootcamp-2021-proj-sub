"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoCollection = void 0;
const TodoItem_1 = require("./TodoItem");
class TodoCollection {
    constructor(items = []) {
        this.items = items;
        this.nextId = 1;
        this.itemsMap = new Map();
        items.forEach(item => this.itemsMap.set(item.id, item));
    }
    addTodo(item) {
        this.itemsMap.set(this.nextId, new TodoItem_1.TodoItem(this.nextId, item, false));
        return this.nextId++;
    }
    printAll(completeOrNot = null) {
        console.log(`ID\tTask\t\tCompleted\n=========================================`);
        let filteredItems = this.getAllItems(completeOrNot);
        if (filteredItems.length)
            filteredItems.forEach((item) => item.printDetails());
        else
            console.log("No items found.");
    }
    getTodo(id) {
        return this.itemsMap.get(id);
    }
    removeTodo(id) {
        this.itemsMap.delete(id);
    }
    markComplete(id, complete) {
        this.itemsMap.get(id).complete = complete;
    }
    getAllItems(completeOrNot = null) {
        return (completeOrNot != null) ? [...this.itemsMap.values()].filter(item => item.complete == completeOrNot) : [...this.itemsMap.values()];
    }
    removeTodos(completeOrNot = null) {
        if (completeOrNot != null) {
            this.itemsMap.forEach(item => {
                if (item.complete == completeOrNot) {
                    this.itemsMap.delete(item.id);
                }
            });
        }
        else {
            this.itemsMap = new Map();
        }
    }
    getTodoCount() {
        return {
            total: this.itemsMap.size,
            inCompleted: this.getAllItems(false).length,
            completed: this.getAllItems(true).length
        };
    }
}
exports.TodoCollection = TodoCollection;
