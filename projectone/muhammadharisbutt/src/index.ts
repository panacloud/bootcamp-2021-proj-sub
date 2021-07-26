import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";
import * as inquirer from 'inquirer';

let todos :TodoItem[] = [
    new TodoItem(1,"Buy Flowers"),
    new TodoItem(2,"Get Shoes"),
    new TodoItem(3,"COllect Tickets"),
    new TodoItem(4,"Call Joe",true),
]

let collection : TodoCollection = new TodoCollection("Haris",todos)
let showCompleted = true;

function displayTodoList(): void{
    console.log(`${collection.userName}'s Todo List`
    +`(${collection.getItemCounts().incomplete} items to do)`);
    collection.getTodoItems(showCompleted).forEach(item => item.printDetails());

}
enum Commands{
    Toogle = "Show/Hide Completed",
    Quit = 'Quit'
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
            case Commands.Toogle:
                showCompleted = !showCompleted;
                promptUser();
                break
        }
    })
}
promptUser();