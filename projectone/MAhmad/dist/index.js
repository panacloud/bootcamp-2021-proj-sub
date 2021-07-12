"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoList_1 = require("./todoList");
let allTodo = new todoList_1.TodoList();
allTodo.addTodo('task');
allTodo.addTodo('task2');
allTodo.addTodo('task3');
allTodo.completeTodo(1);
allTodo.printTodos();
