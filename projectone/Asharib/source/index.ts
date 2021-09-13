import {addTodo, printAll,getItem,taskdDone} from "./todoCollection";
import * as inquirer from 'inquirer';


enum Commands {
    Add = "Add New Task",    
    Complete = "Complete Task",
    show = "Show All",  
    get = 'Get Item ', 
    Quit = "Quit"
}


function promptAdd(): void {
    console.clear();
    inquirer.prompt({ type: "input", name: "add", message: "Enter task:"})
        .then(answers => {if (answers["add"] !== "") {
            addTodo(answers["add"]);
        }
        promptUser();
    })
}


function promptComplete(): void {
    console.clear();
    inquirer.prompt({ type: "input", name: "id", message: "Enter task ID:"})
        .then(answers => {if (answers["id"] !== "") {
            taskdDone(answers["id"].number)
        }
        promptUser();
    })
}

const promptUser=() => {
    console.clear();
    printAll();    
    inquirer.prompt({ 
            type: "list", 
            name: "command",
            message: "Choose option",
            choices: Object.values(Commands)
    }).then(answers => {
        switch (answers["command"]) {
            case Commands.get:
                getItem(1)
                break;
            case Commands.Add: 
                promptAdd()
                break;
            case Commands.Complete:
                promptComplete()
                break;                
            case Commands.show:
                printAll();
                promptUser();
                break;
        }
    })
}
promptUser();