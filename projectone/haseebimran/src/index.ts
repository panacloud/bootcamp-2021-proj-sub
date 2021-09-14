import { Todoitem } from "./todoItem";
import { todocollection } from "./todoCollection";
import * as inquirer from 'inquirer';

let todos: Todoitem[] = [
 new Todoitem(1, "Prayer Namaz", true), new Todoitem(2, "Get Shoes"),
 new Todoitem(3, "Do Coding"), new Todoitem(4, "Call Ahmed RAZA", true)];

let collection: todocollection = new todocollection("Haseeb", todos);
let showCompleted = true;

function displayTodoList(): void {
    console.log(`${collection.userName}'s Todo List `
    + `(${ collection.getItemCounts().incomplete } items to do)`);
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
             //badProperty: true
    }).then(answers => { 
        switch (answers["command"]) {
            case Commands.Toggle:
            showCompleted = !showCompleted;
            promptUser();
              break;
        }
    })
}
promptUser();