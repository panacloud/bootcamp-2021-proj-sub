"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todocollection = void 0;
const todoItem_1 = require("./todoItem");
class Todocollection {
    constructor(userName, todoitems = []) {
        this.userName = userName;
        this.todoitems = todoitems;
        this.nextid = 1;
        this.itemMap = new Map();
        todoitems.forEach(item => this.itemMap.set(item.id, item));
    }
    addTodo(task) {
        while (this.getTodoById(this.nextid)) {
            this.nextid++;
        }
        //this.todoitems.push(new Todoitem(this.nextid, task));
        this.itemMap.set(this.nextid, new todoItem_1.Todoitem(this.nextid, task));
        return this.nextid;
    }
    getTodoById(id) {
        //return this.todoitems.find(item => item.id == id);
        return this.itemMap.get(id);
    }
    getTodoItems(includeComplete) {
        return [...this.itemMap.values()].filter(item => includeComplete || !item.complete);
    }
    markComplete(id, complete) {
        const todoItem = this.getTodoById(id);
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
    getItemCounts() {
        return {
            total: this.itemMap.size,
            incomplete: this.getTodoItems(false).length
        };
    }
}
exports.Todocollection = Todocollection;
