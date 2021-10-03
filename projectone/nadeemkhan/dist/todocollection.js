"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoCollection = void 0;
const todoitems_1 = require("./todoitems");
class TodoCollection {
    constructor(username, todoItems = []) {
        this.username = username;
        this.todoItems = todoItems;
        this.nextId = 1;
    }
    addTodo(task) {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        this.todoItems.push(new todoitems_1.TodoItem(this.nextId, task));
        return this.nextId;
    }
    getTodoById(taskId) {
        return this.todoItems.find(item => item.id === taskId);
    }
}
exports.TodoCollection = TodoCollection;
