"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTodoCollection = void 0;
const Item_1 = require("./Item");
const itemCollection_1 = require("./itemCollection");
const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
class JsonTodoCollection extends itemCollection_1.ItemCollection {
    constructor(userName, todoItems = []) {
        super([]);
        this.userName = userName;
        this.database = lowdb(new FileSync("Todos.json"));
        if (this.database.has("tasks").value()) {
            let dbItems = this.database.get("tasks").value();
            dbItems.forEach(item => this.itemMap.set(item.id, new Item_1.Item(item.id, item.task, item.complete)));
        }
        else {
            this.database.set("tasks", todoItems).write();
            todoItems.forEach(item => this.itemMap.set(item.id, item));
        }
    }
    AddTodo(task) {
        let result = super.AddTodo(task);
        this.storeTasks();
        return result;
    }
    TaskComplete(id, complete) {
        super.Taskcomplete(id, complete);
        this.storeTasks();
    }
    removecompletedtasks() {
        super.removecompletedtasks();
        this.storeTasks();
    }
    storeTasks() {
        this.database.set("tasks", [...this.itemMap.values()]).write();
    }
}
exports.JsonTodoCollection = JsonTodoCollection;
