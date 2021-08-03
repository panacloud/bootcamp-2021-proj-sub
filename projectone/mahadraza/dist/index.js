"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = require("./Item");
const ItemCollection_1 = require("./ItemCollection");
const inquirer = require("inquirer");
//let icollection: ItemCollection = new ItemCollection();
// icollection.addtoitem("eat Biryani")
// icollection.addtoitem("do more programming")
// icollection.addtoitem("do asap")
// icollection.compare(2)
// icollection.printall();
let todos = [
    new Item_1.Item(1, "Buy Flowers", false), new Item_1.Item(2, "Get Shoes", true),
    new Item_1.Item(3, "Collect Tickets", true), new Item_1.Item(4, "Call Joe", true)
];
let icollection = new ItemCollection_1.ItemCollection("Adam", todos);
console.clear();
// console.log(`${icollection.userNAME}'s Todo List`);
// //collection.addTodo(todoItem);
// icollection.getTodoItems(true).forEach(Item => Item.printTasks());
function displayTodoList() {
    console.log(`${icollection.userNAME}'s Todo List ` + `(${icollection.getItemCounts().incomplete} items to do)`);
    icollection.getTodoItems(true).forEach(item => item.printTasks());
}
var Commands;
(function (Commands) {
    Commands["Quit"] = "Quit";
    Commands["No_action"] = "No_action";
})(Commands || (Commands = {}));
function promptUser() {
    console.clear();
    displayTodoList();
    inquirer.prompt({
        type: "list",
        name: "command",
        message: "Choose option",
        choices: Object.values(Commands)
    }).then(answers => { if (answers["command"] !== Commands.Quit) {
        promptUser();
    } });
}
promptUser();
