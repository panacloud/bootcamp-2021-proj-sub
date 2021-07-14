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
    // AddTodos = "Add Todos",
    // DelTodos = "Delete Todos",
    // DoneTodos = "Complete Todo",
    Commands["DelDoneTodo"] = "Delete Completed Todos";
    Commands["Quit"] = "Quit";
})(Commands || (Commands = {}));
let allTodo = new todoList_1.TodoList();
function todoByStatus(Status) {
    allTodo.getTodoWithStatus(Status).forEach((todo) => todo.printTodo());
}
;
allTodo.printTodos();
// function promptAdd(): void {
//     inquirer.prompt({
//         type: "input",
//         name: "add",
//         message: "Enter Todo:"
//     }).then(answers => {
//         if (answers["add"] !== "") {
//             allTodo.addTodo(answers["add"]);
//         }
//         promptUser();
//     });
// }
// function promptDel(): void {
//     inquirer.prompt({
//         type: "number",
//         name: "del",
//         message: "Enter TodoID to delete:"
//     }).then(answers => {
//         if (answers["del"] !== "") {
//             allTodo.deleteTodo(answers["del"]);
//         }
//         promptUser();
//     });
// }
// function promptDone(): void {
//     inquirer.prompt({
//         type: "number",
//         name: "Done",
//         message: "Enter TodoID to Complete:"
//     }).then(answers => {
//         if (answers["Done"] !== "") {
//             allTodo.completeTodo(answers["Done"]);
//         }
//         promptUser();
//     });
// }
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
            case Commands.ShowDone:
                todoByStatus(true);
                promptUser();
            case Commands.ShowUndone:
                todoByStatus(false);
                promptUser();
            case Commands.ShowStats:
                console.log(`Total: ${allTodo.countTodo().total}`);
                console.log(`Completed: ${allTodo.countTodo().complete}`);
                console.log(`Incomplete: ${allTodo.countTodo().incomplete}`);
                promptUser();
            // case Commands.AddTodos:
            //     promptAdd();
            // case Commands.DelTodos:
            //     promptDel();
            // case Commands.DoneTodos:
            //     promptDone();
            // case Commands.DelDoneTodo:
            //     allTodo.deleteDoneTodo();
            //     promptUser();
            case Commands.Quit:
                break;
            default:
                break;
        }
    });
}
promptUser();
