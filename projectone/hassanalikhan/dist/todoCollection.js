"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoCollection = void 0;
const todoItem_1 = require("./todoItem");
class TodoCollection {
    constructor(userName, todoItems = []) {
        this.userName = userName;
        this.todoItems = todoItems;
        // to define item id
        this.nextId = 1;
        // by this way we can store a todo item in the form of key value pair
        // itemMap have keys in form of number an dvalues are of TodoItem type
        this.itemMap = new Map();
        // no statements required here
        // TS compiler will auto genrate these
        todoItems.forEach((item) => this.itemMap.set(item.id, item));
    }
    // adding a new todo and get ID of the added todo
    addTodo(task) {
        // increment in the todo id in case same id already exist
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        this.itemMap.set(this.nextId, new todoItem_1.TodoItem(this.nextId, task));
        return this.nextId;
    }
    // get a todo by specific id
    getTodoById(id) {
        return this.itemMap.get(id);
    }
    // get items based on complete status (default to get all items)
    getTodoItems(includeComplete) {
        return [...this.itemMap.values()].filter((item) => includeComplete || !item.complete);
    }
    // mark a task as completed or back to uncomplete
    markComplete(id, complete) {
        const todoItem = this.getTodoById(id);
        // acts only in case if the todo exist with specific id
        if (todoItem) {
            todoItem.complete = complete;
        }
    }
    // Remove Completed Itmes
    removeComplete() {
        this.itemMap.forEach((item) => {
            if (item.complete) {
                this.itemMap.delete(item.id);
            }
        });
    }
    // Count items in the collection
    getItemCounts() {
        return {
            total: this.itemMap.size,
            incomplete: this.getTodoItems(false).length,
            complete: this.itemMap.size - this.getTodoItems(false).length,
        };
    }
    // To print all the todos at once
    printAll() {
        this.getTodoItems(true).forEach((item) => {
            item.printDetails();
        });
    }
}
exports.TodoCollection = TodoCollection;
