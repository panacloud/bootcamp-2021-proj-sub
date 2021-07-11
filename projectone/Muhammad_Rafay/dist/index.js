"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todo_collection_1 = require("./todo_collection");
let list = new todo_collection_1.TodoCollection();
list.addTodo("Buy Typescript Book");
list.addTodo("Buy Python Book");
list.addTodo("Learn AWS");
list.taskDone(2);
list.printAll();
