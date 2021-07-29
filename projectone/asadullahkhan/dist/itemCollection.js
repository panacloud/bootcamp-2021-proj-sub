"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCollection = void 0;
const todoitem_1 = require("./todoitem");
class ItemCollection {
    constructor(Items = []) {
        this.Items = Items;
        this.nextId = 1;
        this.itemMap = new Map();
    }
    addTodo(task) {
        let item = new todoitem_1.TodoItem(this.nextId, task, false);
        this.nextId++;
        this.Items.push(item);
        this.itemMap.set(this.nextId, new todoitem_1.TodoItem(this.nextId, task));
    }
    printDetails() {
        this.Items.forEach((item) => item.printDetail());
    }
    taskDone(taskId) {
        let item = this.Items.find((item) => item.id === taskId);
        item.complete = true;
    }
}
exports.ItemCollection = ItemCollection;
