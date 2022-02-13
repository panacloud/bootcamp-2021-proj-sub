"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTodoCollection = void 0;
const todoList_1 = require("./todoList");
const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const todo_1 = require("./todo");
class JsonTodoCollection extends todoList_1.TodoList {
    constructor(userName, todo = []) {
        super(userName, []);
        this.userName = userName;
        this.database = lowdb(new FileSync("Todos.json"));
        if (this.database.has("todos").value()) {
            let dbItems = this.database.get("todos").value();
            dbItems.forEach((todo) => this.todoMap.set(todo.id, new todo_1.Todo(todo.id, todo.name, todo.status)));
        }
        else {
            this.database.set("todos", todo).write();
            todo.forEach(todo => this.todoMap.set(todo.id, todo));
        }
    }
    addTodo(task) {
        let result = super.addTodo(task);
        this.storeTasks();
        return result;
    }
    markComplete(id) {
        super.completeTodo(id);
        this.storeTasks();
    }
    markDelete(id) {
        super.deleteTodo(id);
        this.storeTasks();
    }
    removeComplete() {
        super.deleteDoneTodo();
        this.storeTasks();
    }
    storeTasks() {
        this.database.set("todos", [...this.todoMap.values()]).write();
    }
}
exports.JsonTodoCollection = JsonTodoCollection;
