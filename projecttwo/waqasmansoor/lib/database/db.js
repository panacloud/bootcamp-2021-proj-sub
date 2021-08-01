"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tododb = void 0;
const todo_1 = require("../api/todo");
const todoapi_1 = require("../api/todoapi");
const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const todoList = [{}];
class db extends todoapi_1.todoapi {
    constructor() {
        super();
        this.database = lowdb(new FileSync("Todos.json"));
    }
    userExist(key) {
        if (this.database.has(key).value()) {
            return true;
        }
    }
    createTodoList(name) {
        if (this.userExist(name) === undefined) {
            this.database.set(name, []).write();
            // todos.forEach(todo=>this.todoMap.set(todo.id,todo))
            return true;
        }
        else {
            return false;
        }
    }
    getTodosByUser(name, includeComplete) {
        this.mapObj(name);
        return this.getTodos(includeComplete);
    }
    addUserTodo(name, todoName, taskDone = false) {
        this.mapObj(name);
        this.addTodo(todoName, taskDone);
        this.storeTasks(name);
    }
    removeTodo(name, index) {
        this.mapObj(name);
        if (index) {
            this.todoMap.delete(parseInt(index));
            this.storeTasks(name);
            return `Successfully removed index ${index}`;
        }
        else {
            this.removeCompletedTask();
            this.storeTasks(name);
            return "Successfully removed all completed todos";
        }
    }
    taskDone(username, ids) {
        this.todoMap.forEach(todo => {
            if (ids.find(id => id === todo.id) != undefined) {
                todo.taskDone = true;
            }
            else {
                todo.taskDone = false;
            }
        });
        this.storeTasks(username);
    }
    mapObj(username) {
        let dbItems = this.database.get(username).value();
        dbItems.forEach(item => this.todoMap.set(item.id, new todo_1.todo(item.id, item.name, item.taskDone)));
    }
    storeTasks(username) {
        this.database.set(username, [...this.todoMap.values()]).write();
    }
}
exports.tododb = new db();
