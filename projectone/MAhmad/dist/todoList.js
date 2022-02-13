"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoList = void 0;
const todo_1 = require("./todo");
class TodoList {
    constructor(userName, todos = []) {
        this.userName = userName;
        this.todos = todos;
        this.ID = 1;
        this.todoMap = new Map();
    }
    addTodo(name) {
        this.todoMap.set(this.ID, new todo_1.Todo(this.ID, name, false));
        return this.ID++;
    }
    getTodo(ID) {
        return this.todoMap.get(ID);
    }
    getAllTodos() {
        return [...this.todoMap.values()];
    }
    getTodoWithStatus(statusTodo) {
        return [...this.todoMap.values()]
            .filter(todo => statusTodo == todo.status);
    }
    countTodo() {
        return {
            total: this.todoMap.size,
            incomplete: this.getTodoWithStatus(false).length,
            complete: this.getTodoWithStatus(true).length
        };
    }
    completeTodo(ID) {
        let completeTodo = this.getTodo(ID);
        completeTodo.status = true;
    }
    deleteTodo(ID) {
        this.todoMap.delete(ID);
    }
    deleteDoneTodo() {
        this.todoMap.forEach((todo) => {
            if (todo.status) {
                this.todoMap.delete(todo.id);
            }
        });
    }
    printTodos() {
        this.todoMap.size > 0 ? console.log(`ID \t Name \t Status`) : null;
        this.todoMap.forEach((todo) => todo.printTodo());
    }
}
exports.TodoList = TodoList;
