import { TodoItem } from "./todoitem";

type itemCount = {
    totol: number, 
    incomplete: number
}

export class TodoCollecton {
    private nextId : number =1;
    protected itemMap = new Map<number, TodoItem>();

    constructor (public userName: String, public todoItems:TodoItem[]){
        todoItems.forEach(item => this.itemMap.set(item.id, item));
    }

    getTodoByID(id : number): TodoItem {
        return  this.itemMap.get(id);
    }

    markComplete(id: number, complete:boolean) {
        const todoItem = this.getTodoByID(id);

        if (todoItem) {
            todoItem.complete=complete;
        }
    }

    removeComplete() {
        this.itemMap.forEach(item => { 
            if (item.complete){
                this.itemMap.delete(item.id);  
            }              
            })          
            
        }
   

    addTodo (task: string): number {
        while (this.getTodoByID(this.nextId)){
            this.nextId++;
        }
        this.itemMap.set(this.nextId, new TodoItem(this.nextId, task));
        return this.nextId;        
    }

    getTodoItems(includeComplete: boolean): TodoItem[] {
        return [...this.itemMap.values()]
        .filter(item => includeComplete || !item.complete);
    }

    getItemsCount(): itemCount {
        return {
            totol: this.itemMap.size, 
            incomplete: this.getTodoItems(false).length   
        };        
            
    }
                
}
  