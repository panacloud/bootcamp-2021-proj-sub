"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoCollection = void 0;
const todoitems_1 = require("./todoitems");
class TodoCollection {
    constructor(username, todoItems = []) {
        this.username = username;
        this.todoItems = todoItems;
        this.nextId = 1;
        this.itemMap = new Map();
        todoItems.forEach(item => this.itemMap.set(item.id, item));
    }
    addTodo(task) {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        // this.todoItems.push(new TodoItem(this.nextId, task))
        this.itemMap.set(this.nextId, new todoitems_1.TodoItem(this.nextId, task));
        return this.nextId;
    }
    getTodoById(taskId) {
        // return this.todoItems.find(item => item.id === taskId)
        return this.itemMap.get(taskId);
    }
    getTodoItems(includeComplete) {
        return [...this.itemMap.values()]
            .filter(item => includeComplete || !item.complete);
    }
    markComplete(id, complete) {
        const todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.complete = complete;
        }
    }
}
exports.TodoCollection = TodoCollection;
