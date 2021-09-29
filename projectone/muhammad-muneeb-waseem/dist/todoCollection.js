"use strict";
//Collections of items (array)
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoCollection = void 0;
const todo_1 = require("./todo");
class TodoCollection {
    //constructor
    constructor(userName, items = []) {
        this.userName = userName;
        this.items = items;
        //variable
        this.nextId = 1;
        this.itemMap = new Map();
        //mapping todoitems to dictionary for storing purpose
        items.forEach((item) => this.itemMap.set(item.taskId, item));
    }
    //methods
    addTodo(task) {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        let item = new todo_1.Todo(this.nextId, task);
        this.itemMap.set(this.nextId, item);
        return this.nextId;
    }
    getTodoById(id) {
        return this.itemMap.get(id);
    }
    getTodoByStatus(complete) {
        return [...this.itemMap.values()].filter((item) => item.done === complete);
    }
    markComplete(id, complete) {
        let item = this.getTodoById(id);
        if (item) {
            item.done = complete;
        }
    }
    deleteComplete() {
        this.itemMap.forEach(item => {
            if (item.done) {
                this.itemMap.delete(item.taskId);
            }
        });
    }
    getTodoCounts() {
        return {
            total: this.itemMap.size,
            incomplete: this.getTodoByStatus(false).length,
            complete: this.getTodoByStatus(true).length
        };
    }
}
exports.TodoCollection = TodoCollection;
