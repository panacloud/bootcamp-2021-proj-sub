"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("./todoItem");
const inquirer = require("inquirer");
const jsondb_1 = require("./jsondb");
let todos = [
    new todoItem_1.TodoItem(1, "Go for walk"),
    new todoItem_1.TodoItem(2, "Work on Project 1"),
    new todoItem_1.TodoItem(3, "Meeting with Client"),
];
let collection = new jsondb_1.JsonTodoCollection("Shahrayar", todos);
var showCompleted = false;
function mainMenu() {
    console.log(`${collection.userName}'s Todo List ` +
        `(${collection.getItemsCount().incomplete} items in list)`);
    collection.getTodoItems(showCompleted).forEach((item) => item.printDetails());
}
var Commands;
(function (Commands) {
    Commands["Add"] = "Add New Task";
    Commands["Complete"] = "Mark Task as Completed / Not Completed";
    Commands["Toggle"] = "Show / Hide Completed Task";
    Commands["Purge"] = "Remove Completed Tasks";
    Commands["Quit"] = "Quit";
})(Commands || (Commands = {}));
function promptAdd() {
    console.clear();
    inquirer
        .prompt({ type: "input", name: "add", message: "Add new task" })
        .then((answers) => {
        if (answers["add"] !== "") {
            collection.addTodo(answers.add);
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
        message: "Mark Tasks Complete",
        choices: collection.getTodoItems(showCompleted).map((item) => ({
            name: item.task,
            value: item.id,
            checked: item.complete,
        })),
    })
        .then((answers) => {
        let completedTasks = answers["complete"];
        collection
            .getTodoItems(true)
            .forEach((item) => collection.markComplete(item.id, completedTasks.find((id) => id === item.id) != undefined));
        promptUser();
    });
}
function promptUser() {
    console.clear();
    mainMenu();
    inquirer
        .prompt({
        type: "list",
        name: "command",
        message: "Choose option",
        choices: Object.values(Commands),
    })
        .then((answers) => {
        switch (answers["command"]) {
            case Commands.Toggle:
                showCompleted = !showCompleted;
                promptUser();
                break;
            case Commands.Add:
                promptAdd();
                break;
            case Commands.Complete:
                if (collection.getItemsCount().incomplete > 0) {
                    promptComplete();
                }
                else {
                    promptUser();
                }
                break;
            case Commands.Purge:
                collection.removeComplete();
                promptUser();
                break;
        }
    });
}
promptUser();
