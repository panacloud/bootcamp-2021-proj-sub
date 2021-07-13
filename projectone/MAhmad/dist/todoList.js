"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoList = void 0;
const todo_1 = require("./todo");
class TodoList {
    constructor(todos = []) {
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
        this.todoMap.forEach((todo) => todo.printTodo());
    }
}
exports.TodoList = TodoList;
