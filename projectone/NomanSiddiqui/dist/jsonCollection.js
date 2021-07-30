"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTodoCollection = void 0;
const todoItem_1 = require("./todoItem");
const todoCollection_1 = require("./todoCollection");
const path_1 = require("path");
const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
// Use JSON File for storage
class JsonTodoCollection extends todoCollection_1.TodoCollection {
    constructor(userName, todoItems = []) {
        super(userName, todoItems);
        this.userName = userName;
        let filePath = path_1.join(__dirname, 'NSTododb.json');
        this.db = lowdb(new FileSync(filePath));
        if (this.db.has("tasks").value()) {
            let dbItems = this.db.get("tasks").value();
            dbItems.forEach(item => this.itemMap.set(item.id, new todoItem_1.TodoItem(item.id, item.task, item.complete)));
        }
        else {
            this.db.set("tasks", todoItems).write();
            todoItems.forEach(item => this.itemMap.set(item.id, item));
        }
    }
    storeTasks() {
        this.db.set("tasks", [...this.itemMap.values()]).write();
    }
    addTodo(task) {
        let taskId = super.addTodo(task);
        this.storeTasks();
        return taskId;
    }
    markComplete(id, complete) {
        super.markComplete(id, complete);
        this.storeTasks();
    }
    removeComplete() {
        super.removeComplete();
        this.storeTasks();
    }
}
exports.JsonTodoCollection = JsonTodoCollection;
