"use strict";
// console.clear();
// console.log("hello");
Object.defineProperty(exports, "__esModule", { value: true });
// import { TodoItem } from "./todoItem";
// import { TodoCollection } from "./todocollections";
// let todos = [
//     new TodoItem(1, "Buy Flowers"), new TodoItem(2, "Get Shoes"),
//     new TodoItem(3, "Collect Tickets"), new TodoItem(4, "Call Joe", true)];
// let collection = new TodoCollection("Adam", todos);
// console.clear();
// console.log(`${collection.userName}'s Todo List`);
// let newId = collection.addTodo("Go for run");
// let todoItem = collection.getTodoById(newId);
// // console.log(JSON.stringify(todoItem)); // shows last todo item in the list
// todoItem.printDetails();
// collection.addTodo(todoItem);  // error here fn accepts string not object
//updating file
const todoItem_1 = require("./todoItem");
const todocollections_1 = require("./todocollections");
let todos = [
    new todoItem_1.TodoItem(1, "Buy Flowers"), new todoItem_1.TodoItem(2, "Get Shoes"),
    new todoItem_1.TodoItem(3, "Collect Tickets"), new todoItem_1.TodoItem(4, "Call Joe", true)
];
let collection = new todocollections_1.TodoCollection("Adam", todos);
console.clear();
console.log(`${collection.userName}'s Todo List`);
collection.removeComplete(); // removing completed items
collection.getTodoItems(true).forEach(item => item.printDetails());
