"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCollection = void 0;
const TodoItem_1 = require("./TodoItem");
class ItemCollection {
    constructor(Items = []) {
        this.Items = Items;
        this.nextId = 1;
    }
    addTodo(task) {
        let item = new TodoItem_1.TodoItem(this.nextId, task, false);
        this.nextId++;
        this.Items.push(item);
    }
    printDetails() {
        this.Items.forEach((item) => item.printDetails());
    }
    taskDone(taskId) {
        let item = this.Items.find((item) => item.id === taskId);
        item.complete = true;
    }
}
exports.ItemCollection = ItemCollection;
