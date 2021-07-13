"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemCollection = void 0;
const todoTask_1 = require("./todoTask");
//  Items Collection Class...
class itemCollection {
    constructor(userName, items = []) {
        this.userName = userName;
        this.items = items;
        // Attributes of items Collections...
        this.nextTaskId = 1;
        this.itemMap = new Map();
        this.items.forEach((item) => this.itemMap.set(item.id, item));
    }
    // Method to add new todo in the list...
    addTodo(task) {
        // let todo: todoTask = new todoTask(this.nextTaskId, task, false);
        // this.nextTaskId++;
        // this.items.push(todo);
        while (this.getTodoById(this.nextTaskId)) {
            this.nextTaskId++;
        }
        this.itemMap.set(this.nextTaskId, new todoTask_1.todoTask(this.nextTaskId, task));
        return this.nextTaskId;
        // console.log("VAlues: ",this.itemMap.values())
    }
    // Methods to get Items By their ID's...
    getTodoById(taskId) {
        return this.itemMap.get(taskId);
    }
    // Method to get the list of All Items...
    getTodoItems(isCompleted) {
        return [...this.itemMap.values()].filter((item) => isCompleted || !item.isCompleted);
    }
    // Method to Count the total and Completed items...
    getTodoItemsCount() {
        return {
            totalItems: this.itemMap.size,
            isCompletedTask: this.getTodoItems(false).length,
        };
    }
    // method to remove the Completed Task...
    removeCompletedTask() {
        this.itemMap.forEach((item) => {
            if (item.isCompleted) {
                this.itemMap.delete(item.id);
            }
        });
    }
    // Method to Completed the Task...
    isCompleted(tsakId, isCompleted) {
        let completed = this.getTodoById(tsakId);
        if (completed) {
            completed.isCompleted = isCompleted;
        }
    }
    // method to print the All items...
    printDetails() {
        this.items.forEach((item) => console.log(item.printDetails()));
    }
}
exports.itemCollection = itemCollection;
