"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("./todoItem");
const todoCollection_1 = require("./todoCollection");
let todos = [
    new todoItem_1.Todoitem(1, "Prayer Namaz"), new todoItem_1.Todoitem(2, "Get Shoes"),
    new todoItem_1.Todoitem(3, "Do Coding"), new todoItem_1.Todoitem(4, "Call Ahmed RAZA", true)
];
let collection = new todoCollection_1.todocollection("Haseeb", todos);
console.clear();
console.log(`${collection.userName}'s Todo List`);
//collection.addTodo(todoItem);
collection.getTodoItems(true).forEach(item => item.printDetails());
//collection.addTodo(todoItem);
/*
addTodo(task: string): number {
    while (this.getTodoById(this.nextId)) {
    this.nextId++;
    }
    this.todoItems.push(new TodoItem(this.nextId, task));
    return this.nextId;
   }
*/
