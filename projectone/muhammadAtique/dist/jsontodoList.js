"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTodoList = void 0;
const todoItem_1 = require("./todoItem");
const todoList_1 = require("./todoList");
const lowbd = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
//--------------------------------------------------------------------------------store data in json
class JsonTodoList extends todoList_1.TodoList {
    constructor(userName, todoItems) {
        super(userName, []);
        this.userName = userName;
        this.database = lowbd(new FileSync("Todos.Json"));
        if (this.database.has("tasks").value()) {
            let dbitems = this.database.get("tasks").value();
            dbitems.forEach(item => this.itemMap.set(item.id, new todoItem_1.TodoItem(item.id, item.task, item.complete)));
        }
        else {
            this.database.set("tasks", todoItems).write();
            todoItems.forEach(item => this.itemMap.set(item.id, item));
        }
    }
    //-------------------------------------------------------------------store todo to database
    storeTasks() {
        this.database.set("tasks", [...this.itemMap.values()]).write();
    }
    //---------------------------------------------=---------------------------------------add todo
    addTodo(task) {
        let result = super.addTodo(task);
        this.storeTasks();
        return result;
    }
    //----------------------------------------------------------------------------------task compeltion in jason
    markComplete(id, complete) {
        super.markComplete(id, complete);
        this.storeTasks();
    }
    //-------------------------------------------------------------------------------------removing todo
    removeComplete() {
        super.removeComplete();
        this.storeTasks();
    }
    //--------------------------------------------------------------------------------------------update todo 
    updateTodo(id, item) {
        super.updateTodo(id, item);
        this.storeTasks();
    }
}
exports.JsonTodoList = JsonTodoList;
