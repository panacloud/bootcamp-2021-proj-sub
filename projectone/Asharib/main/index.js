"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoCollection_1 = require("./todoCollection");
let list = new todoCollection_1.todoCollection();
list.addTodo('buy mangos');
list.addTodo("buy meat");
list.addTodo('ghaircut');
list.taskdDone(2);
list.printAll();
