"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TodoItem_1 = require("./TodoItem");
const TodoCollection_1 = require("./TodoCollection");
let todos = [
    new TodoItem_1.TodoItem(1, "Buy mangos"), new TodoItem_1.TodoItem(2, "get sleep"),
    new TodoItem_1.TodoItem(3, "Collect fruits"), new TodoItem_1.TodoItem(4, "Call bata", true)
];
let collection = new TodoCollection_1.TodoCollection("hassans", todos);
console.clear();
console.log(`${collection.userName}'s Todo List `
    + `(${collection.getItemCounts().incomplete} items to do)`);
collection.getTodoItems(true).forEach(item => item.printDetails());
