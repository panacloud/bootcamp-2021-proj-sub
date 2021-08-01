import {todo} from "./todo"

export class todoapi{
    private nextId:number=1
    protected todoMap=new Map <number,todo>()

    public constructor(){
        // todos.forEach(todo=>this.todoMap.set(todo.id,todo))
        
    }

    public addTodo(name:string,taskDone:boolean):void{
        while(this.getTodoById(this.nextId)){
            this.nextId++
        }
        this.todoMap.set(this.nextId,new todo(this.nextId,name,taskDone))
        
    }

    
    
    public getTodoById(id:number):todo|undefined{
        return this.todoMap.get(id)
    }

     public getTodos(includeComplete:boolean):todo[]{
        return [...this.todoMap.values()].filter(todo=> includeComplete||!todo.taskDone)
     }

    

    public removeCompletedTask():void{
        this.todoMap.forEach(item=>{
            if(item.taskDone){
                this.todoMap.delete(item.id)}
            }
            )
            
    }

    
}
