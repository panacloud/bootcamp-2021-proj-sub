// console.clear();
// console.log("Adam's todo list");

import { TodoItem } from "./todoItem";
import { TodoCollection } from './todoCollection';
import * as inquirer from 'inquirer';
import { JsonTodoCollection } from './jsonTodoColleciton';

let todos: TodoItem[] = [
    new TodoItem(1, "Buy Flowers"), new TodoItem(2, "Get Shoes"),
    new TodoItem(3, "collect Tickets"), new TodoItem(4, "call Joe", true)];

let collection: TodoCollection = new JsonTodoCollection("Adam", todos);

let showCompleted = true;

function displayTodoList(): void {

    console.log(`${collection.userName}'s Todo List`
        + `(${collection.getItemCounts().incomplete} items to do)`);

    collection.getTodoItems(showCompleted).forEach(item => item.printDetails());

}

enum Commands {
    toggle = "Show/Hide Completed",
    Quit = "Quit",
    Add = "Add New Task",
    complete = "Complete Task",
    purge = "Remove Completed Tasks"
}

function promptAdd(): void {
    console.clear();
    inquirer.prompt({
        type: "input",
        name: "Add",
        message: "Enter Task:"
    }).then(answers => {
        if (answers["Add"] !== "") {
            collection.addTodo(answers["Add"]);
        }
        promptUser();
    })
}

function promptComplete(): void {
    console.clear();
    inquirer.prompt({
        type: "checkbox",
        name: "complete",
        message: "Mark Tasks Complete",
        choices: collection.getTodoItems(showCompleted).map(item =>
            ({ name: item.task, value: item.id, checked: item.complete }))
    }).then(answers => {
        let completedTasks = answers["complete"] as number[];
        collection.getTodoItems(true).forEach(item =>
            collection.markComplete(item.id,
                completedTasks.find(id => id === item.id) != undefined));
        promptUser();
    })
}


function promptUser(): void {
    console.clear();
    displayTodoList();
    inquirer.prompt({
        type: "list",
        name: "command",
        message: "Choose Option",
        choices: Object.values(Commands),
        // badProperty: true
    }).then(answers => {
        switch (answers["command"]) {
            case Commands.toggle:
                showCompleted = !showCompleted;
                promptUser();
                break;
            case Commands.Add:
                promptAdd();
                break;
            case Commands.complete:
                if(collection.getItemCounts().incomplete > 0){
                    promptComplete();
                }
                else {
                    promptUser();
                }
                break;
            case Commands.purge:
                collection.removeComplete();
                promptUser();
                break;
        }
    })
}

promptUser();




//collection.addTodo(todoItem);

// collection.removeComplete();
// collection.getTodoItems(true).forEach(item => item.printDetails());
