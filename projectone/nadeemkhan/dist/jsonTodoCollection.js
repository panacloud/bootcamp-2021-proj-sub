"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTodoCollection = void 0;
const todocollection_1 = require("./todocollection");
const todoitems_1 = require("./todoitems");
const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
class JsonTodoCollection extends todocollection_1.TodoCollection {
    constructor(userName, todoItems = []) {
        super(userName, []);
        this.userName = userName;
        this.todoItems = todoItems;
        this.database = lowdb(new FileSync("Todos.json"));
        if (this.database.has("tasks").value()) {
            let dbItems = this.database.get("tasks").value();
            dbItems.forEach(item => this.itemMap.set(item.id, new todoitems_1.TodoItem(item.id, item.task, item.complete)));
        }
        else {
            this.database.set("tasks", todoItems).write();
            todoItems.forEach(item => this.itemMap.set(item.id, item));
        }
    }
    addTodo(task) {
        let result = super.addTodo(task);
        this.storeTasks();
        return result;
    }
    markComplete(id, complete) {
        super.markComplete(id, complete);
        this.storeTasks();
    }
    removeComplete() {
        super.removeComplete();
        this.storeTasks();
    }
    storeTasks() {
        this.database.set("tasks", [...this.itemMap.values()]).write();
    }
}
exports.JsonTodoCollection = JsonTodoCollection;
