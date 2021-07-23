"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const item_1 = require("./item");
const inquirer = require("inquirer");
const jsonTodoCollection_1 = require("./jsonTodoCollection");
let todos = [new item_1.item(1, "Buy Flower"), new item_1.item(2, "Get Shoes"),
    new item_1.item(3, "Collect Tickets", true)];
let myCollection = new jsonTodoCollection_1.JsonTodoCollection("Waqas", todos);
myCollection.addTodo("Call Joe");
let showCompleted = true;
function displayTodoList() {
    console.log(`Todo List (${myCollection.getItemCount().incomplete} things to Complete)`);
    // myCollection.printAllItems()
    myCollection.getTodoItems(showCompleted).forEach(item => item.print());
}
var Commands;
(function (Commands) {
    Commands["Add"] = "Add new Task";
    Commands["Toggle"] = "Show/Hide Completed";
    Commands["Complete"] = "Mark Completed";
    Commands["Purge"] = "Remove Completed Tasks";
    Commands["Quit"] = "Quit";
})(Commands || (Commands = {}));
function promptAdd() {
    console.clear();
    inquirer.prompt({
        type: "input", name: "add", message: "Enter task:"
    }).then(answers => {
        if (answers["add"] !== "") {
            myCollection.addTodo(answers["add"]);
        }
        promptUser();
    });
}
function promptComplete() {
    console.clear();
    inquirer.prompt({
        type: "checkbox", name: "complete", message: "Mark Tasks Complete",
        choices: myCollection.getTodoItems(showCompleted).map(item => ({
            name: item.name, value: item.id, checked: item.task_completion
        }))
    }).then(answers => {
        let completedTask = answers["complete"];
        myCollection.getTodoItems(true).forEach(item => (myCollection.taskDone(item.id, (completedTask.find(id => id === item.id)) != undefined)));
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
                if (myCollection.getItemCount().incomplete > 0) {
                    promptComplete();
                }
                else {
                    promptUser();
                }
                break;
            case Commands.Purge:
                myCollection.removeCompletedTask();
                promptUser();
                break;
        }
    });
}
promptUser();
