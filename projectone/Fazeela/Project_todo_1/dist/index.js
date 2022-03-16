"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("./todoItem");
const jsonTodoCollection_1 = require("./jsonTodoCollection");
const inquirer = require("inquirer");
let todos = [new todoItem_1.TodoItem(1, 'Go for run', true), new todoItem_1.TodoItem(2, 'Buy flowers', true),
    new todoItem_1.TodoItem(3, 'I ate fruits', false), new todoItem_1.TodoItem(4, 'Pick up the books', false)];
let collection = new jsonTodoCollection_1.JsonTodoCollection('Sharjeel', todos);
let showCompleted = true;
function displayTodoList() {
    console.log(`${collection.userName}'s todo list...!\t`
        + `Total tasks are:${collection.getItemCounts().total}`
        + `\t(${collection.getItemCounts().incomplete})itmes remaining to do`);
    collection.getTodoItems(showCompleted).forEach(item => item.printDetails());
}
///////////////////////////////////////////////////////
var Commands;
(function (Commands) {
    Commands["Add"] = "Add new tasks..!";
    Commands["Complete"] = "Complete tasks are...!";
    Commands["Toggle"] = "Show/Hide completed tasks";
    Commands["Purge"] = "Remove completed tasks";
    Commands["Quit"] = "Quit";
})(Commands || (Commands = {}));
function promptAdd() {
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
        message: "Mark a task to be completed",
        choices: collection.getTodoItems(showCompleted).map(item => ({
            name: item.task,
            value: item.id,
            checked: item.complete
        })),
    }).then(answers => {
        let completedTasks = answers["complete"];
        collection.getTodoItems(true).forEach(item => {
            collection.markComplete(item.id, completedTasks.find(id => id === item.id) != undefined);
        });
        promptUser();
    });
}
function promptUser() {
    console.clear();
    displayTodoList();
    inquirer.prompt({
        type: "list",
        name: "command",
        message: "choose option",
        choices: Object.values(Commands),
    }).then(answers => {
        switch (answers["command"]) {
            case Commands.Toggle: {
                showCompleted = !showCompleted;
                promptUser();
                break;
            }
            case Commands.Add: {
                promptAdd();
                break;
            }
            case Commands.Complete: {
                if (collection.getItemCounts().incomplete > 0) {
                    promptComplete();
                }
                else {
                    promptUser();
                }
                break;
            }
            case Commands.Purge: {
                collection.removeComplete();
                promptUser();
                break;
            }
        }
    });
}
promptUser();
