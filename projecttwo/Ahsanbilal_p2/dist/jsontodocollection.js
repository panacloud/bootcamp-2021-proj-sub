"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTodoCollection = void 0;
const itemtodo_1 = require("./itemtodo");
const todocollection_1 = require("./todocollection");
const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
class JsonTodoCollection extends todocollection_1.todocollection {
    constructor(userName, todoItems = []) {
        super(userName, []);
        this.userName = userName;
        this.database = lowdb(new FileSync("Todos.json"));
        if (this.database.has("tasks").value()) {
            let dbItems = this.database.get("tasks").value();
            dbItems.forEach(item => this.itemMap.set(item.id, new itemtodo_1.itemtodo(item.id, item.task, item.complete)));
        }
        else {
            this.database.set("tasks", todoItems).write();
            todoItems.forEach(item => this.itemMap.set(item.id, item));
        }
    }
    addTodo(task) {
        let result = super.addtodo(task);
        this.storeTasks();
        return result;
    }
    markComplete(id, complete) {
        super.markcomplete(id, complete);
        this.storeTasks();
    }
    removeComplete() {
        super.removeCompleteitem();
        this.storeTasks();
    }
    storeTasks() {
        this.database.set("tasks", [...this.itemMap.values()]).write();
    }
}
exports.JsonTodoCollection = JsonTodoCollection;
