import { TodoCollection } from './todocollection';
import { TodoItem } from "./todoitems";
import { JsonTodoCollection } from './jsonTodoCollection';
import * as inquirer from 'inquirer';

let todos: TodoItem[] = [
    new TodoItem(1, "Buy Flowers"), new TodoItem(2, "Get Shoes"),
    new TodoItem(3, "Collect Tickets"), new TodoItem(4, "Call Joe", true)
];

let collection: TodoCollection = new JsonTodoCollection("Adam", todos);

let showComplete = true
function displayTodoList(): void {
    console.log(`${collection.username}'s Todo List `);
    collection.getTodoItems(showComplete).forEach(item => item.printDetails());
}
enum Commands {
    Quit = "Quit",
    Add = "Add new task",
    Complete = "Complete task",
    Purge = "Remove completed task",
    Toggle = "Show/Hide completed task"
}

function promptAddTask(): void{
    console.clear();
    inquirer.prompt({
        type: "input",
        name: "add",
        message: "Enter task:"
    }).then(answers =>{
        if(answers["add"] !== ""){
            collection.addTodo(answers["add"]);
        }
        promptUser();
    })
}

function promptComplete(): void{
    console.clear();
    inquirer.prompt({
        type: "checkbox",
        name: "complete",
        message: "Mark Tasks Complete:",
        choices: collection.getTodoItems(showComplete).map(item =>(
            {name: item.task, value: item.id, checked: item.complete}
        ))
    }).then(answers => {
        let completedTasks = answers["complete"] as number[];
        collection.getTodoItems(true).forEach(item=>
            collection.markComplete(item.id, completedTasks.find(id => id === item.id) != undefined)
        )
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
        switch(answers["command"])
        {
            case Commands.Toggle:
                showComplete = !showComplete;
                promptUser();
                break;
            case Commands.Add:
                promptAddTask();
                break;
            case Commands.Complete:
                if (collection.taskStatistics().incomplete > 0){
                    promptComplete();
                }
                else{
                    promptUser();
                }
                break;
            case Commands.Purge:
                collection.removeComplete();
                promptUser();
            default:
                break;
        }
    })
}
promptUser();