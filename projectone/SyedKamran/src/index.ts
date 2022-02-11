import { TodoItem } from "./todoitem";
import { TodoCollecton } from "./todoCollection";
import * as inquirer from "inquirer";
import {jsonTodoCollection} from "./jsonTodoCollection";


let todos = [
    new TodoItem(1, "Wakeup", true),
    new TodoItem(2, "Say Prayer"), 
    new TodoItem (3, "Do Exercise"),
    new TodoItem(4, "Prepare for Officer")
]
let showCompleted = true;

let collection: TodoCollecton= new jsonTodoCollection("Syed Kamran", todos);
console.clear();

function displayTodoList(): void {
    console.log(`${collection.userName}'s Todo List `
    + `(${ collection.getItemsCount().incomplete } items to do)`);
    collection.getTodoItems(showCompleted).forEach(item => item.printDetails());
}

enum Commands {
    Add = "Add Task",
    complete = "Complete Task",
    Toggle = "Show/ Hide Completed",
    Purge = "Remove Completed Tasks",
    Quit = "Quit"
}

function promptAdd(): void {
    console.clear();
    inquirer.prompt({type:"input", name: "Add", message: "Add Task:" })
        .then(answers => {if (answers["Add"] !="") {
            collection.addTodo(answers["Add"]);
        }
        promptUser();
        })
    
}

function promptComplete(): void {
    console.clear();
    inquirer.prompt({ type: "checkbox", name: "complete",
        message: "Mark Tasks Complete",
        choices: collection.getTodoItems(showCompleted).map(item =>
            ({name: item.task, value: item.id, checked: item.complete}))
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
        message: "Choose option",
        choices: Object.values(Commands)
    }).then(answers => {
        switch(answers["command"]) {
            case Commands.Add:
                promptAdd();     
                break;     
            case Commands.Toggle:
                showCompleted=!showCompleted;
                promptUser();
                break;    
            case Commands.Purge:
                collection.removeComplete();
                promptUser();
                break;
                    
        }

    })
}
promptUser();
