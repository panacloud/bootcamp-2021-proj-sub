import { itemtodo } from "./itemtodo";
import {todocollection} from "./todocollection";
import * as inquirer from 'inquirer';
import { JsonTodoCollection} from "./jsontodocollection";

console.clear();
let todo:itemtodo[] = [
    new itemtodo(1,"go for run"),new itemtodo(2,"eat fruits"),
    new itemtodo(3,"eat some healthy drinks",true ),new itemtodo(4,"8 hours sleep",true)
]

let alltasks:JsonTodoCollection = new JsonTodoCollection("Ahsan ",todo);
let showcompleted: boolean = true;
function displayalltodos():void{
    console.log(`${alltasks.username}'s Todo List `
    + `(${ alltasks.getitemcountss().incomplete } items to do)`);
    alltasks.gettodoitems(showcompleted).forEach(item=> item.printdetails());
}

// let newtask:number = alltasks.addtodo("early morning planks");
// let newid:itemtodo = alltasks.gettodobyid(newtask);
// alltasks.removeCompleteitem();

enum Commands{
    complete = "Complete task",
    Add = "Add new task ",
    Toggle = "Show / Completed",
    purge = "Remove complete tasks",
    Quit = "Quit"
}

function promptadd():void{
    inquirer.prompt({
        type : "input",
        name : "name",
        message : "Enter task"
    }).then(answers => {if (answers["add"] !== "") {
        alltasks.addtodo(answers["add"]);
        }
        promptUser();
        })
}

function promptComplete(): void {
    console.clear();
    inquirer.prompt({ type: "checkbox", name: "complete",
    message: "Mark Tasks Complete",
    choices: alltasks.gettodoitems(showcompleted).map(item =>
    ({name: item.task, value: item.id, checked: item.complete}))
    }).then(answers => {
    let completedTasks = answers["complete"] as number[];
    alltasks.gettodoitems(true).forEach(item =>
    alltasks.markcomplete(item.id,
    completedTasks.find(id => id === item.id) != undefined));
    promptUser();
    })
    }

function promptUser():void{
    displayalltodos();
    inquirer.prompt({
        type :"list",
        name : "command",
        message : "Choose option",
        choices : Object.values(Commands)
    }).then(answers=>{switch (answers["command"]) {
        case Commands.Toggle:
            showcompleted = !showcompleted;
            promptUser();
            break;
        case Commands.Add:
            promptadd();
            break;
            case Commands.complete:
                if (alltasks.getitemcountss().incomplete > 0) {
                promptComplete();
                } else {
                promptUser();
                }
                break;
                case Commands.purge:
                alltasks.removeCompleteitem();
                promptUser();
                break;
        }
        })
        }
        promptUser();

