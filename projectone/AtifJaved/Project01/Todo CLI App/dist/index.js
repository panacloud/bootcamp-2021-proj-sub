"use strict";
// console.clear();
// console.log("Adam's todo list");
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("./todoItem");
const inquirer = require("inquirer");
const jsonTodoColleciton_1 = require("./jsonTodoColleciton");
let todos = [
    new todoItem_1.TodoItem(1, "Buy Flowers"), new todoItem_1.TodoItem(2, "Get Shoes"),
    new todoItem_1.TodoItem(3, "collect Tickets"), new todoItem_1.TodoItem(4, "call Joe", true)
];
let collection = new jsonTodoColleciton_1.JsonTodoCollection("Adam", todos);
let showCompleted = true;
function displayTodoList() {
    console.log(`${collection.userName}'s Todo List`
        + `(${collection.getItemCounts().incomplete} items to do)`);
    collection.getTodoItems(showCompleted).forEach(item => item.printDetails());
}
var Commands;
(function (Commands) {
    Commands["toggle"] = "Show/Hide Completed";
    Commands["Quit"] = "Quit";
    Commands["Add"] = "Add New Task";
    Commands["complete"] = "Complete Task";
    Commands["purge"] = "Remove Completed Tasks";
})(Commands || (Commands = {}));
function promptAdd() {
    console.clear();
    inquirer.prompt({
        type: "input",
        name: "Add",
        message: "Enter Task:"
    }).then(answers => {
        if (answers["Add"] !== "") {
            collection.addTodo(answers["Add"]);
        }
        promptUser();
    });
}
function promptComplete() {
    console.clear();
    inquirer.prompt({
        type: "checkbox",
        name: "complete",
        message: "Mark Tasks Complete",
        choices: collection.getTodoItems(showCompleted).map(item => ({ name: item.task, value: item.id, checked: item.complete }))
    }).then(answers => {
        let completedTasks = answers["complete"];
        collection.getTodoItems(true).forEach(item => collection.markComplete(item.id, completedTasks.find(id => id === item.id) != undefined));
        promptUser();
    });
}
function promptUser() {
    console.clear();
    displayTodoList();
    inquirer.prompt({
        type: "list",
        name: "command",
        message: "Choose Option",
        choices: Object.values(Commands),
        // badProperty: true
    }).then(answers => {
        switch (answers["command"]) {
            case Commands.toggle:
                showCompleted = !showCompleted;
                promptUser();
                break;
            case Commands.Add:
                promptAdd();
                break;
            case Commands.complete:
                if (collection.getItemCounts().incomplete > 0) {
                    promptComplete();
                }
                else {
                    promptUser();
                }
                break;
            case Commands.purge:
                collection.removeComplete();
                promptUser();
                break;
        }
    });
}
promptUser();
//collection.addTodo(todoItem);
// collection.removeComplete();
// collection.getTodoItems(true).forEach(item => item.printDetails());
