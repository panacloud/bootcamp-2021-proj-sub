"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todocollection_1 = require("./todocollection");
const todoitems_1 = require("./todoitems");
let todos = [
    new todoitems_1.TodoItem(1, "Buy Flowers"), new todoitems_1.TodoItem(2, "Get Shoes"),
    new todoitems_1.TodoItem(3, "Collect Tickets"), new todoitems_1.TodoItem(4, "Call Joe", true)
];
let collection = new todocollection_1.TodoCollection("Adam", todos);
console.log(`${collection.username}'s todos list!'`);
collection.getTodoItems(false).forEach(item => item.printDetails());
