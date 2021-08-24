#!/usr/src/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer = require("inquirer");
const jsontodocollection_1 = require("./jsontodocollection");
console.clear();
let todo = [];
let alltasks = new jsontodocollection_1.JsonTodoCollection("Ahsan ", todo);
let showcompleted = true;
function displayalltodos() {
    console.log(`${alltasks.username}'s Todo List `
        + `(${alltasks.getitemcountss().incomplete} items to do)`);
    alltasks.gettodoitems(showcompleted).forEach(item => item.printdetails());
}
// let newtask:number = alltasks.addtodo("early morning planks");
// let newid:itemtodo = alltasks.gettodobyid(newtask);
// alltasks.removeCompleteitem();
var Commands;
(function (Commands) {
    Commands["complete"] = "Complete task";
    Commands["Add"] = "Add new task ";
    Commands["Toggle"] = "Show / Completed";
    Commands["purge"] = "Remove complete tasks";
    Commands["Quit"] = "Quit";
})(Commands || (Commands = {}));
function promptadd() {
    inquirer.prompt({
        type: "input",
        name: "name",
        message: "Enter task"
    }).then(answers => {
        if (answers["add"] !== "") {
            alltasks.addtodo(answers["add"]);
        }
        promptUser();
    });
}
function promptComplete() {
    console.clear();
    inquirer.prompt({ type: "checkbox", name: "complete",
        message: "Mark Tasks Complete",
        choices: alltasks.gettodoitems(showcompleted).map(item => ({ name: item.task, value: item.id, checked: item.complete }))
    }).then(answers => {
        let completedTasks = answers["complete"];
        alltasks.gettodoitems(true).forEach(item => alltasks.markcomplete(item.id, completedTasks.find(id => id === item.id) != undefined));
        promptUser();
    });
}
function promptUser() {
    displayalltodos();
    inquirer.prompt({
        type: "list",
        name: "command",
        message: "Choose option",
        choices: Object.values(Commands)
    }).then(answers => {
        switch (answers["command"]) {
            case Commands.Toggle:
                showcompleted = !showcompleted;
                promptUser();
                break;
            case Commands.Add:
                promptadd();
                break;
            case Commands.complete:
                if (alltasks.getitemcountss().incomplete > 0) {
                    promptComplete();
                }
                else {
                    promptUser();
                }
                break;
            case Commands.purge:
                alltasks.removeCompleteitem();
                promptUser();
                break;
        }
    });
}
promptUser();
