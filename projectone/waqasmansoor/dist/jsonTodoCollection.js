"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTodoCollection = void 0;
const item_1 = require("./item");
const collection_1 = require("./collection");
const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
class JsonTodoCollection extends collection_1.collection {
    constructor(userName, items = []) {
        super([], userName);
        this.userName = userName;
        this.database = lowdb(new FileSync("Todos.json"));
        if (this.database.has("tasks").value()) {
            let dbItems = this.database.get("tasks").value();
            dbItems.forEach(dbitem => this.itemMap.set(dbitem.id, new item_1.item(dbitem.id, dbitem.name, dbitem.task_completion)));
        }
        else {
            this.database.set("tasks", items).write();
            items.forEach(item => this.itemMap.set(item.id, item));
        }
    }
    addTodo(itemName) {
        super.addTodo(itemName);
        this.storeTasks();
    }
    taskDone(id, completion) {
        super.taskDone(id, completion);
        this.storeTasks();
    }
    removeCompletedTask() {
        super.removeCompletedTask();
        this.storeTasks();
    }
    storeTasks() {
        this.database.set("tasks", [...this.itemMap.values()]).write();
    }
}
exports.JsonTodoCollection = JsonTodoCollection;
