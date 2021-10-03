"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("./todoItem");
const inquirer = require("inquirer");
const jsonTodoCollection_1 = require("./jsonTodoCollection");
//console.clear();
//console.log("Dan's File");
let todos = [
    new todoItem_1.Todoitem(1, "Buy Flowers"),
    new todoItem_1.Todoitem(2, "Water Plants"),
    new todoItem_1.Todoitem(3, "Eating Breakfast"),
    new todoItem_1.Todoitem(4, "Having a tight sleep", true)
];
//let collection: Todocollection = new Todocollection("Dan",todos);
let collection = new jsonTodoCollection_1.JsonTodoCollection("Dan's", todos);
let showCompleted = true;
function displayTodoList() {
    console.log(`${collection.userName}'s Todo List (${collection.getItemCounts().incomplete} Items Todo)'`);
    collection.getTodoItems(showCompleted).forEach(item => item.printDetails());
}
var Commands;
(function (Commands) {
    Commands["Add"] = "Add New Task";
    Commands["Complete"] = "Complete Task";
    Commands["Toggle"] = "Show/Hide Completed";
    Commands["Purge"] = "Remove Completed Task";
    Commands["Quit"] = "Quit";
})(Commands || (Commands = {}));
function promptAdd() {
    console.clear();
    inquirer.prompt({
        type: "input",
        name: "add",
        message: "Enter Task:",
    }).then(answers => {
        if (answers.add !== "") {
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
        message: "Mark Task Complete",
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
        //badProperty:true
    }).then(answers => {
        //if (answers["command"] != Commands.Quit){
        //  promptUser();
        //}
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
//console.clear();
//console.log(`${collection.userName}'s Todo List`);
//console.log(`${collection.getItemCounts().incomplete} items to do`);
//let newid: number = collection.addTodo("Go for run");
//let todoItem: Todoitem = collection.getTodoById(newid);
//todoItem.printDetails();
//collection.addTodo(todoItem);
//collection.removeComplete();
//collection.getTodoItems(true).forEach(item => item.printDetails());
//console.log(JSON.stringify(todoItem));
