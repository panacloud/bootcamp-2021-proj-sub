"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoList = void 0;
const todo_1 = require("./todo");
class TodoList {
    constructor(todos = []) {
        this.todos = todos;
        this.ID = 1;
    }
    addTodo(name) {
        this.todos.push(new todo_1.Todo(this.ID, name, false));
        return this.ID++;
    }
    completeTodo(ID) {
        this.todos.find((ID) => ID.status = true);
    }
    printTodos() {
        this.todos.forEach((todo) => todo.printTodo());
    }
}
exports.TodoList = TodoList;
