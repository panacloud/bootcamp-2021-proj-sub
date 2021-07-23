import {item} from './item'
import {collection} from './collection'
import * as inquirer from 'inquirer'
import {JsonTodoCollection} from './jsonTodoCollection'


let todos:item[]=[new item(1,"Buy Flower"),new item(2,"Get Shoes"),
new item(3,"Collect Tickets",true)]
let myCollection:collection=new JsonTodoCollection("Waqas",todos)
myCollection.addTodo("Call Joe")

let showCompleted=true
function displayTodoList():void{
    
    console.log(`Todo List (${myCollection.getItemCount().incomplete} things to Complete)`)
    // myCollection.printAllItems()
    myCollection.getTodoItems(showCompleted).forEach(item=>item.print())
}
enum Commands {
    Add="Add new Task",
    Toggle="Show/Hide Completed",
    Complete="Mark Completed",
    Purge="Remove Completed Tasks",
    Quit="Quit"
}

function promptAdd():void{
    console.clear()
    inquirer.prompt({
        type:"input",name:"add",message:"Enter task:"
    }).then(answers=>{
        if(answers["add"]!==""){
            myCollection.addTodo(answers["add"])
        }
        promptUser()
    })
}

function promptComplete():void{
    console.clear()
    inquirer.prompt({
        type:"checkbox",name:"complete",message:"Mark Tasks Complete",
        choices:myCollection.getTodoItems(showCompleted).map(item=>({
            name:item.name,value:item.id,checked:item.task_completion
        }))
    }).then(answers=>{
        let completedTask:number[]=answers["complete"]
        myCollection.getTodoItems(true).forEach(item=>(
            myCollection.taskDone(item.id,(completedTask.find(id=>id===item.id))!=undefined)

        ))
        promptUser()
    })
}

function promptUser():void{
    console.clear()
    displayTodoList()
    inquirer.prompt({
        type:"list",
        name:"command",
        message:"Choose option",
        choices:Object.values(Commands)
    }).then(answers=>{
        switch(answers["command"]){
            case Commands.Toggle:
                showCompleted=!showCompleted
                promptUser()
                break
            case Commands.Add:
                promptAdd()
                break
            case Commands.Complete:
                if(myCollection.getItemCount().incomplete>0){
                    promptComplete()
                }
                else{
                    promptUser()
                }
                break
            case Commands.Purge:
                myCollection.removeCompletedTask()
                promptUser()
                break
        }
    })
}

promptUser()








