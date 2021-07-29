import { Item } from "./Item";
import { ItemCollection } from "./ItemCollection";
import * as inquirer from "inquirer";
import { JsonTodoCollection } from "./jsonTodoCollection";


let todos: Item[] = [
new Item(1, "Eat Breakfast"), new Item(2, "Go to School")];
let collection: ItemCollection = new JsonTodoCollection("Abdullah Saqib", todos);
    

let showcompleted = true;



function displaytodoList() : void {
    console.log(`My Todo List  has`
 + `(${ collection.getItemCounts().total } items to do)`);
 collection.getTodoItems(showcompleted).forEach(item => item.PrintDetails());
 
}


function AddPrompt() : void {
    console.clear();
    inquirer.prompt({ type: "input", name: "add", message: "Enter task:"})
    .then(answers => {if (answers["add"] !== "") {
    collection.AddTodo(answers["add"]);
    }
    promptUser();
    })
}

function promptComplete(): void {
    console.clear();
    inquirer.prompt({ type: "checkbox", name: "complete",
    message: "Mark Tasks Complete",
    choices: collection.getTodoItems(showcompleted).map(item =>
    ({name: item.task, value: item.id, checked: item.complete}))
    }).then(answers => {
    let completedTasks = answers["complete"] as number[];
    collection.getTodoItems(true).forEach(item =>
    collection.Taskcomplete(item.id,
    completedTasks.find(id => id === item.id) != undefined));
    promptUser();
    })
   }


enum Commands {
    Add = "Add New Task",
    Toggle = "Show / Hide Completed",
    complete = "Mark Task complete",
    Purge = "Remove Completed Tasks",
    Quit = "Quit"
   }

   function promptUser(): void {
    console.clear();
    displaytodoList();
    inquirer.prompt({
    type: "list",
    name: "command",
    message: "Choose option",
    choices: Object.values(Commands)
    }).then(answers => {switch (answers["command"]) {

        case Commands.Toggle:
            showcompleted = !showcompleted;
            promptUser();
            break;
        

        case Commands.Add:
            AddPrompt();
            break; 
        
        case Commands.complete:
            if (collection.getItemCounts().incomplete > 0) {
                promptComplete();
                }

            else {
                promptUser();
                }
             break;

        case Commands.Purge:
                collection.removecompletedtasks();
                promptUser();
                break;

    }

    })

}

promptUser();





