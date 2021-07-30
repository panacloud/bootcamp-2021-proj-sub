import { JsonTodoCollections } from "./JsonTodoCollection";
import { TodoItem } from "./TodoItems";
import * as inquirer from 'inquirer';

let todos: TodoItem[] = [
   
];

let collection: JsonTodoCollections = new JsonTodoCollections("Abdullah", todos);

let showComplete:boolean = true;

enum options {
    Show = "Toggle Show Complete Tasks",
    Quit = "Quit",
    Add = "Add Task",
    Delete = "Delete Task",
    Complete = "Mark Complete"
}

function displayTodoList(): void {
    console.clear();
    console.log(`${collection.userName}'s Todo List`
        + `(${collection.getItemCounts().incomplete})`);
    collection.getTodoItems(showComplete).forEach(item => item.printDetails());
}

function addTask(): void {
    console.clear();
    inquirer.prompt({ type: "input", name: "add", message: "Enter task:" })
        .then(answer => {
            if (answer.add !== "") {
                collection.addTask(answer.add);
            }
            promtUser();
        })

}


function deleteTask(): void {
    console.clear()
    displayTodoList();
    inquirer.prompt({
        type: "list",
        name: "marked",
        message: "Mark Task to Delete",
        choices: collection.getTodoItems(showComplete).map(item => ({name: item.task, value: item.id, complete: item.complete })),
    }).then(response => {
        console.log(response.marked);
        collection.deleteTask(response.marked)
        promtUser();
    })
}

function completeTask(): void {
    console.clear()
    displayTodoList();
    inquirer.prompt({
        type: "list",
        name: "number",
        message: "Select task to complete it: ",
        choices: collection.getTodoItems(false).map(item => ({name: item.task, value: item.id, complete: item.complete })),
    }).then(response => {
        collection.completeTask(response.number);
        promtUser();
    })
}

function promtUser(): void {
    console.clear();
    displayTodoList();
    inquirer.prompt({
        type: "list",
        name: 'command',
        message: 'Choose options',
        choices: Object.values(options),
    }).then(answers => {
        switch (answers.command) {
            case options.Quit:
                break;
            case options.Add:
                addTask();
                break;
            case options.Delete:
                deleteTask();
                break;
            case options.Complete:
                completeTask();
                break;
            case options.Show:
                showComplete = !showComplete;
                promtUser();
                break;
            default:
                promtUser();
        }
    })
}

promtUser();