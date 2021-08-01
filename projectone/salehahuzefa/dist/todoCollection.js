"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoCollection = void 0;
const todoItem_1 = require("./todoItem");
class todoCollection {
    constructor(items = []) {
        this.items = items;
        this.nextId = 1;
        this.itemMap = new Map();
        items.forEach((item) => this.itemMap.set(item.id, item));
    }
    getItemCounts() {
        return {
            total: this.itemMap.size,
            incomplete: this.getToDoItems(false).length,
        };
    }
    addTodo(task) {
        while (this.getToDoById(this.nextId)) {
            this.nextId++;
        }
        this.itemMap.set(this.nextId, new todoItem_1.todoItem(this.nextId, task));
        //this.items.push(new todoItem(this.nextId, task, false));
        return this.nextId;
    }
    printAll() {
        // this.items.forEach((item)=>item.printDetails());
        this.itemMap.forEach((item) => item.printDetails());
    }
    getToDoById(id) {
        // return this.items.find((item)=>item.id == id);
        return this.itemMap.get(id);
    }
    markComplete(id, complete) {
        const item = this.getToDoById(id);
        if (item) {
            item.complete = complete;
        }
        // this.getToDoById(id).complete = true;
    }
    getToDoItems(includeComplete) {
        return [...this.itemMap.values()].filter((item) => includeComplete || !item.complete);
    }
    removeComplete() {
        this.itemMap.forEach((item) => {
            if (item.complete) {
                this.itemMap.delete(item.id);
            }
        });
    }
}
exports.todoCollection = todoCollection;
