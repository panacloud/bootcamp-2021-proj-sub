import { Todoitem } from "./todoItem";

type itemCounts = {
    total: number,
    incomplete: number
}

export class Todocollection {
    private nextid: number = 1;
    protected itemMap = new Map<number,Todoitem>();

    constructor(public userName: string, public todoitems: Todoitem[] = []){
        todoitems.forEach(item => this.itemMap.set(item.id,item));
 
    }

    addTodo(task:string): number{
        while(this.getTodoById(this.nextid)){
            this.nextid++;
        }
        //this.todoitems.push(new Todoitem(this.nextid, task));
        this.itemMap.set(this.nextid, new Todoitem(this.nextid, task));
        return this.nextid;
    }

    getTodoById (id:number): Todoitem {
        //return this.todoitems.find(item => item.id == id);
        return this.itemMap.get(id);
    }

    getTodoItems (includeComplete: boolean): Todoitem[] {
        return [...this.itemMap.values()].filter(item => includeComplete ||!item.complete)
    }

    markComplete (id:number, complete: boolean){
        const todoItem = this.getTodoById(id);
        if (todoItem){
            todoItem.complete = complete;
        }
    }

    removeComplete (){
        this.itemMap.forEach(item => {
            if(item.complete){
                this.itemMap.delete(item.id);
            }
        })
    }

    getItemCounts(): itemCounts {
        return {
            total: this.itemMap.size,
            incomplete: this.getTodoItems(false).length
        }; 
    }

}