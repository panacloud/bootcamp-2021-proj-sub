"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//-----------------------------------------------------importing classes and requiests
const todoItem_1 = require("./todoItem");
const inquirer = require("inquirer");
const jsontodoList_1 = require("./jsontodoList");
//-------------------------------------------------------------todo collection array
let todos = [
    new todoItem_1.TodoItem(1, "Buy Flowers"), new todoItem_1.TodoItem(2, "Get Shoes"),
    new todoItem_1.TodoItem(3, "Collect Tickets"), new todoItem_1.TodoItem(4, "Call Joe", true)
];
//---------------------------------------------------  connecting to database
let collection = new jsontodoList_1.JsonTodoList("Ateeq", todos);
let showCompleted = true;
console.clear();
//----------------------------------------------------------displaying todo in ternimal
function displayTodoList() {
    console.log(`*****************************************************
    ${collection.userName}'s Todo List
    ********************************************** `
        + `
        (${collection.getItemCounts().incomplete} items pending)
        ------------------------------------------`);
    collection.getTodoItems(showCompleted).forEach(item => item.printTodo());
    console.log(`--------------------------------
    Command box
    -------------------------------`);
}
//-----------------------------------------------------------------defining commands
var Commands;
(function (Commands) {
    Commands["Add"] = "Add new Task";
    Commands["Edit"] = "Edit Task";
    Commands["Complete"] = "Complete Task";
    Commands["Toggle"] = "Show/Hide Completed";
    Commands["Purge"] = "Remove Completed Tasks";
    Commands["Quit"] = "Quit";
})(Commands || (Commands = {}));
//-------------------------------------------------------------------adding task
function promptAdd() {
    console.clear();
    inquirer.prompt({ type: "input", name: "add", message: "Enter task:" })
        .then(answers => {
        if (answers["add"] !== "") {
            collection.addTodo(answers["add"]);
        }
        promptUser();
    });
}
//---------------------------------------------------------------------editing task
function edittask() {
    console.clear();
    inquirer.prompt({
        type: "list", name: "edit",
        message: "Mark Tasks to edit",
        choices: collection.getTodoItems(showCompleted).map(item => ({ name: item.task, value: item.id }))
    }).then(answers => {
        let id = answers["edit"];
        if (id) {
            inquirer.prompt({ type: "input", name: "add", message: "Enter task:" })
                .then(answers => {
                if (answers["add"] !== "") {
                    let task = answers["add"];
                    collection.updateTodo(id, new todoItem_1.TodoItem(id, task));
                }
                promptUser();
            });
        }
    });
}
//------------------------------------------------- mark completed task
function promptComplete() {
    console.clear();
    inquirer.prompt({
        type: "checkbox", name: "complete",
        message: "Mark Tasks Complete",
        choices: collection.getTodoItems(showCompleted).map(item => ({ name: item.task, value: item.id, checked: item.complete }))
    }).then(answers => {
        let completedTasks = answers["complete"];
        collection.getTodoItems(true).forEach(item => collection.markComplete(item.id, completedTasks.find(id => id === item.id) != undefined));
        promptUser();
    });
}
//------------------------------------------------------------------------------ commands function
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
            case Commands.Edit:
                edittask();
                break;
        }
    });
}
promptUser();
let newId = collection.addTodo("Go for run");
let todoItem = collection.getTodoById(newId);
collection.removeComplete();
collection.updateTodo(2, new todoItem_1.TodoItem(2, "get milk"));
