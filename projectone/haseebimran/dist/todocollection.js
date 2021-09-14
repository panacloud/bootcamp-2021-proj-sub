"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todocollection = void 0;
const todoitem_1 = require("./todoitem");
class todocollection {
    constructor(userName, todoitems = []) {
        this.userName = userName;
        this.todoitems = todoitems;
        this.nextId = 1;
        this.itemMap = new Map();
        todoitems.forEach(item => this.itemMap.set(item.id, item));
    }
    addTodo(task) {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        this.todoitems.push(new todoitem_1.Todoitem(this.nextId, task));
        return this.nextId;
    }
    getTodoById(id) {
        return this.itemMap.get(id);
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
exports.todocollection = todocollection;
