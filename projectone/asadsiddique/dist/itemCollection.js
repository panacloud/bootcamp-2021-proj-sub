"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemCollection = void 0;
const itemTodo_1 = require("./itemTodo");
class itemCollection {
    constructor(items = []) {
        this.items = items;
        this.nextId = 1;
    }
    addTodo(task) {
        let todo = new itemTodo_1.itemTodo(this.nextId, task, false);
        this.nextId++;
        this.items.push(todo);
    }
    printDetails() {
        this.items.forEach((item) => console.log(item.printDetails()));
    }
}
exports.itemCollection = itemCollection;
