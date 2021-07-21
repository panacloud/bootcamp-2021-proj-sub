"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTodoCollection = void 0;
// Imports
const todoItem_1 = require("./todoItem");
const todoCollection_1 = require("./todoCollection");
const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
class JsonTodoCollection extends todoCollection_1.TodoCollection {
    constructor(userName, todoItems = []) {
        // refers to TodoCollection class
        super(userName, []);
        this.userName = userName;
        // Create file with name to store data
        this.database = lowdb(new FileSync("Todos.json"));
        // check if the data base has already stored tasks in it
        if (this.database.has("tasks").value()) {
            // returns the tasks with id, todo and complete status
            let dbItems = this.database.get("tasks").value();
            dbItems.forEach((item) => this.itemMap.set(item.id, new todoItem_1.TodoItem(item.id, item.task, item.complete)));
        }
        else {
            // in-case when no task in the file write data to file
            this.database.set("tasks", todoItems).write();
            todoItems.forEach((item) => this.itemMap.set(item.id, item));
        }
    }
    // Add new task to file
    addTodo(task) {
        let result = super.addTodo(task);
        this.storeTasks();
        return result;
    }
    // mark status of a said task in the file
    markComplete(id, complete) {
        super.markComplete(id, complete);
        this.storeTasks();
    }
    // remove completed tasks from file
    removeComplete() {
        super.removeComplete();
        this.storeTasks();
    }
    // Store Data
    storeTasks() {
        this.database.set("tasks", [...this.itemMap.values()]).write();
    }
}
exports.JsonTodoCollection = JsonTodoCollection;
