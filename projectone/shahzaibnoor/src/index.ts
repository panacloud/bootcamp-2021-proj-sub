import {TodoItem} from "./TodoItem";
import { todoCollection } from "./todoCollection";
import { JsonTodoCollection } from "./jsonToDoCollection";
//
import * as inquirer from "inquirer";

let todos: Array<TodoItem> = [
    new TodoItem(1, 'Test project 1'),
    new TodoItem(2, 'Test project 2'),
    new TodoItem(3, 'Test project 3'),
    new TodoItem(4, 'Test project 4', true),
]

// Create a collection.
// let collection: todoCollection = new todoCollection('Shahzaib', todos);
let collection: todoCollection = new JsonTodoCollection('Shahzaib', todos);
let showCompleted = true;
console.clear();
console.log(`${collection.username} - To Do List`)

// let newId: number = collection.addToDo('Go for Run');
// let todoItem: TodoItem = collection.getTodoById(newId);
// console.log(JSON.stringify(todoItem));
//
// Printing details.
// collection.getToDoItems(false).forEach(item => item.printDetails());
//
// Remove completed tasks.
// collection.removeComplete();
// collection.getToDoItems(true).forEach(item => item.printDetails());
// 

function displayToDoList(){
    console.log(`${collection.username}'s Todo List `
            + `(${ collection.getItemCounts().incomplete } items to do)`);
    collection.getToDoItems(showCompleted).forEach(item => item.printDetails());
}

enum Commands {
    Add = "Add New Task",
    Toggle = "Show/Hide Completed",
    Quit = "Quit",
    Complete = "Complete Task",
    Purge = "Remove Completed Tasks",
    Delete = "Delete Task"
};

function promptAdd(){
    console.clear();
    inquirer.prompt({
        type: "input",
        name: "add",
        message: "Enter task"
    }).then(answers => {
        if(answers['add'] !== ""){
            collection.addToDo(answers["add"])
        }
        promptUser();
    });
}

function promptDelete() {
    console.clear();
    inquirer.prompt({
        type: "list", 
        name: "delete",
        message: "Delete Todos",
        choices:collection.getToDoItems(showCompleted).map(item =>
            ({name: item.task, value: item.id}))
    }).then(answers => {
        let task = answers['delete'] as number
        collection.deleteToDo(task);
        promptUser();
    })
}

function promptComplete(): void {
    console.clear();
    inquirer.prompt({ type: "checkbox", name: "complete",
    message: "Mark Tasks Complete",
    choices: collection.getToDoItems(showCompleted).map(item =>
        ({name: item.task, value: item.id, checked: item.complete}))
    }).then(answers => {
            let completedTasks = answers["complete"] as number[];
            collection.getToDoItems(true).forEach(item =>
                collection.markComplete(item.id,
                    completedTasks.find(id => id === item.id) != undefined));
            promptUser();
        })
    }

function promptUser(): void {
    console.clear();
    console.log(`To do status: ${showCompleted}`);
    displayToDoList();
    inquirer.prompt({
        type: 'list',
        choices: Object.values(Commands),
        name: "command",
        message: "Choose Options"
    }).then(answers =>{
        switch(answers['command']){
            case Commands.Toggle:
                showCompleted = !showCompleted;
                promptUser();
                break;
            case Commands.Add:
                promptAdd();
                break;
            case Commands.Delete:
                promptDelete();
                break;
            case Commands.Complete:
                if(collection.getItemCounts().incomplete > 0) {
                    promptComplete();
                }else {
                    promptUser();
                }
                break;
            case Commands.Purge:
                collection.removeComplete();
                promptUser();
                break;
        }
    })
}

promptUser();