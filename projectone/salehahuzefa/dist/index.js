"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("./todoItem");
const inquirer = require("inquirer");
const jsonToDoCollection_1 = require("./jsonToDoCollection");
let showCompleted = true;
let todos = [
    new todoItem_1.todoItem(1, "Buy Mango"),
    new todoItem_1.todoItem(2, "Buy Meat"),
    new todoItem_1.todoItem(3, "Get Haircut"),
    new todoItem_1.todoItem(4, "Make a call"),
    new todoItem_1.todoItem(5, "Buy Vegetables"),
];
let collection = new jsonToDoCollection_1.JsonToDoCollection(todos);
function displayToDoList() {
    console.log(`My TODO LIST: ` + `(${collection.getItemCounts().incomplete} items to do)`);
    collection.getToDoItems(showCompleted).forEach((item) => item.printDetails());
}
var commands;
(function (commands) {
    commands["Add"] = "Add new Task";
    commands["Complete"] = "Complete Task";
    commands["Toggle"] = "Show/Hide Completed";
    commands["Purge"] = "Remove Completed Task";
    commands["Quit"] = "Quit";
})(commands || (commands = {}));
function promptAdd() {
    console.clear();
    inquirer
        .prompt({
        type: "input",
        name: "add",
        message: "Enter Task: ",
    })
        .then((answer) => {
        if (answer["add"] !== "") {
            collection.addToDo(answer["add"]);
        }
        promptUser();
    });
}
function promptComplete() {
    console.clear();
    inquirer
        .prompt({
        type: "checkbox",
        name: "complete",
        message: "mark tasks complete",
        choices: collection.getToDoItems(showCompleted).map((item) => ({
            name: item.task,
            value: item.id,
            checked: item.complete,
        })),
    })
        .then((answer) => {
        let completedTasks = answer["complete"];
        collection
            .getToDoItems(true)
            .forEach((item) => collection.markComplete(item.id, completedTasks.find((id) => id === item.id) != undefined));
        promptUser();
    });
}
function promptUser() {
    console.clear();
    displayToDoList();
    inquirer
        .prompt({
        type: "list",
        name: "command",
        message: "Choose Option",
        choices: Object.values(commands),
    })
        .then((answer) => {
        switch (answer["command"]) {
            case commands.Toggle:
                showCompleted = !showCompleted;
                promptUser();
                break;
            case commands.Add:
                promptAdd();
                break;
            case commands.Complete:
                if (collection.getItemCounts().incomplete > 0) {
                    promptComplete();
                }
                else {
                    promptUser();
                }
                break;
            case commands.Purge:
                collection.removeComplete();
                promptUser();
                break;
        }
    });
}
collection.markComplete(5, true);
collection.removeComplete();
promptUser();
// let list: todoCollection = new todoCollection(todos);
// list.addTodo("buy mango");
// list.addTodo("buy meat");
// list.addTodo("get haircut");
// list.taskDone(2);
// list.markDone(2, true);
// list.printAll();
//list.removeComplete();
// list.getToDoItems(false).forEach((item) => item.printDetails());
// list.getToDoItems(true).forEach((item)=> item.printDetails())
// console.log(list.getItemCounts())
