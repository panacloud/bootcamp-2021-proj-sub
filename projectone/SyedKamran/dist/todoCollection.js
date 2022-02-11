"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoCollecton = void 0;
const todoitem_1 = require("./todoitem");
class TodoCollecton {
    constructor(userName, todoItems) {
        this.userName = userName;
        this.todoItems = todoItems;
        this.nextId = 1;
        this.itemMap = new Map();
        todoItems.forEach(item => this.itemMap.set(item.id, item));
    }
    getTodoByID(id) {
        return this.itemMap.get(id);
    }
    markComplete(id, complete) {
        const todoItem = this.getTodoByID(id);
        if (todoItem) {
            todoItem.complete = complete;
        }
    }
    removeComplete() {
        this.itemMap.forEach(item => {
            if (item.complete) {
                this.itemMap.delete(item.id);
            }
        });
    }
    addTodo(task) {
        while (this.getTodoByID(this.nextId)) {
            this.nextId++;
        }
        this.itemMap.set(this.nextId, new todoitem_1.TodoItem(this.nextId, task));
        return this.nextId;
    }
    getTodoItems(includeComplete) {
        return [...this.itemMap.values()]
            .filter(item => includeComplete || !item.complete);
    }
    getItemsCount() {
        return {
            totol: this.itemMap.size,
            incomplete: this.getTodoItems(false).length
        };
    }
}
exports.TodoCollecton = TodoCollecton;
