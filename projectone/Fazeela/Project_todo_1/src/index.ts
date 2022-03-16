
import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";
import { JsonTodoCollection } from "./jsonTodoCollection";
import* as inquirer from 'inquirer';

let todos = [new TodoItem(1,'Go for run',true),new TodoItem(2,'Buy flowers',true),
new TodoItem(3,'I ate fruits',false), new TodoItem(4,'Pick up the books',false)];
let collection = new JsonTodoCollection('Sharjeel',todos);
let showCompleted = true;

function displayTodoList():void {
    console.log(`${collection.userName}'s todo list...!\t`
    + `Total tasks are:${collection.getItemCounts().total}`
    + `\t(${collection.getItemCounts().incomplete})itmes remaining to do`);

    collection.getTodoItems(showCompleted).forEach(item => item.printDetails());
}
///////////////////////////////////////////////////////
enum Commands {
    Add = "Add new tasks..!",
    Complete = "Complete tasks are...!",
    Toggle = "Show/Hide completed tasks",
    Purge = "Remove completed tasks",
    Quit = "Quit",
}

function promptAdd():void {
    console.clear();
    inquirer.prompt({
        type:"input",
        name:"add",
        message:"Enter task:"
    }).then(answers => {
        if (answers["add"] !=="") {
            collection.addTodo(answers["add"]);
        }
        promptUser();
    })
}

function promptComplete():void {
    console.clear();
    inquirer.prompt({
        type:"checkbox",
        name:"complete",
        message:"Mark a task to be completed",
        choices:collection.getTodoItems(showCompleted).map(item => ({
            name:item.task,
            value:item.id,
            checked:item.complete})
            ),       
    }).then(answers => {
        let completedTasks = answers["complete"] as number[];
        collection.getTodoItems(true).forEach(item => {
            collection.markComplete(item.id,
                completedTasks.find(id => id === item.id) != undefined);
        })
        promptUser();
    })
}

function promptUser():void {
    console.clear();
    displayTodoList();
    inquirer.prompt({
        type:"list",
        name:"command",
        message:"choose option",
        choices:Object.values(Commands),
    }).then(answers => {
        switch(answers["command"]) {
            case Commands.Toggle:{
                showCompleted = !showCompleted;
                promptUser();
                break;
            }
            case Commands.Add:{
                promptAdd();
                break;
            }
            case Commands.Complete:{
                if(collection.getItemCounts().incomplete >0) {
                    promptComplete();
                } else {
                    promptUser();
                }
                break;
            }
            case Commands.Purge:{
                collection.removeComplete();
                promptUser();
                break;
            }
        }
    })
}
promptUser();
