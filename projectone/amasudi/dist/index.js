"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TodoCollection_1 = require("./classes/TodoCollection");
const inquirer = require("inquirer");
let todoList = new TodoCollection_1.TodoCollection();
todoList.addTodo("Task 1");
todoList.addTodo("Task 2");
todoList.addTodo("Task 3");
todoList.taskDone(2);
/*
console.log("All Completed:");
todoList.printAll(true);
console.log("All Incompleted:");
todoList.printAll(false);
console.log("All Items:");
todoList.printAll();
*/
var addTaskAction = () => {
    console.clear();
    inquirer.prompt({
        type: "input",
        name: "add",
        message: "Enter New Task:"
    }).then(answers => {
        if (answers["add"] !== "") {
            todoList.addTodo(answers["add"]);
        }
        showPrompt();
    });
};
var removeTaskAction = () => {
    console.clear();
    inquirer.prompt({
        type: "number",
        name: "remove",
        message: "Enter Task ID:"
    }).then(answers => {
        if (answers["remove"] !== "") {
            todoList.removeItem(answers["remove"]);
        }
        showPrompt();
    });
};
var markCompleteAction = () => {
    console.clear();
    inquirer.prompt({
        type: "number",
        name: "markCompleted",
        message: "Enter Task ID:"
    }).then(answers => {
        if (answers["markCompleted"] !== "") {
            todoList.taskDone(answers["markCompleted"]);
        }
        showPrompt();
    });
};
var getAllCompletedIncompletedTasksAction = (calledFromOutSide = true) => {
    if (calledFromOutSide)
        console.clear();
    let CommandsCompletedIncompleted;
    (function (CommandsCompletedIncompleted) {
        CommandsCompletedIncompleted["Completed"] = "Completed Tasks.";
        CommandsCompletedIncompleted["Incompleted"] = "Incompleted Tasks.";
        CommandsCompletedIncompleted["GoBack"] = "Go back to main optios.";
    })(CommandsCompletedIncompleted || (CommandsCompletedIncompleted = {}));
    inquirer.prompt({
        type: "list",
        name: "showCompletedIncompletedTasks",
        message: "Choose an option:",
        choices: Object.values(CommandsCompletedIncompleted)
    }).then(answers => {
        if (answers["showCompletedIncompletedTasks"] !== CommandsCompletedIncompleted.GoBack) {
            todoList.printAll(answers["showCompletedIncompletedTasks"] === CommandsCompletedIncompleted.Completed);
            getAllCompletedIncompletedTasksAction(false);
        }
        else {
            console.clear();
            showPrompt();
        }
    });
};
var removeTasksAction = (calledFromOutSide = true) => {
    if (calledFromOutSide)
        console.clear();
    let CommandsCompletedIncompleted;
    (function (CommandsCompletedIncompleted) {
        CommandsCompletedIncompleted["Completed"] = "Completed Tasks.";
        CommandsCompletedIncompleted["Incompleted"] = "Incompleted Tasks.";
        CommandsCompletedIncompleted["GoBack"] = "Go back to main optios";
    })(CommandsCompletedIncompleted || (CommandsCompletedIncompleted = {}));
    inquirer.prompt({
        type: "list",
        name: "removeCompletedIncompletedTasks",
        message: "Choose an option:",
        choices: Object.values(CommandsCompletedIncompleted)
    }).then(answers => {
        if (answers["removeCompletedIncompletedTasks"] !== CommandsCompletedIncompleted.GoBack) {
            todoList.removeItems(answers["removeCompletedIncompletedTasks"] === CommandsCompletedIncompleted.Completed);
            removeTasksAction(false);
        }
        else {
            console.clear();
            showPrompt();
        }
    });
};
var Commands;
(function (Commands) {
    Commands["Add"] = "Add New Task";
    Commands["Remove"] = "Remove Task by ID";
    Commands["Complete"] = "Complete Task by ID";
    Commands["AllCompletedIncompleted"] = "Display All Completed/Incompleted Tasks";
    Commands["RemoveCompletedIncompleted"] = "Remove Completed/Incompleted Tasks";
    Commands["Quit"] = "Quit";
})(Commands || (Commands = {}));
var showPrompt = () => {
    console.clear();
    todoList.printAll();
    inquirer.prompt({
        type: "list",
        name: "commands",
        message: "Choose an option:",
        choices: Object.values(Commands)
    }).then(answers => {
        switch (answers["commands"]) {
            case Commands.Add:
                addTaskAction();
                break;
            case Commands.Remove:
                removeTaskAction();
                break;
            case Commands.Complete:
                markCompleteAction();
                break;
            case Commands.AllCompletedIncompleted:
                getAllCompletedIncompletedTasksAction();
                break;
            case Commands.RemoveCompletedIncompleted:
                removeTasksAction();
                break;
        }
    });
};
showPrompt();
