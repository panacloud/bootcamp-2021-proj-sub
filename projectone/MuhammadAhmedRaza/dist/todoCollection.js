"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoCollection = void 0;
const todoItem_1 = require("./todoItem");
class TodoCollection {
    constructor(userName, todoItems = []) {
        this.userName = userName;
        this.todoItems = todoItems;
        //Map Dictionary like (key, value)
        this.itemMap = new Map();
        this.nextId = 1;
        todoItems.forEach(item => this.itemMap.set(item.id, item));
    }
    getTodoByID(id) {
        return this.itemMap.get(id);
    }
    addTodo(task) {
        while (this.getTodoByID(this.nextId)) {
            this.nextId++;
        }
        this.itemMap.set(this.nextId, new todoItem_1.TodoItem(this.nextId, task));
        return this.nextId;
    }
    markComplete(id, complete) {
        const todoItem = this.getTodoByID(id);
        if (todoItem) {
            todoItem.complete = complete;
        }
    }
    //Providing Access to To-Do Items
    getTodoItems(includeComplete) {
        return [...this.itemMap.values()]
            .filter(item => includeComplete || !item.complete);
    }
    //Removing complete true
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
}
exports.TodoCollection = TodoCollection;
