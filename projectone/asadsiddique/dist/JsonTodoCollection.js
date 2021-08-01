"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTodoCollection = void 0;
const todoTask_1 = require("./todoTask");
const itemCollection_1 = require("./itemCollection");
const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
class JsonTodoCollection extends itemCollection_1.itemCollection {
    constructor(userName, todoItems = []) {
        super(userName, []);
        this.userName = userName;
        this.database = lowdb(new FileSync("Todos.json"));
        if (this.database.has("tasks").value()) {
            let dbItems = this.database.get("tasks").value();
            dbItems.forEach((item) => this.itemMap.set(item.id, new todoTask_1.todoTask(item.id, item.task, item.isCompleted)));
        }
        else {
            this.database.set("tasks", todoTask_1.todoTask).write();
            todoItems.forEach((item) => this.itemMap.set(item.id, item));
        }
    }
    markComplete(id, complete) {
        super.isCompleted(id, complete);
        this.storeTasks();
    }
    removeComplete() {
        super.removeCompletedTask();
        this.storeTasks();
    }
    storeTasks() {
        this.database.set("tasks", [...this.itemMap.values()]).write();
    }
    addTodo(task) {
        let result = super.addTodo(task);
        this.storeTasks();
        return result;
    }
}
exports.JsonTodoCollection = JsonTodoCollection;
