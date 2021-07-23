import {item} from './item'
import {collection} from './collection'
import * as lowdb from 'lowdb'
import * as FileSync from 'lowdb/adapters/FileSync'

type schemaType={
    tasks:{id:number,name:string,task_completion:boolean}[]
}

export class JsonTodoCollection extends collection{
    private database:lowdb.LowdbSync<schemaType>
    constructor(public userName:string,items:item[]=[]){
        super([],userName)
        this.database=lowdb(new FileSync("Todos.json"))
        if(this.database.has("tasks").value()){
            let dbItems=this.database.get("tasks").value()
            dbItems.forEach(dbitem=>this.itemMap.set(dbitem.id,new item(dbitem.id,dbitem.name,dbitem.task_completion)))

        }
        else{
            this.database.set("tasks",items).write()
            items.forEach(item=>this.itemMap.set(item.id,item))
        }
    }
    addTodo(itemName:string):void{
        super.addTodo(itemName)
        this.storeTasks()
    }
    taskDone(id:number,completion:boolean):void{
        super.taskDone(id,completion)
        this.storeTasks()
    }
    removeCompletedTask():void{
        super.removeCompletedTask()
        this.storeTasks()
    }

    private storeTasks():void{
        this.database.set("tasks",[...this.itemMap.values()]).write()
    }
}