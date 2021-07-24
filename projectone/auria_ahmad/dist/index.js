"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("./todoItem");
const inquirer = require("inquirer");
const jsonTodoCollection_1 = require("./jsonTodoCollection");
let todos = [
    new todoItem_1.TodoItem(1, "Buy flowers"), new todoItem_1.TodoItem(2, "get shoes"),
    new todoItem_1.TodoItem(3, "collect tickets"), new todoItem_1.TodoItem(4, "call joe", true)
];
// let collection: TodoCollection = new TodoCollection("Auria Ahmad", todos);
let collection = new jsonTodoCollection_1.JsonTodoCollection("Auria Ahmad", todos);
let showCompleted = true;
function displayTodoList() {
    console.log(`${collection.userName}'s Todo list.` + `(${collection.getItemCounts().incomplete} items to do)`);
    collection.getTodoItems(showCompleted).forEach(item => item.printDetails());
}
var Commands;
(function (Commands) {
    Commands["Add"] = "add new task";
    Commands["Complete"] = "Complete Task";
    Commands["Toggle"] = "Show/HIde Completed";
    Commands["Purge"] = "Remove Completed Tasks";
    Commands["Quit"] = "Quit";
})(Commands || (Commands = {}));
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
        choices: Object.values(Commands),
        // badProperty: true
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
        }
    });
}
promptUser();
// console.clear();
// console.log(`${collection.userName}'s Todo list.`+`(${collection.getItemCounts().incomplete} items to do)`);
// collection.removeComplete();
// collection.getTodoItems(true).forEach(item => item.printDetails());
// let newId:number = collection.addTodo("Go for run");
// let todoItem:TodoItem = collection.getTodoById(newId);
// console.log(JSON.stringify(todoItem));
// todoItem.printDetails();
// collection.addTodo(todoItem);
