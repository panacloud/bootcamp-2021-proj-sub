import { TodoItem } from "./classes/TodoItem";
import { TodoCollection } from "./classes/TodoCollection";
import * as inquirer from "inquirer";
import list = require("inquirer/lib/prompts/list");

let todoList: TodoCollection = new TodoCollection();

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

var addTaskAction = (): void => {
    console.clear();
    inquirer.prompt({
        type: "input",
        name: "add",
        message: "Enter New Task:"
    }).then(answers => {
        if (answers["add"]!=="") {
            todoList.addTodo(answers["add"]);
        }
        showPrompt();
    });
}

var removeTaskAction = (): void => {
    console.clear();
    inquirer.prompt({
        type: "number",
        name: "remove",
        message: "Enter Task ID:"
    }).then(answers => {
        if (answers["remove"]!=="") {
            todoList.removeItem(answers["remove"]);
        }
        showPrompt();
    });
}

var markCompleteAction = (): void => {
    console.clear();
    inquirer.prompt({
        type: "number",
        name: "markCompleted",
        message: "Enter Task ID:"
    }).then(answers => {
        if (answers["markCompleted"]!=="") {
            todoList.taskDone(answers["markCompleted"]);
        }
        showPrompt();
    });
}

var getAllCompletedIncompletedTasksAction = (calledFromOutSide: boolean = true): void => {
    if (calledFromOutSide) console.clear();
    enum CommandsCompletedIncompleted {
        Completed = "Completed Tasks.",
        Incompleted = "Incompleted Tasks.",
        GoBack = "Go back to main optios."
    }
    inquirer.prompt({
        type: "list",
        name: "showCompletedIncompletedTasks",
        message: "Choose an option:",
        choices: Object.values(CommandsCompletedIncompleted)
    }).then(answers => {
        if (answers["showCompletedIncompletedTasks"] !== CommandsCompletedIncompleted.GoBack) {
            todoList.printAll(answers["showCompletedIncompletedTasks"] === CommandsCompletedIncompleted.Completed);
            getAllCompletedIncompletedTasksAction(false);
        } else {
            console.clear();
            showPrompt();
        }
    });
}

var removeTasksAction = (calledFromOutSide : boolean = true): void => {
    if (calledFromOutSide) console.clear();
    enum CommandsCompletedIncompleted {
        Completed = "Completed Tasks.",
        Incompleted = "Incompleted Tasks.",
        GoBack = "Go back to main optios"
    }
    inquirer.prompt({
        type: "list",
        name: "removeCompletedIncompletedTasks",
        message: "Choose an option:",
        choices: Object.values(CommandsCompletedIncompleted)
    }).then(answers => {
        if (answers["removeCompletedIncompletedTasks"] !== CommandsCompletedIncompleted.GoBack) {
            todoList.removeItems(answers["removeCompletedIncompletedTasks"] === CommandsCompletedIncompleted.Completed);
            removeTasksAction(false);
        } else {
            console.clear();
            showPrompt();
        }
    });
}

enum Commands {
    Add = "Add New Task",
    Remove = "Remove Task by ID",
    Complete = "Complete Task by ID",
    AllCompletedIncompleted = "Display All Completed/Incompleted Tasks",
    RemoveCompletedIncompleted = "Remove Completed/Incompleted Tasks",
    Quit = "Quit"
}

var showPrompt = (): void => {
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
}

showPrompt();