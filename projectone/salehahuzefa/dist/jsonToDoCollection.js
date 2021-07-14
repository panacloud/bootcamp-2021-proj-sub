"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonToDoCollection = void 0;
const todoItem_1 = require("./todoItem");
const todoCollection_1 = require("./todoCollection");
const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
class JsonToDoCollection extends todoCollection_1.todoCollection {
    constructor(todoItems = []) {
        super([]);
        this.todoItems = todoItems;
        this.database = lowdb(new FileSync("ToDo.json"));
        if (this.database.has("tasks").value()) {
            let dbItems = this.database.get("tasks").value();
            dbItems.forEach((item) => this.itemMap.set(item.id, new todoItem_1.todoItem(item.id, item.task, item.complete)));
        }
        else {
            this.database.set("tasks", todoItems).write();
            todoItems.forEach((item) => this.itemMap.set(item.id, item));
        }
    }
    addToDo(task) {
        let result = super.addTodo(task);
        this.storeTask();
        return result;
    }
    markComplete(id, complete) {
        super.markComplete(id, complete);
        this.storeTask();
    }
    removeComplete() {
        super.removeComplete();
        this.storeTask();
    }
    storeTask() {
        this.database.set("tasks", [...this.itemMap.values()]).write();
    }
}
exports.JsonToDoCollection = JsonToDoCollection;
