"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoList = void 0;
const todoItem_1 = require("./todoItem");
class TodoList {
    constructor(userName, todoItems = []) {
        this.userName = userName;
        this.nextId = 1;
        this.itemMap = new Map();
        todoItems.forEach(item => this.itemMap.set(item.id, item));
    }
    //------------------------------------------------------------------------------------ading todo
    addTodo(task) {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        this.itemMap.set(this.nextId, new todoItem_1.TodoItem(this.nextId, task));
        return this.nextId;
    }
    //------------------------------------------------------------------------------------get id from collection of todos
    getTodoById(id) {
        return this.itemMap.get(id);
    }
    //------------------------------------------------------------------------------------------getting elemnt by id
    getTodoItems(includeComplete) {
        return [...this.itemMap.values()]
            .filter(item => includeComplete || !item.complete);
    }
    //----------------------------------------------------------------------------------------function to marke compleed to an item
    markComplete(id, complete) {
        const todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.complete = complete;
        }
    }
    //------------------------------------------------------------------------------------removing completed task
    removeComplete() {
        this.itemMap.forEach(item => {
            if (item.complete) {
                this.itemMap.delete(item.id);
            }
        });
    }
    //-----------------------------------------------------------------------getting number of pending task
    getItemCounts() {
        return {
            total: this.itemMap.size,
            incomplete: this.getTodoItems(false).length
        };
    }
    //-*********************************=========================================----my addition to update  task
    updateTodo(id, item) {
        if (this.itemMap.get(id)) {
            this.itemMap.set(id, item);
        }
        ;
    }
}
exports.TodoList = TodoList;
