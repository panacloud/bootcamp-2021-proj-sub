"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("./todoItem");
const todoCollection_1 = require("./todoCollection");
const inquirer = require("inquirer");
// import {JsonTodoCollection} from "./jsonTodoCollection";
let todos = [
    new todoItem_1.TodoItem(1, "Buy Flowers"),
    new todoItem_1.TodoItem(2, "Get Shoes"),
    new todoItem_1.TodoItem(3, "Collect Tickets"),
    new todoItem_1.TodoItem(4, "Call Joe", true)
];
let collection = new todoCollection_1.TodoCollection("Ns", todos);
// let collection:TodoCollection = new JsonTodoCollection("NS",todos);
let showCompleted = true;
function displayTodoList() {
    console.log(`${collection.userName}'s Todo List`
        + `(${collection.getItemCounts().incomplete} items to do)`
        + collection.getTodoItems(showCompleted).forEach(item => item.printDetails()));
}
var Commands;
(function (Commands) {
    Commands["Add"] = "Add New Task";
    Commands["Complete"] = "Complete Task";
    Commands["Toggle"] = "Show/Hide Completed";
    Commands["Purge"] = "Remove Completed Tasks";
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
// function promptComplete(): void {
//     console.clear();
//     inquirer.prompt({
//         type: "checkbox", name: "complete",
//         message: "Mark Tasks Complete",
//         choices: collection.getTodoItems(showCompleted).map(item =>
//             ({ name: item.task, value: item.id, checked: item.complete }))
//     }).then(answers => {
//         let completedTasks = answers["complete"] as number[];
//         collection.getTodoItems(true).forEach(item =>
//             collection.markComplete(item.id,
//                 completedTasks.find(id => id === item.id) != undefined));
//         promptUser();
//     })
// }
function promptComplete() {
    console.clear();
    inquirer.prompt({
        type: "checkbox",
        name: "complete",
        message: "Mark Tasks Complete",
        choices: collection.getTodoItems(showCompleted).map((item) => ({
            name: item.task,
            value: item.id,
            checked: item.complete
        }))
    }).then(answers => {
        let completedTasks = answers["complete"];
        //console.log(completedTasks);
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
                showCompleted = !showCompleted;
                promptUser();
                break;
            case Commands.Add:
                promptAdd();
                break;
            case Commands.Complete:
                if (collection.getItemCounts().incomplete > 0) {
                    console.log(collection.getItemCounts().incomplete);
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
// console.clear();
// console.log(`${collection.userName} Todo List` 
//             + `(${collection.getItemCounts().incomplete} items to do)`);
// let newId = collection.addTodo("Go for run");
// let todoItem = collection.getTodoById(newId);
// todoItem.printDetails();
// collection.addTodo(todoItem);
// collection.removeComplete();
// collection.getTodoItems(true).forEach(item => item.printDetails());
// console.log(JSON.stringify(todoItem));
