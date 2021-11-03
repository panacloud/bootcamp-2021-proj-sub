"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCollection = void 0;
const todoItem_1 = require("./todoItem");
class ItemCollection {
    constructor(Items = []) {
        this.Items = Items;
        this.nextId = 1;
    }
    addTodoItems(task) {
        let thing = new todoItem_1.TodoItem(this.nextId, task, false);
        this.nextId++;
        this.Items.push(thing);
    }
    printDetails() {
        this.Items.forEach((thing) => thing.printDetails());
    }
    taskDone(taskId) {
        let item = this.Items.find((item) => item.id === taskId);
        item.complete = true;
    }
}
exports.ItemCollection = ItemCollection;
