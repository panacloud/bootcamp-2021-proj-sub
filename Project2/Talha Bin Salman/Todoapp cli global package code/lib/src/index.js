"use strict";
exports.__esModule = true;
exports.todoapp = void 0;
var todoItem_1 = require("./todoItem");
var inquirer = require("inquirer");
var jsonTodoCollection_1 = require("./jsonTodoCollection");
function todoapp() {
    var todos = [
        new todoItem_1.TodoItem(1, "Complete AI project"), new todoItem_1.TodoItem(2, "Complete Todoapp"),
        new todoItem_1.TodoItem(3, "Publish code on npm"), new todoItem_1.TodoItem(4, "Take Rest", true)
    ];
    var collection = new jsonTodoCollection_1.JsonTodoCollection("Adam", todos);
    var showCompleted = true;
    function displayTodoList() {
        console.log(collection.userName + "'s Todo List "
            + ("(" + collection.getItemCounts().incomplete + " items to do)"));
        collection.getTodoItems(showCompleted).forEach(function (item) { return item.printDetails(); });
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
        inquirer.prompt({ type: "input", name: "add", message: "Enter task:" })
            .then(function (answers) {
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
            choices: collection.getTodoItems(showCompleted).map(function (item) {
                return ({ name: item.task, value: item.id, checked: item.complete });
            })
        }).then(function (answers) {
            var completedTasks = answers["complete"];
            collection.getTodoItems(true).forEach(function (item) {
                return collection.markComplete(item.id, completedTasks.find(function (id) { return id === item.id; }) != undefined);
            });
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
        }).then(function (answers) {
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
}
exports.todoapp = todoapp;
