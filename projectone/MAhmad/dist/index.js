"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoList_1 = require("./todoList");
const inquirer = require("inquirer");
var Commands;
(function (Commands) {
    Commands["ShowAllTodos"] = "Show All Todos";
    Commands["ShowDone"] = "Show Completed Todos";
    Commands["ShowUndone"] = "Show Incomplete Todos";
    Commands["ShowStats"] = "Show Stats of Todos";
    Commands["AddTodos"] = "Add Todos";
    Commands["DelTodos"] = "Delete Todos";
    Commands["DoneTodos"] = "Complete Todo";
    Commands["DelDoneTodo"] = "Delete Completed Todos";
    Commands["Quit"] = "Quit";
})(Commands || (Commands = {}));
let allTodo = new todoList_1.TodoList();
allTodo.addTodo('task');
allTodo.addTodo('task2');
allTodo.addTodo('task3');
allTodo.completeTodo(3);
allTodo.deleteTodo(2);
function todoByStatus(Status) {
    allTodo.getTodoWithStatus(Status).forEach((todo) => todo.printTodo());
}
// allTodo.deleteDoneTodo();
allTodo.printTodos();
function promptAdd() {
    inquirer.prompt({
        type: "input",
        name: "add",
        message: "Enter Todo:"
    }).then(answers => {
        if (answers["add"] !== "") {
            allTodo.addTodo(answers["add"]);
        }
        promptUser();
    });
}
function promptDel() {
    inquirer.prompt({
        type: "number",
        name: "del",
        message: "Enter TodoID to delete:"
    }).then(answers => {
        if (answers["del"] !== "") {
            allTodo.deleteTodo(answers["del"]);
        }
        promptUser();
    });
}
function promptDone() {
    inquirer.prompt({
        type: "number",
        name: "Done",
        message: "Enter TodoID to Complete:"
    }).then(answers => {
        if (answers["Done"] !== "") {
            allTodo.completeTodo(answers["Done"]);
        }
        promptUser();
    });
}
function promptUser() {
    inquirer.prompt({
        type: "list",
        name: "command",
        message: "Choose option",
        choices: Object.values(Commands),
        // badProperty: true
    }).then(answers => {
        switch (answers["command"]) {
            case Commands.ShowDone:
                todoByStatus(true);
                promptUser();
            case Commands.ShowUndone:
                todoByStatus(false);
                promptUser();
            case Commands.ShowAllTodos:
                allTodo.printTodos();
                promptUser();
        }
        switch (answers["command"]) {
            case Commands.ShowStats:
                console.log(`Total: ${allTodo.countTodo().total}`);
                console.log(`Completed: ${allTodo.countTodo().complete}`);
                console.log(`Incomplete: ${allTodo.countTodo().incomplete}`);
                promptUser();
        }
    });
}
promptUser();
