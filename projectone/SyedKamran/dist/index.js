"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoitem_1 = require("./todoitem");
const inquirer = require("inquirer");
const jsonTodoCollection_1 = require("./jsonTodoCollection");
let todos = [
    new todoitem_1.TodoItem(1, "Wakeup", true),
    new todoitem_1.TodoItem(2, "Say Prayer"),
    new todoitem_1.TodoItem(3, "Do Exercise"),
    new todoitem_1.TodoItem(4, "Prepare for Officer")
];
let showCompleted = true;
let collection = new jsonTodoCollection_1.jsonTodoCollection("Syed Kamran", todos);
console.clear();
function displayTodoList() {
    console.log(`${collection.userName}'s Todo List `
        + `(${collection.getItemsCount().incomplete} items to do)`);
    collection.getTodoItems(showCompleted).forEach(item => item.printDetails());
}
var Commands;
(function (Commands) {
    Commands["Add"] = "Add Task";
    Commands["complete"] = "Complete Task";
    Commands["Toggle"] = "Show/ Hide Completed";
    Commands["Purge"] = "Remove Completed Tasks";
    Commands["Quit"] = "Quit";
})(Commands || (Commands = {}));
function promptAdd() {
    console.clear();
    inquirer.prompt({ type: "input", name: "Add", message: "Add Task:" })
        .then(answers => {
        if (answers["Add"] != "") {
            collection.addTodo(answers["Add"]);
        }
        promptUser();
    });
}
function promptComplete() {
    console.clear();
    inquirer.prompt({ type: "checkbox", name: "complete",
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
        message: "Choose option",
        choices: Object.values(Commands)
    }).then(answers => {
        switch (answers["command"]) {
            case Commands.Add:
                promptAdd();
                break;
            case Commands.Toggle:
                showCompleted = !showCompleted;
                promptUser();
                break;
            case Commands.Purge:
                collection.removeComplete();
                promptUser();
                break;
        }
    });
}
promptUser();
