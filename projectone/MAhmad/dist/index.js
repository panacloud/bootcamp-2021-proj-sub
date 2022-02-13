"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer = require("inquirer");
const jsonTodoCollection_1 = require("./jsonTodoCollection");
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
let allTodo = new jsonTodoCollection_1.JsonTodoCollection("Ahmad", []);
function todoByStatus(Status) {
    allTodo.getTodoWithStatus(Status).forEach((todo) => todo.printTodo());
}
console.log(`${allTodo.userName}'s Todo List`);
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
        type: "checkbox",
        name: "Del",
        message: "Mark the todos to delete them:",
        choices: allTodo.getAllTodos().map(todo => ({ name: todo.name, value: todo.id, checked: todo.status }))
    }).then(answers => {
        let deletedTodos = answers["Del"];
        deletedTodos.forEach(todo => {
            allTodo.deleteTodo(todo);
        });
        promptUser();
    });
}
function promptDone() {
    inquirer.prompt({
        type: "checkbox",
        name: "Done",
        message: "Mark the todos to complete them:",
        choices: allTodo.getTodoWithStatus(false).map(todo => ({ name: todo.name, value: todo.id, checked: todo.status }))
    }).then(answers => {
        let completedTodos = answers["Done"];
        completedTodos.forEach(todo => {
            allTodo.completeTodo(todo);
        });
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
            case Commands.ShowAllTodos:
                allTodo.printTodos();
                promptUser();
                break;
            case Commands.ShowDone:
                todoByStatus(true);
                promptUser();
                break;
            case Commands.ShowUndone:
                todoByStatus(false);
                promptUser();
                break;
            case Commands.ShowStats:
                console.log(`Total: ${allTodo.countTodo().total}`);
                console.log(`Completed: ${allTodo.countTodo().complete}`);
                console.log(`Incomplete: ${allTodo.countTodo().incomplete}`);
                promptUser();
                break;
            case Commands.AddTodos:
                promptAdd();
                break;
            case Commands.DelTodos:
                promptDel();
                break;
            case Commands.DoneTodos:
                promptDone();
                break;
            case Commands.DelDoneTodo:
                allTodo.deleteDoneTodo();
                promptUser();
                break;
            case Commands.Quit:
                break;
        }
    });
}
promptUser();
