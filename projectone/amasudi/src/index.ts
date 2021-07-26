import { TodoItem } from "./classes/TodoItem";
import { TodoCollection } from "./classes/TodoCollection";
import * as inquirer from "inquirer";
import list = require("inquirer/lib/prompts/list");
import { JsonTodoCollection } from "./classes/JsonTodoCollection";

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

let todoList: TodoCollection = new JsonTodoCollection([]);

var addTodoAction = (): void => {
    console.clear();
    inquirer.prompt({
        type: "input",
        name: "add",
        message: "Enter New Todo:"
    }).then(answers => {
        if (answers["add"]!=="") {
            todoList.addTodo(answers["add"]);
        }
        showPrompt();
    });
}

var removeTodoAction = (): void => {
    console.clear();
    inquirer.prompt({
        type: "number",
        name: "remove",
        message: "Enter Todo ID:"
    }).then(answers => {
        if (answers["remove"]!=="") {
            todoList.removeTodo(answers["remove"]);
        }
        showPrompt();
    });
}

var markCompleteAction = (): void => {
    console.clear();
    inquirer.prompt({
        type: "number",
        name: "markCompleted",
        message: "Enter Todo ID:"
    }).then(answers => {
        if (answers["markCompleted"]!=="") {
            todoList.markComplete(answers["markCompleted"], true);
        }
        showPrompt();
    });
}

var getAllCompletedIncompletedTodosAction = (calledFromOutSide: boolean = true): void => {
    if (calledFromOutSide) console.clear();
    enum CommandsCompletedIncompleted {
        Completed = "Completed Todos.",
        Incompleted = "Incompleted Todos.",
        GoBack = "Go back to main optios."
    }
    inquirer.prompt({
        type: "list",
        name: "showCompletedIncompletedTodos",
        message: "Choose an option:",
        choices: Object.values(CommandsCompletedIncompleted)
    }).then(answers => {
        if (answers["showCompletedIncompletedTodos"] !== CommandsCompletedIncompleted.GoBack) {
            todoList.printAll(answers["showCompletedIncompletedTodos"] === CommandsCompletedIncompleted.Completed);
            getAllCompletedIncompletedTodosAction(false);
        } else {
            console.clear();
            showPrompt();
        }
    });
}

var removeTodosAction = (calledFromOutSide : boolean = true): void => {
    if (calledFromOutSide) console.clear();
    enum CommandsCompletedIncompleted {
        Completed = "Completed Todos.",
        Incompleted = "Incompleted Todos.",
        GoBack = "Go back to main optios"
    }
    inquirer.prompt({
        type: "list",
        name: "removeCompletedIncompletedTodos",
        message: "Choose an option:",
        choices: Object.values(CommandsCompletedIncompleted)
    }).then(answers => {
        if (answers["removeCompletedIncompletedTodos"] !== CommandsCompletedIncompleted.GoBack) {
            todoList.removeTodos(answers["removeCompletedIncompletedTodos"] === CommandsCompletedIncompleted.Completed);
            removeTodosAction(false);
        } else {
            console.clear();
            showPrompt();
        }
    });
}

enum Commands {
    Add = "Add New Todo",
    Remove = "Remove Todo by ID",
    Complete = "Complete Todo by ID",
    AllCompletedIncompleted = "Display All Completed/Incompleted Todos",
    RemoveCompletedIncompleted = "Remove Completed/Incompleted Todos",
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
}

showPrompt();