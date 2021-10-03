"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todocollection_1 = require("./todocollection");
const todoitems_1 = require("./todoitems");
const inquirer = require("inquirer");
let todos = [
    new todoitems_1.TodoItem(1, "Buy Flowers"), new todoitems_1.TodoItem(2, "Get Shoes"),
    new todoitems_1.TodoItem(3, "Collect Tickets"), new todoitems_1.TodoItem(4, "Call Joe", true)
];
let collection = new todocollection_1.TodoCollection("Adam", todos);
// console.log(`${collection.username}'s todos list!'`)
// collection.getTodoItems(true).forEach(item=> item.printDetails());
// collection.removeComplete()
// collection.getTodoItems(true).forEach(item=> item.printDetails());
// console.log(collection.taskStatistics())
let showComplete = true;
function displayTodoList() {
    console.log(`${collection.username}'s Todo List `);
    collection.getTodoItems(showComplete).forEach(item => item.printDetails());
}
var Commands;
(function (Commands) {
    Commands["Quit"] = "Quit";
    Commands["Add"] = "Add new task";
    Commands["Complete"] = "Complete task";
    Commands["Purge"] = "Remove completed task";
    Commands["Toggle"] = "Show/Hide completed task";
})(Commands || (Commands = {}));
function promptAddTask() {
    console.clear();
    inquirer.prompt({
        type: "input",
        name: "add",
        message: "Enter task:"
    }).then(answers => {
        if (answers["add"] !== "") {
            collection.addTodo(answers["add"]);
        }
        promptUser();
    });
}
function promptComplete() {
    console.clear();
    inquirer.prompt({
        type: "checkbox",
        name: "complete",
        message: "Mark Tasks Complete:",
        choices: collection.getTodoItems(showComplete).map(item => ({ name: item.task, value: item.id, checked: item.complete }))
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
        message: "Choose option",
        choices: Object.values(Commands)
    }).then(answers => {
        switch (answers["command"]) {
            case Commands.Toggle:
                showComplete = !showComplete;
                promptUser();
                break;
            case Commands.Add:
                promptAddTask();
                break;
            case Commands.Complete:
                if (collection.taskStatistics().incomplete > 0) {
                    promptComplete();
                }
                else {
                    promptUser();
                }
                break;
            case Commands.Purge:
                collection.removeComplete();
                promptUser();
            default:
                break;
        }
    });
}
promptUser();
