"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = require("./Item");
const inquirer = require("inquirer");
const jsonTodoCollection_1 = require("./jsonTodoCollection");
// icollect.AddTodo("");
// icollect.AddTodo("");
// icollect.AddTodo("");
// icollect.AddTodo("");
// icollect.AddTodo("Take Rest");
// icollect.AddTodo("Eat Dinner");
// icollect.AddTodo("Go to Sleep");
let todos = [
    new Item_1.Item(1, "Eat Breakfast"), new Item_1.Item(2, "Go to School")
];
//let collection : ItemCollection = new ItemCollection (todos);
let collection = new jsonTodoCollection_1.JsonTodoCollection("Abdullah Saqib", todos);
// collection.Taskcomplete(2,true);
// collection.Taskcomplete(4,true);
// icollect.Taskcomplete(6,true);
let showcompleted = true;
//console.log("All Tasks are as follows :");
//icollect.getTodoItems(true).forEach(item => item.PrintDetails());
// console.log("\n The Completed Tasks are : ");
// icollect.listofcompletedtasks();
// icollect.removecompletedtasks();
// console.log(`Incomplete tasks are : ${icollect.getItemCounts().incomplete}`);
function displaytodoList() {
    console.log(`My Todo List  has`
        + `(${collection.getItemCounts().total} items to do)`);
    collection.getTodoItems(showcompleted).forEach(item => item.PrintDetails());
    //icollect.getTodoItems(showcompleted).forEach(items => items.PrintDetails());
}
function AddPrompt() {
    console.clear();
    inquirer.prompt({ type: "input", name: "add", message: "Enter task:" })
        .then(answers => {
        if (answers["add"] !== "") {
            collection.AddTodo(answers["add"]);
        }
        promptUser();
    });
}
function promptComplete() {
    console.clear();
    inquirer.prompt({ type: "checkbox", name: "complete",
        message: "Mark Tasks Complete",
        choices: collection.getTodoItems(showcompleted).map(item => ({ name: item.task, value: item.id, checked: item.complete }))
    }).then(answers => {
        let completedTasks = answers["complete"];
        collection.getTodoItems(true).forEach(item => collection.Taskcomplete(item.id, completedTasks.find(id => id === item.id) != undefined));
        promptUser();
    });
}
var Commands;
(function (Commands) {
    Commands["Add"] = "Add New Task";
    Commands["Toggle"] = "Show / Hide Completed";
    Commands["complete"] = "Mark Task complete";
    Commands["Purge"] = "Remove Completed Tasks";
    Commands["Quit"] = "Quit";
})(Commands || (Commands = {}));
function promptUser() {
    console.clear();
    displaytodoList();
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
                AddPrompt();
                break;
            case Commands.complete:
                if (collection.getItemCounts().incomplete > 0) {
                    promptComplete();
                }
                else {
                    promptUser();
                }
                break;
            case Commands.Purge:
                collection.removecompletedtasks();
                promptUser();
                break;
        }
    });
}
promptUser();
