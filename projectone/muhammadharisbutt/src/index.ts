import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";
import * as inquirer from 'inquirer';
import { JsonTodoCollection } from "./jsonTodoCollection";

let todos :TodoItem[] = [
    new TodoItem(1,"Read Deep learning with Python"),
    new TodoItem(2,"Do some data structure concepts"),
    new TodoItem(3,"Do some django "),
    new TodoItem(4,"Watch bootcamp2021",true),
]

let collection: TodoCollection = new JsonTodoCollection("Haris", todos);
let showCompleted = true;


function displayTodoList(): void{
    console.log(`${collection.userName}'s Todo List`
    +`(${collection.getItemCounts().incomplete} items to do)`);
    collection.getTodoItems(showCompleted).forEach(item => item.printDetails());

}
enum Commands{
    Add = "Add New Task",
    Complete = "Complete Task",
    Toggle = "Show/Hide Completed",
    Purge = "Remove Completed Tasks",
    Quit = 'Quit'
}

function promptAdd(): void {
    console.clear();
    inquirer.prompt({type: "input",name:"add", message:"Enter task:"})
    .then(answer => {if(answer["add"]!==""){
        collection.addTodo(answer["add"]);

    }
    promptUser();
})
}

function promptComplete() : void{
    console.clear();
    inquirer.prompt({
        type: "checkbox",
        name: "complete",
        message: "Mark Tasks Complete",
        choices: collection.getTodoItems(showCompleted)
        .map(item=>({name: item.task, value: item.id, checked: item.complete}))
    }).then(answer =>{
        let completedTasks = answer["complete"] as number[];
        collection.getTodoItems(true).forEach(item=>
            collection.markComplete(item.id,
                completedTasks.find(id=> id===item.id) != undefined));
            promptUser();
    })
}

function promptUser() :void {
    console.clear();
    displayTodoList();
    inquirer.prompt({
        type : 'list',
        name : 'command',
        message : 'Choose option',
        choices: Object.values(Commands),
    }).then( answer =>{
        switch(answer["command"]){
            case Commands.Toggle:
                showCompleted = !showCompleted;
                promptUser();
                break;
            case Commands.Add:
                promptAdd();
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
        }
    })
}
promptUser();