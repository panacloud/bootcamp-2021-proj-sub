//-----------------------------------------------------importing classes and requiests
import { TodoItem } from "./todoItem";
import { TodoList } from "./todoList";
import * as inquirer from 'inquirer';
import { JsonTodoList } from './jsontodoList'

//-------------------------------------------------------------todo collection array
let todos: TodoItem[] = [
    new TodoItem(1, "Buy Flowers"), new TodoItem(2, "Get Shoes"),
    new TodoItem(3, "Collect Tickets"), new TodoItem(4, "Call Joe", true)];

//---------------------------------------------------  connecting to database
let collection: TodoList = new JsonTodoList("Ateeq", todos);


let showCompleted = true
console.clear();
//----------------------------------------------------------displaying todo in ternimal
function displayTodoList(): void {
    console.log(`*****************************************************
    ${collection.userName}'s Todo List
    ********************************************** `
        + `
        (${collection.getItemCounts().incomplete} items pending)
        ------------------------------------------`);
    collection.getTodoItems(showCompleted).forEach(item => item.printTodo());
    console.log(`--------------------------------
    Command box
    -------------------------------`)
}
//-----------------------------------------------------------------defining commands
enum Commands {
    Add = "Add new Task",
    Edit = "Edit Task",
    Complete = "Complete Task",
    Toggle = "Show/Hide Completed",
    Purge = "Remove Completed Tasks",
    Quit = "Quit",
}
//-------------------------------------------------------------------adding task
function promptAdd(): void {
    console.clear();
    inquirer.prompt({ type: "input", name: "add", message: "Enter task:" })
        .then(answers => {
            if (answers["add"] !== "") {
                collection.addTodo(answers["add"]);
            }
            promptUser();
        })
}
//---------------------------------------------------------------------editing task
function edittask(): void {
    console.clear();
    inquirer.prompt({
        type: "list", name: "edit",
        message: "Mark Tasks to edit",
        choices: collection.getTodoItems(showCompleted).map(item =>
            ({ name: item.task, value: item.id }))
    }).then(answers => {
        let id = answers["edit"] as number;
        if (id) {
            inquirer.prompt({ type: "input", name: "add", message: "Enter task:" })
                .then(answers => {
                    if (answers["add"] !== "") {
                        let task = answers["add"]
                        collection.updateTodo(id, new TodoItem(id, task));
                    }

                    promptUser();
                }

                )


        }
    })
}
//------------------------------------------------- mark completed task
function promptComplete(): void {
    console.clear();
    inquirer.prompt({
        type: "checkbox", name: "complete",
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
//------------------------------------------------------------------------------ commands function
function promptUser(): void {
    console.clear();
    displayTodoList();
    inquirer.prompt({
        type: "list",
        name: "command",
        message: "Choose option",
        choices: Object.values(Commands)
    }).then(answers => {
        switch (answers["command"]) {
            case Commands.Toggle:
                showCompleted = !showCompleted;
                promptUser();
                break;
            case Commands.Add:
                promptAdd()
                break;
            case Commands.Complete:
                if (collection.getItemCounts().incomplete > 0) {
                    promptComplete();
                } else {
                    promptUser();
                }
                break;
            case Commands.Purge:
                collection.removeComplete();
                promptUser();
                break;
            case Commands.Edit:
                edittask()
                break

        }
    })
}
promptUser();

let newId: number = collection.addTodo("Go for run");
let todoItem: TodoItem = collection.getTodoById(newId);
collection.removeComplete();
collection.updateTodo(2, new TodoItem(2, "get milk"))

