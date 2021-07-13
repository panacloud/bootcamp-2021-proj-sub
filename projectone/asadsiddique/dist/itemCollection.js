"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemCollection = void 0;
const todoTask_1 = require("./todoTask");
class itemCollection {
    constructor(userName, items = []) {
        this.userName = userName;
        this.items = items;
        this.nextTaskId = 1;
        this.itemMap = new Map();
        this.items.forEach((item) => this.itemMap.set(item.id, item));
    }
    addTodo(task) {
        let todo = new todoTask_1.todoTask(++this.nextTaskId, task, false);
        // this.nextTaskId++;
        this.items.push(todo);
        this.itemMap.set(this.nextTaskId, todo);
        // console.log("VAlues: ",this.itemMap.values())
    }
    getTodoById(taskId) {
        return this.itemMap.get(taskId);
    }
    getTodoItems(isCompleted) {
        return [...this.itemMap.values()].filter((item) => isCompleted || !item.isCompleted);
    }
    removeCompletedTask() {
        this.itemMap.forEach((item) => {
            if (item.isCompleted) {
                this.itemMap.delete(item.id);
            }
        });
    }
    isCompleted(tsakId) {
        let completed = this.items.find((item) => item.id === tsakId);
        completed.isCompleted = true;
    }
    printDetails() {
        this.items.forEach((item) => console.log(item.printDetails()));
    }
}
exports.itemCollection = itemCollection;
