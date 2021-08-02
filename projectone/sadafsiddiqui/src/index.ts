import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";
import * as inquirer from 'inquirer';

let todos = [
new TodoItem(1, "Buy Flowers"), new TodoItem(2, "Get Shoes"),
new TodoItem(3, "Collect Tickets"), new TodoItem(4, "Call Joe", true)];

let collection = new TodoCollection("Adam", todos);
let showCompleted = true;
console.clear();
console.log(`${collection.userName}'s Todo List`);

let newId = collection.addTodo("Go for run");
let todoItem = collection.getTodoById(newId);
console.log(JSON.stringify(todoItem));
todoItem.printDetails();
collection.removeComplete();
// collection.addTodo(todoItem);
console.log(`${collection.userName}'s Todo List `
+ `(${ collection.getItemCounts().incomplete } items to do)`);
collection.getTodoItems(true).forEach(item => item.printDetails());

function displayTodoList(): void {
    console.log(`${collection.userName}'s Todo List `
    + `(${ collection.getItemCounts().incomplete } items to do)`);
    collection.getTodoItems(true).forEach(item => item.printDetails());
    collection.getTodoItems(showCompleted).forEach(item => item.printDetails());
    }
    enum Commands {
        Toggle = "Show/Hide Completed",
        Quit = "Quit"
    }
    function promptUser(): void {
    console.clear();
    displayTodoList();
    inquirer.prompt({
    type: "list",
    name: "command",
    message: "Choose option",
    choices: Object.values(Commands),
    // badProperty: true 
    }).then(answers => {
        if (answers["command"] !== Commands.Quit) {
            promptUser();
        }
        switch (answers["command"]) {
            case Commands.Toggle:
            showCompleted = !showCompleted;
            promptUser();
            break;
        }
       })
       
     }
    promptUser();