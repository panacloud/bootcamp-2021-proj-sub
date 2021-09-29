"use strict";
//In this, we can create different objects of class
Object.defineProperty(exports, "__esModule", { value: true });
const todo_1 = require("./todo");
const jsonTodoCollection_1 = require("./jsonTodoCollection");
const inquirer = require("inquirer");
//object declaration
let todos = [
    new todo_1.Todo(1, 'Go For Walk'),
    new todo_1.Todo(2, 'Have BreakFast'),
    new todo_1.Todo(3, 'Do code'),
    new todo_1.Todo(4, 'Go to Sleep', true)
];
let itemCollection = new jsonTodoCollection_1.JsonTodoCollection('muneeb', todos);
let showComplete = true;
function displayTodoList() {
    console.log(`${itemCollection.userName}'s Todo List `
        + `(${itemCollection.getTodoCounts().incomplete} items to do)`);
    itemCollection.getTodoByStatus(showComplete).forEach(item => item.printTask());
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
        name: "Add",
        message: "Enter Task"
    })
        .then(answers => {
        if (answers["Add"] !== "") {
            itemCollection.addTodo(answers["Add"]);
        }
        promptUser();
    });
}
function promptComplete() {
    console.clear();
    inquirer.prompt({ type: "checkbox", name: "complete",
        message: "Mark Tasks Complete",
        choices: itemCollection.getTodoByStatus(showComplete).map(item => ({ name: item.task, value: item.taskId, checked: item.done }))
    }).then(answers => {
        let completedTasks = answers["complete"];
        itemCollection.getTodoByStatus(true).forEach(item => itemCollection.markComplete(item.taskId, completedTasks.find(id => id === item.taskId) != undefined));
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
        choices: Object.values(Commands)
    })
        .then(answers => {
        switch (answers["command"]) {
            case Commands.Toggle:
                showComplete = !showComplete;
                promptUser();
                break;
            case Commands.Add:
                promptAdd();
                break;
            case Commands.Complete:
                if (itemCollection.getTodoCounts().incomplete > 0) {
                    promptComplete();
                }
                else {
                    promptUser();
                }
                break;
            case Commands.Purge:
                itemCollection.deleteComplete();
                promptUser();
                break;
            case Commands.Quit:
                break;
        }
    });
}
promptUser();
//instance calling
// todos[0].printTask();
// todos[1].printTask();
// itemCollection.addTodo('Doing Code');
// itemCollection.getTodoByStatus()
// itemCollection.markComplete(1, true);
// itemCollection.deleteComplete()
// itemCollection.getTodoCounts()
// itemCollection.addTodo('Doing code');
// itemCollection.taskDone(1);
