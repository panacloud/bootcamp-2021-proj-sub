"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoitem_1 = require("./todoitem");
const todocollection_1 = require("./todocollection");
let todos = [
    new todoitem_1.TodoItem(1, "Buy mangos"), new todoitem_1.TodoItem(2, "get sleep"),
    new todoitem_1.TodoItem(3, "Collect fruits"), new todoitem_1.TodoItem(4, "Call bata", true)
];
let collection = new todocollection_1.TodoCollection("Hassans", todos);
console.clear();
console.log(`${collection.userName}'s Todo List `
    + `(${collection.getItemCounts().incomplete} items to do)`);
collection.getTodoItems(true).forEach(item => item.printDetails());
