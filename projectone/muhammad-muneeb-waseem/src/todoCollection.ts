//Collections of items (array)

import { Todo } from "./todo";

type TodoCounts = {
    total: number,
    incomplete: number,
    complete: number
}

export class TodoCollection {

    //variable
    private nextId: number = 1;
    protected itemMap = new Map<number, Todo>();

    //constructor
    public constructor(public userName:string, public items: Todo[] = []){
        
        //mapping todoitems to dictionary for storing purpose
        items.forEach((item)=>this.itemMap.set(item.taskId, item))
    }

    //methods
    addTodo(task:string):number{
        while (this.getTodoById(this.nextId)){
            this.nextId++
        }
        let item:Todo = new Todo(this.nextId, task);
        this.itemMap.set(this.nextId, item);
        return this.nextId;
    }

    getTodoById(id:number):Todo{
        return this.itemMap.get(id);  
    }
    
    getTodoByStatus(complete:boolean):Todo[]{
        return [...this.itemMap.values()].filter((item)=> item.done===complete)
    }

    markComplete(id:number, complete:boolean){
        let item = this.getTodoById(id);
        if (item){
            item.done = complete
        }
    }

    deleteComplete(){
        this.itemMap.forEach(item=>{
            if (item.done){
                this.itemMap.delete(item.taskId);
            }
        })
    }

    getTodoCounts():TodoCounts{
    
        return {
            total: this.itemMap.size,
            incomplete: this.getTodoByStatus(false).length,
            complete: this.getTodoByStatus(true).length
        }
    }



}