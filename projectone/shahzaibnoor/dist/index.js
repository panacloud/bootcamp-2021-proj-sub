"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TodoItem_1 = require("./TodoItem");
const jsonToDoCollection_1 = require("./jsonToDoCollection");
//
const inquirer = require("inquirer");
let todos = [
    new TodoItem_1.TodoItem(1, 'Test project 1'),
    new TodoItem_1.TodoItem(2, 'Test project 2'),
    new TodoItem_1.TodoItem(3, 'Test project 3'),
    new TodoItem_1.TodoItem(4, 'Test project 4', true),
];
// Create a collection.
// let collection: todoCollection = new todoCollection('Shahzaib', todos);
let collection = new jsonToDoCollection_1.JsonTodoCollection('Shahzaib', todos);
let showCompleted = true;
console.clear();
console.log(`${collection.username} - To Do List`);
// let newId: number = collection.addToDo('Go for Run');
// let todoItem: TodoItem = collection.getTodoById(newId);
// console.log(JSON.stringify(todoItem));
//
// Printing details.
// collection.getToDoItems(false).forEach(item => item.printDetails());
//
// Remove completed tasks.
// collection.removeComplete();
// collection.getToDoItems(true).forEach(item => item.printDetails());
// 
function displayToDoList() {
    console.log(`${collection.username}'s Todo List `
        + `(${collection.getItemCounts().incomplete} items to do)`);
    collection.getToDoItems(showCompleted).forEach(item => item.printDetails());
}
var Commands;
(function (Commands) {
    Commands["Add"] = "Add New Task";
    Commands["Toggle"] = "Show/Hide Completed";
    Commands["Quit"] = "Quit";
    Commands["Complete"] = "Complete Task";
    Commands["Purge"] = "Remove Completed Tasks";
    Commands["Delete"] = "Delete Task";
})(Commands || (Commands = {}));
;
function promptAdd() {
    console.clear();
    inquirer.prompt({
        type: "input",
        name: "add",
        message: "Enter task"
    }).then(answers => {
        if (answers['add'] !== "") {
            collection.addToDo(answers["add"]);
        }
        promptUser();
    });
}
function promptDelete() {
    console.clear();
    inquirer.prompt({
        type: "list",
        name: "delete",
        message: "Delete Todos",
        choices: collection.getToDoItems(showCompleted).map(item => ({ name: item.task, value: item.id }))
    }).then(answers => {
        let task = answers['delete'];
        collection.deleteToDo(task);
        promptUser();
    });
}
function promptComplete() {
    console.clear();
    inquirer.prompt({ type: "checkbox", name: "complete",
        message: "Mark Tasks Complete",
        choices: collection.getToDoItems(showCompleted).map(item => ({ name: item.task, value: item.id, checked: item.complete }))
    }).then(answers => {
        let completedTasks = answers["complete"];
        collection.getToDoItems(true).forEach(item => collection.markComplete(item.id, completedTasks.find(id => id === item.id) != undefined));
        promptUser();
    });
}
function promptUser() {
    console.clear();
    console.log(`To do status: ${showCompleted}`);
    displayToDoList();
    inquirer.prompt({
        type: 'list',
        choices: Object.values(Commands),
        name: "command",
        message: "Choose Options"
    }).then(answers => {
        switch (answers['command']) {
            case Commands.Toggle:
                showCompleted = !showCompleted;
                promptUser();
                break;
            case Commands.Add:
                promptAdd();
                break;
            case Commands.Delete:
                promptDelete();
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
