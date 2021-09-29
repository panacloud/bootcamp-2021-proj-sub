//In this, we can create different objects of class

import { Todo } from './todo';
import { TodoCollection } from './todoCollection';
import { JsonTodoCollection } from './jsonTodoCollection';
import * as inquirer from 'inquirer';

//object declaration
let todos: Todo[] = [
    new Todo(1, 'Go For Walk'),
    new Todo(2, 'Have BreakFast'),
    new Todo(3, 'Do code'),
    new Todo(4, 'Go to Sleep', true)
]
let itemCollection : TodoCollection = new JsonTodoCollection('muneeb', todos);

let showComplete = true

function displayTodoList(): void {
    console.log(`${itemCollection.userName}'s Todo List `
    + `(${ itemCollection.getTodoCounts().incomplete } items to do)`);
    itemCollection.getTodoByStatus(showComplete).forEach(item => item.printTask());
   }



   enum Commands {
    Add = "Add New Task",
    Complete = "Complete Task",
    Toggle = "Show/Hide Completed",
    Purge = "Remove Completed Tasks",
    Quit = "Quit"
   }

   function promptAdd(){
    console.clear()
    inquirer.prompt({
        type: "input",
        name: "Add",
        message: "Enter Task"
    })
    .then(answers => {
        if (answers["Add"] !== ""){
        itemCollection.addTodo(answers["Add"])
        }
        promptUser()
    })
}

function promptComplete(): void {
    console.clear();
    inquirer.prompt({ type: "checkbox", name: "complete",
    message: "Mark Tasks Complete",
    choices: itemCollection.getTodoByStatus(showComplete).map(item =>
    ({name: item.task, value: item.taskId, checked: item.done}))
    }).then(answers => {
    let completedTasks = answers["complete"] as number[];
    itemCollection.getTodoByStatus(true).forEach(item =>
    itemCollection.markComplete(item.taskId,
    completedTasks.find(id => id === item.taskId) != undefined));
    promptUser();
    })
   }

   function promptUser():void{
       console.clear();
       displayTodoList();
       inquirer.prompt({
           type: "list",
           name: "command",
           message: "Choose Option", 
           choices: Object.values(Commands)
       })
       .then(answers=>{
           switch (answers["command"]){

                case Commands.Toggle:
                    showComplete = !showComplete
                    promptUser();
                    break;
                    
                case Commands.Add:
                   promptAdd();
                   break;

               case Commands.Complete:
                   if (itemCollection.getTodoCounts().incomplete > 0){
                       promptComplete();
                   }else{
                       promptUser()
                   }
                   break;

               case Commands.Purge:
                   itemCollection.deleteComplete();
                   promptUser();
                   break;

                case Commands.Quit:
                    break;
                    
           }
       })
   }
promptUser();


//instance calling
// todos[0].printTask();
// todos[1].printTask();

// itemCollection.addTodo('Doing Code');
// itemCollection.getTodoByStatus()
// itemCollection.markComplete(1, true);
// itemCollection.deleteComplete()
// itemCollection.getTodoCounts()
// itemCollection.addTodo('Doing code');
// itemCollection.taskDone(1);

