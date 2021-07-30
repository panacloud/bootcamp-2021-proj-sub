"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JsonTodoCollection_1 = require("./JsonTodoCollection");
const inquirer = require("inquirer");
let todos = [];
let collection = new JsonTodoCollection_1.JsonTodoCollections("Abdullah", todos);
let showComplete = true;
var options;
(function (options) {
    options["Show"] = "Toggle Show Complete Tasks";
    options["Quit"] = "Quit";
    options["Add"] = "Add Task";
    options["Delete"] = "Delete Task";
    options["Complete"] = "Mark Complete";
})(options || (options = {}));
function displayTodoList() {
    console.clear();
    console.log(`${collection.userName}'s Todo List`
        + `(${collection.getItemCounts().incomplete})`);
    collection.getTodoItems(showComplete).forEach(item => item.printDetails());
}
function addTask() {
    console.clear();
    inquirer.prompt({ type: "input", name: "add", message: "Enter task:" })
        .then(answer => {
        if (answer.add !== "") {
            collection.addTask(answer.add);
        }
        promtUser();
    });
}
function deleteTask() {
    console.clear();
    displayTodoList();
    inquirer.prompt({
        type: "list",
        name: "marked",
        message: "Mark Task to Delete",
        choices: collection.getTodoItems(showComplete).map(item => ({ name: item.task, value: item.id, complete: item.complete })),
    }).then(response => {
        console.log(response.marked);
        collection.deleteTask(response.marked);
        promtUser();
    });
}
function completeTask() {
    console.clear();
    displayTodoList();
    inquirer.prompt({
        type: "list",
        name: "number",
        message: "Select task to complete it: ",
        choices: collection.getTodoItems(false).map(item => ({ name: item.task, value: item.id, complete: item.complete })),
    }).then(response => {
        collection.completeTask(response.number);
        promtUser();
    });
}
function promtUser() {
    console.clear();
    displayTodoList();
    inquirer.prompt({
        type: "list",
        name: 'command',
        message: 'Choose options',
        choices: Object.values(options),
    }).then(answers => {
        switch (answers.command) {
            case options.Quit:
                break;
            case options.Add:
                addTask();
                break;
            case options.Delete:
                deleteTask();
                break;
            case options.Complete:
                completeTask();
                break;
            case options.Show:
                showComplete = !showComplete;
                promtUser();
                break;
            default:
                promtUser();
        }
    });
}
promtUser();
