"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collection = void 0;
const item_1 = require("./item");
class collection {
    constructor(items, userName) {
        this.items = items;
        this.userName = userName;
        this.nextId = 1;
        this.itemMap = new Map();
        items.forEach(item => this.itemMap.set(item.id, item));
    }
    addTodo(itemName) {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        this.itemMap.set(this.nextId, new item_1.item(this.nextId, itemName));
    }
    taskDone(id, completion) {
        let item = this.getTodoById(id);
        if (item) {
            item.task_completion = completion;
        }
    }
    getTodoById(id) {
        return this.itemMap.get(id);
    }
    getTodoItems(includeComplete) {
        return [...this.itemMap.values()].filter(item => includeComplete || !item.task_completion);
    }
    printAllItems() {
        this.getTodoItems(true).forEach(item => item.print());
    }
    removeCompletedTask() {
        this.itemMap.forEach(item => {
            if (item.task_completion) {
                this.itemMap.delete(item.id);
            }
        });
    }
    getItemCount() {
        return {
            total: this.itemMap.size,
            incomplete: this.getTodoItems(false).length
        };
    }
}
exports.collection = collection;
