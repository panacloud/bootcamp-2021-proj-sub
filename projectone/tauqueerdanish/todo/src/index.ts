import {Todoitem} from "./todoItem";
import {Todocollection} from "./todoCollection"
import * as inquirer from "inquirer"
import Choices = require("inquirer/lib/objects/choices");
import {JsonTodoCollection} from "./jsonTodoCollection";


//console.clear();
//console.log("Dan's File");

let todos: Todoitem[] = [
    new Todoitem(1,"Buy Flowers"),
    new Todoitem(2,"Water Plants"),
    new Todoitem(3,"Eating Breakfast"),
    new Todoitem(4, "Having a tight sleep", true)
]
//let collection: Todocollection = new Todocollection("Dan",todos);
let collection: JsonTodoCollection = new JsonTodoCollection("Dan's", todos);
let showCompleted = true;

function displayTodoList():void{
console.log(`${collection.userName}'s Todo List (${collection.getItemCounts().incomplete} Items Todo)'`);
collection.getTodoItems(showCompleted).forEach(item => item.printDetails());
}
enum Commands {
    Add = "Add New Task",
    Complete = "Complete Task",
    Toggle = "Show/Hide Completed",
    Purge = "Remove Completed Task",
    Quit =  "Quit"
}

function promptAdd():void{
    console.clear();
    inquirer.prompt({
        type: "input",
        name: "add",
        message: "Enter Task:",
    }).then(answers => {
        if (answers.add !== ""){
            collection.addTodo(answers["add"]);
        }
        promptUser();
    })
}

function promptComplete():void {
    console.clear();
    inquirer.prompt({
        type:"checkbox",
        name: "complete",
        message: "Mark Task Complete",
        choices: collection.getTodoItems(showCompleted).map(item => (
            {name: item.task,value: item.id, checked: item.complete}
        ))
    }).then(answers =>{
        let completedTasks = answers["complete"] as number[];
        collection.getTodoItems(true).forEach(item => collection.markComplete(
            item.id, completedTasks.find(id => id === item.id) != undefined
        ));
        promptUser();
    })
}

function promptUser():void {
    console.clear();
    displayTodoList();
    inquirer.prompt({
        type: "list",
        name: "command",
        message: "Choose Option",
        choices: Object.values(Commands),
        //badProperty:true
    }).then(answers =>{
        //if (answers["command"] != Commands.Quit){
          //  promptUser();
        //}
        switch(answers["command"]){
            case Commands.Toggle:
                showCompleted = !showCompleted;
                promptUser();
                break;
                case Commands.Add:
                    promptAdd();
                    break;
                case Commands.Complete:
                    if (collection.getItemCounts().incomplete>0){
                        promptComplete();
                    }
                    else{
                        promptUser();
                    }
                    break;
                case Commands.Purge:
                    collection.removeComplete();
                    promptUser();
                    break;
                } 
    })
}
promptUser();
//console.clear();
//console.log(`${collection.userName}'s Todo List`);
//console.log(`${collection.getItemCounts().incomplete} items to do`);

//let newid: number = collection.addTodo("Go for run");
//let todoItem: Todoitem = collection.getTodoById(newid);
//todoItem.printDetails();
//collection.addTodo(todoItem);
//collection.removeComplete();
//collection.getTodoItems(true).forEach(item => item.printDetails());
//console.log(JSON.stringify(todoItem));