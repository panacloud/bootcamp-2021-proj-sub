"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoCollection = void 0;
const TodoItem_1 = require("./TodoItem");
class TodoCollection {
    constructor(items = []) {
        this.items = items;
        this.nextId = 1;
        this.itemsMap = new Map();
        this.addTodo = (item) => {
            this.itemsMap.set(this.nextId, new TodoItem_1.TodoItem(this.nextId, item, false));
            return this.nextId++;
        };
        this.printAll = (completeOrNot = null) => {
            console.log(`ID\tTask\t\tCompleted\n=========================================`);
            let filteredItems = this.getAllItems(completeOrNot);
            if (filteredItems.length)
                filteredItems.forEach((item) => item.printDetails());
            else
                console.log("No items found.");
        };
        this.getItem = (id) => {
            return this.itemsMap.get(id);
        };
        this.removeItem = (id) => {
            this.itemsMap.delete(id);
        };
        this.taskDone = (id) => {
            this.itemsMap.get(id).complete = true;
        };
        this.getAllItems = (completeOrNot = null) => {
            return (completeOrNot != null) ? [...this.itemsMap.values()].filter(item => item.complete == completeOrNot) : [...this.itemsMap.values()];
        };
        this.removeItems = (completeOrNot = null) => {
            if (completeOrNot != null) {
                this.itemsMap.forEach(item => {
                    if (item.complete == completeOrNot) {
                        this.itemsMap.delete(item.id);
                    }
                });
            }
            else {
                this.itemsMap = new Map();
            }
        };
        this.getItemCount = () => {
            return {
                total: this.itemsMap.size,
                inCompleted: this.getAllItems(false).length,
                completed: this.getAllItems(true).length
            };
        };
        items.forEach(item => this.itemsMap.set(item.id, item));
    }
}
exports.TodoCollection = TodoCollection;
