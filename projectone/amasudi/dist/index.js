"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer = require("inquirer");
const JsonTodoCollection_1 = require("./classes/JsonTodoCollection");
/*
let todoList: TodoCollection = new TodoCollection();

todoList.addTodo("Todo 1");
todoList.addTodo("Todo 2");
todoList.addTodo("Todo 3");
todoList.markComplete(2, true);
*/
/*
console.log("All Completed:");
todoList.printAll(true);
console.log("All Incompleted:");
todoList.printAll(false);
console.log("All Items:");
todoList.printAll();
*/
let todoList = new JsonTodoCollection_1.JsonTodoCollection([]);
var addTodoAction = () => {
    console.clear();
    inquirer.prompt({
        type: "input",
        name: "add",
        message: "Enter New Todo:"
    }).then(answers => {
        if (answers["add"] !== "") {
            todoList.addTodo(answers["add"]);
        }
        showPrompt();
    });
};
var removeTodoAction = () => {
    console.clear();
    inquirer.prompt({
        type: "number",
        name: "remove",
        message: "Enter Todo ID:"
    }).then(answers => {
        if (answers["remove"] !== "") {
            todoList.removeTodo(answers["remove"]);
        }
        showPrompt();
    });
};
var markCompleteAction = () => {
    console.clear();
    inquirer.prompt({
        type: "number",
        name: "markCompleted",
        message: "Enter Todo ID:"
    }).then(answers => {
        if (answers["markCompleted"] !== "") {
            todoList.markComplete(answers["markCompleted"], true);
        }
        showPrompt();
    });
};
var getAllCompletedIncompletedTodosAction = (calledFromOutSide = true) => {
    if (calledFromOutSide)
        console.clear();
    let CommandsCompletedIncompleted;
    (function (CommandsCompletedIncompleted) {
        CommandsCompletedIncompleted["Completed"] = "Completed Todos.";
        CommandsCompletedIncompleted["Incompleted"] = "Incompleted Todos.";
        CommandsCompletedIncompleted["GoBack"] = "Go back to main optios.";
    })(CommandsCompletedIncompleted || (CommandsCompletedIncompleted = {}));
    inquirer.prompt({
        type: "list",
        name: "showCompletedIncompletedTodos",
        message: "Choose an option:",
        choices: Object.values(CommandsCompletedIncompleted)
    }).then(answers => {
        if (answers["showCompletedIncompletedTodos"] !== CommandsCompletedIncompleted.GoBack) {
            todoList.printAll(answers["showCompletedIncompletedTodos"] === CommandsCompletedIncompleted.Completed);
            getAllCompletedIncompletedTodosAction(false);
        }
        else {
            console.clear();
            showPrompt();
        }
    });
};
var removeTodosAction = (calledFromOutSide = true) => {
    if (calledFromOutSide)
        console.clear();
    let CommandsCompletedIncompleted;
    (function (CommandsCompletedIncompleted) {
        CommandsCompletedIncompleted["Completed"] = "Completed Todos.";
        CommandsCompletedIncompleted["Incompleted"] = "Incompleted Todos.";
        CommandsCompletedIncompleted["GoBack"] = "Go back to main optios";
    })(CommandsCompletedIncompleted || (CommandsCompletedIncompleted = {}));
    inquirer.prompt({
        type: "list",
        name: "removeCompletedIncompletedTodos",
        message: "Choose an option:",
        choices: Object.values(CommandsCompletedIncompleted)
    }).then(answers => {
        if (answers["removeCompletedIncompletedTodos"] !== CommandsCompletedIncompleted.GoBack) {
            todoList.removeTodos(answers["removeCompletedIncompletedTodos"] === CommandsCompletedIncompleted.Completed);
            removeTodosAction(false);
        }
        else {
            console.clear();
            showPrompt();
        }
    });
};
var Commands;
(function (Commands) {
    Commands["Add"] = "Add New Todo";
    Commands["Remove"] = "Remove Todo by ID";
    Commands["Complete"] = "Complete Todo by ID";
    Commands["AllCompletedIncompleted"] = "Display All Completed/Incompleted Todos";
    Commands["RemoveCompletedIncompleted"] = "Remove Completed/Incompleted Todos";
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
                addTodoAction();
                break;
            case Commands.Remove:
                removeTodoAction();
                break;
            case Commands.Complete:
                markCompleteAction();
                break;
            case Commands.AllCompletedIncompleted:
                getAllCompletedIncompletedTodosAction();
                break;
            case Commands.RemoveCompletedIncompleted:
                removeTodosAction();
                break;
        }
    });
};
showPrompt();
