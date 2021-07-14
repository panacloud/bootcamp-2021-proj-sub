"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoCollection = void 0;
const todoItem_1 = require("./todoItem");
class TodoCollection {
    constructor(userName, todoItems = []) {
        this.userName = userName;
        this.todoItems = todoItems;
        this.nextId = 1;
        this.itemMap = new Map();
        this.todoItems.forEach(item => this.itemMap.set(item.id, item));
    }
    getItemsCount() {
        return {
            total: this.itemMap.size,
            incomplete: this.getTodoItems(false).length
        };
    }
    removeComplete() {
        this.itemMap.forEach(item => {
            if (item.complete)
                this.itemMap.delete(item.id);
        });
    }
    getTodoItems(inculdeComplete) {
        return [...this.itemMap.values()].filter(item => !item.complete || inculdeComplete);
    }
    addTodo(task) {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        this.itemMap.set(this.nextId, new todoItem_1.TodoItem(this.nextId, task));
        return this.nextId;
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
