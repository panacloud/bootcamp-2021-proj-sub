"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonTodoCollection = void 0;
const todoitem_1 = require("./todoitem");
const todoCollection_1 = require("./todoCollection");
const lowdb = require("lowdb");
const FileSyn = require("lowdb/adapters/FileSync");
class jsonTodoCollection extends todoCollection_1.TodoCollecton {
    constructor(userName, todoItem = []) {
        super(userName, []);
        this.userName = userName;
        this.database = lowdb(new FileSyn("Todos.json"));
        if (this.database.has("tasks").value()) {
            let dbItems = this.database.get("tasks").value();
            dbItems.forEach(item => this.itemMap.set(item.id, new todoitem_1.TodoItem(item.id, item.task, item.complete)));
        }
        else {
            this.database.set("tasks", this.todoItems).write();
            this.todoItems.forEach(item => this.itemMap.set(item.id, item));
        }
    }
    storeTask() {
        this.database.set("tasks", [...this.itemMap.values()]).write();
    }
    addTodo(task) {
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
}
exports.jsonTodoCollection = jsonTodoCollection;
