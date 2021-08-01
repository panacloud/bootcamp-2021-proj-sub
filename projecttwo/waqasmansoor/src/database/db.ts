
import { todo } from '../api/todo'
import {todoapi} from '../api/todoapi'
import * as lowdb from 'lowdb'
import * as FileSync from 'lowdb/adapters/FileSync'

const todoList=[{}] as {name:string,list:todoapi}[]


type schemaType={
    todo:{id:number,name:string,taskDone:boolean}[]
}

class db extends todoapi{
    private database:lowdb.LowdbSync<schemaType>
    constructor(){
        super()
        this.database=lowdb(new FileSync("Todos.json"))
        
    }

    public userExist(key:string):boolean|undefined{
        
            if(this.database.has(key).value()){
             return true   
            }
        
    }
    public createTodoList(name:string):boolean{
        if(this.userExist(name)===undefined){
            this.database.set(name,[]).write()
            // todos.forEach(todo=>this.todoMap.set(todo.id,todo))
            return true
        }
        else{
            return false
        }
    }
    public getTodosByUser(name:string,includeComplete:boolean):todo[]{
        this.mapObj(name)
        return this.getTodos(includeComplete)
     }
     public addUserTodo(name:string,todoName:string,taskDone:boolean=false){
        this.mapObj(name)
            this.addTodo(todoName,taskDone)
            this.storeTasks(name)
     }
     public removeTodo(name:string,index:string|undefined):string{
        this.mapObj(name)
        if(index){
            this.todoMap.delete(parseInt(index))
            this.storeTasks(name)
            return `Successfully removed index ${index}`
            
        }
        else{
            this.removeCompletedTask()
            this.storeTasks(name)
            return "Successfully removed all completed todos"
        }
            
    }
    public taskDone(username:string,ids:number[]):void{
        this.todoMap.forEach(todo=>{
            if(ids.find(id=>id===todo.id)!=undefined){
                todo.taskDone=true
            }
            else{
                todo.taskDone=false
            }
        })
     this.storeTasks(username)   
        
    }
    private mapObj(username:string):void{
        let dbItems:todo[]=this.database.get(username).value()
            dbItems.forEach(item=>this.todoMap.set(item.id,new todo(item.id,item.name,item.taskDone)))
    }
     private storeTasks(username:string):void{
        this.database.set(username,[...this.todoMap.values()]).write()
     }
}


export const tododb=new db()
