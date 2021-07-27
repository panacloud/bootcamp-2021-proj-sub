"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoCollection = void 0;
const TodoItems_1 = require("./TodoItems");
class TodoCollection {
    constructor(userName, todoItems = []) {
        this.userName = userName;
        this.todoItems = todoItems;
        this.NextId = 1;
        this.itemMap = new Map();
        todoItems.forEach(item => this.itemMap.set(item.id, item));
    }
    addTodo(task) {
        while (this.getTodoById(this.NextId)) {
            this.NextId++;
        }
        this.itemMap.set(this.NextId, new TodoItems_1.TodoItem(this.NextId, task));
        return this.NextId;
    }
    getTodoItems(includeComplete) {
        return [...this.itemMap.values()].filter(item => includeComplete || !item.complete);
    }
    getTodoById(id) {
        return this.itemMap.get(id);
    }
    markComplete(id, complete) {
        const todoitem = this.getTodoById(id);
        if (todoitem) {
            todoitem.complete = complete;
            return true;
        }
        else {
            return false;
        }
    }
    removeComplete() {
        this.itemMap.forEach(item => {
            if (item.complete) {
                this.itemMap.delete(item.id);
            }
        });
    }
    getItemCounts() {
        return {
            total: this.itemMap.size,
            incomplete: this.getTodoItems(false).length
        };
    }
    removeById(id) {
        this.itemMap.forEach(item => {
            if (item.id === id) {
                this.itemMap.delete(id);
            }
        });
    }
}
exports.TodoCollection = TodoCollection;
