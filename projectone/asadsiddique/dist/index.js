"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const itemCollection_1 = require("./itemCollection");
let col_1 = new itemCollection_1.itemCollection("Asad");
col_1.addTodo("Project is in Pending...");
col_1.addTodo("Project Still in Pending");
col_1.addTodo("is Done Now?");
col_1.isCompleted(2);
col_1.isCompleted(3);
console.log(col_1.userName, "Todo's List");
col_1.getTodoItems(true).forEach(item => item.printDetails());
col_1.removeCompletedTask();
// let todo = col_1.getTodoById(1);
// console.log(todo)
col_1.printDetails();
// let item1 = new itemTodo(1, "Completed First Task", false);
// item1.printDetails();
