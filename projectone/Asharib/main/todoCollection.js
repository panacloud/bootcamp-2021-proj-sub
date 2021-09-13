"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoCollection = void 0;
const todoitem_1 = require("./todoitem");
class todoCollection {
    constructor(items = []) {
        this.items = items;
        this.nextId = 1;
    }
    addTodo(item) {
        this.items.push(new todoitem_1.todoItem(this.nextId, item, false));
        return this.nextId++;
    }
    printAll() {
        this.items.forEach((item) => item.printDetails());
    }
    getItem(id) {
        return this.items.find((item) => item.id == id);
    }
    taskdDone(id) {
        this.getItem(id).complete = true;
    }
}
exports.todoCollection = todoCollection;
