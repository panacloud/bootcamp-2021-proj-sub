import { Item } from "./Item";
import { ItemCollection } from "./ItemCollection";  
import * as inquirer from 'inquirer';


//let icollection: ItemCollection = new ItemCollection();
// icollection.addtoitem("eat Biryani")
// icollection.addtoitem("do more programming")
// icollection.addtoitem("do asap")
// icollection.compare(2)
// icollection.printall();
let todos: Item[] = [
    new Item(1, "Buy Flowers",false), new Item(2, "Get Shoes",true),
    new Item(3, "Collect Tickets",true), new Item(4, "Call Joe", true)];

let icollection: ItemCollection = new ItemCollection("Adam", todos);

console.clear();
// console.log(`${icollection.userNAME}'s Todo List`);
// //collection.addTodo(todoItem);
// icollection.getTodoItems(true).forEach(Item => Item.printTasks());

function displayTodoList(): void {console.log(`${icollection.userNAME}'s Todo List `+ `(${ icollection.getItemCounts().incomplete } items to do)`);
    icollection.getTodoItems(true).forEach(item => item.printTasks());
   }
enum Commands {
Quit = "Quit",
No_action = "No_action"
}
function promptUser(): void {
console.clear();
displayTodoList();
inquirer.prompt({
type: "list",
name: "command",
message: "Choose option",
choices: Object.values(Commands)}).then(answers => {if (answers["command"] !== Commands.Quit) {promptUser();}})}
promptUser();
