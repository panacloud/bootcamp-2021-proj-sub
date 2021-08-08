"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoCollection = void 0;
const TodoItem_1 = require("./TodoItem");
class todoCollection {
    //
    constructor(username, todoItems) {
        this.username = username;
        this.todoItems = todoItems;
        this.nextId = 1;
        this.itemMap = new Map();
        todoItems.forEach(item => this.itemMap.set(item.id, item));
    }
    //
    addToDo(task) {
        // addToDo(task: string){
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        this.itemMap.set(this.nextId, new TodoItem_1.TodoItem(this.nextId, task));
        return this.nextId;
    }
    //
    deleteToDo(id) {
        for (let i = 0; i < this.itemMap.size; i++) {
            if (this.itemMap.has(id)) {
                this.itemMap.delete(id);
                break;
            }
        }
    }
    //
    getTodoById(id) {
        return this.itemMap.get(id);
    }
    //
    markComplete(id, complete) {
        let todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.complete = complete;
        }
    }
    //
    getToDoItems(includeComplete) {
        return [...this.itemMap.values()]
            .filter(item => includeComplete || !item.complete);
    }
    //
    removeComplete() {
        this.itemMap.forEach(item => {
            if (item.complete) {
                this.itemMap.delete(item.id);
            }
        });
    }
    //
    getItemCounts() {
        return {
            total: this.itemMap.size,
            incomplete: this.getToDoItems(false).length
        };
    }
}
exports.todoCollection = todoCollection;
