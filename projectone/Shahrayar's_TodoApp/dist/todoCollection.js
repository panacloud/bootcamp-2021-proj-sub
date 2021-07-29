"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoCollection = void 0;
const todoItem_1 = require("./todoItem");
class TodoCollection {
    constructor(userName, todoItems = []) {
        this.userName = userName;
        this.todoItems = todoItems;
        this.itemId = 1;
        this.itemMap = new Map();
        this.todoItems.forEach((item) => this.itemMap.set(item.id, item));
    }
    getItemsCount() {
        return {
            total: this.itemMap.size,
            incomplete: this.getTodoItems(false).length,
        };
    }
    removeComplete() {
        this.itemMap.forEach((item) => {
            if (item.complete)
                this.itemMap.delete(item.id);
        });
    }
    getTodoItems(inculdeComplete) {
        return [...this.itemMap.values()].filter((item) => !item.complete || inculdeComplete);
    }
    addTodo(task) {
        while (this.getTodoById(this.itemId)) {
            this.itemId++;
        }
        this.itemMap.set(this.itemId, new todoItem_1.TodoItem(this.itemId, task));
        return this.itemId;
    }
    getTodoById(id) {
        return this.itemMap.get(id);
    }
    markComplete(id, complete) {
        const item = this.getTodoById(id);
        if (item) {
            item.complete = complete;
        }
    }
}
exports.TodoCollection = TodoCollection;
