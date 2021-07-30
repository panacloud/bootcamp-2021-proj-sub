'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTodoCollections = void 0;
const TodoItems_1 = require("./TodoItems");
const TodoCollection_1 = require("./TodoCollection");
const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
class JsonTodoCollections extends TodoCollection_1.TodoCollection {
    constructor(userName, todoItems = []) {
        super(userName, todoItems);
        this.userName = userName;
        this.database = lowdb(new FileSync("tasks.json"));
        if (this.database.has("tasks").value()) {
            let dbitems = this.database.get("tasks").value();
            dbitems.forEach(item => this.itemMap.set(item.id, new TodoItems_1.TodoItem(item.id, item.task, item.complete)));
        }
        else {
            this.database.set("tasks", todoItems).write();
            todoItems.forEach(item => this.itemMap.set(item.id, item));
        }
    }
    addTask(task) {
        let result = super.addTodo(task);
        this.storeTask();
        return result;
    }
    deleteTask(id) {
        super.removeById(id);
        this.database.get("tasks").remove({ id: id }).write();
    }
    storeTask() {
        this.database.set("tasks", [...this.itemMap.values()]).write();
    }
    completeTask(id) {
        let status = super.markComplete(id, true);
        if (status) {
            this.database.get("tasks").find({ id: id }).assign({ complete: true }).write();
        }
        return status;
    }
    dumpDataBase() {
        let items = this.database.get("tasks").value();
        if (items) {
            items.forEach(item => console.log(item));
        }
    }
}
exports.JsonTodoCollections = JsonTodoCollections;
