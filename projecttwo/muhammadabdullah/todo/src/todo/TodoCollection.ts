import { TodoItem } from "./TodoItem";

type ItemCounts = {
    total:number;
    incomplete:number;
}

export class TodoCollection{
    private NextId:number = 1;
    protected itemMap = new Map<number, TodoItem>();
    constructor(public userName:string, public todoItems:TodoItem[] = []){
        todoItems.forEach(item => this.itemMap.set(item.id, item));
    }

    addTodo(task:string): number {
        while(this.getTodoById(this.NextId)){
            this.NextId++;
        }
        this.itemMap.set(this.NextId, new TodoItem(this.NextId, task));
        return this.NextId;
    }

    getTodoItems(includeComplete:boolean): TodoItem[]{
        return[...this.itemMap.values()].filter(item => includeComplete || !item.complete);
    }

    getTodoById(id:number): TodoItem{
        return this.itemMap.get(id)!;
    }

    markComplete(id:number, complete:boolean): boolean{
        const todoitem = this.getTodoById(id);
        if(todoitem){
            todoitem.complete = complete;
            return true;
        }else{
            return false;
        }
    }

    removeComplete(){
        this.itemMap.forEach(item => {
            if(item.complete){
                this.itemMap.delete(item.id);
            }
        })
    }

    getItemCounts(): ItemCounts{
        return{
            total: this.itemMap.size,
            incomplete: this.getTodoItems(false).length
        }
    }
    removeById(id:number):boolean{
        let status:boolean = false;
        this.itemMap.forEach(item => {
            if(item.id === id){
                console.log(id);
                this.itemMap.delete(id);
                status = true;
            }
        })
        return status;
    } 
}