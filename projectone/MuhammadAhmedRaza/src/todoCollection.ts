import {TodoItem} from "./todoItem";

//type alias
type ItemCounts = {
    total: number,
    incomplete: number
}

export class TodoCollection{

    //Map Dictionary like (key, value)
    protected itemMap = new Map<number,TodoItem>();
    private nextId = 1;
    constructor(public userName:string,public todoItems: TodoItem[] = []){
        todoItems.forEach(item => this.itemMap.set(item.id,item));
    }
    getTodoByID(id: number): TodoItem {
        return this.itemMap.get(id);
    }
    
    addTodo(task: string): number{
        while(this.getTodoByID(this.nextId)){
            this.nextId++;
        }
        this.itemMap.set(this.nextId,new TodoItem(this.nextId,task))
        return this.nextId;
    }
    markComplete(id: number, complete: boolean){
        const todoItem = this.getTodoByID(id);
        if(todoItem){
            todoItem.complete = complete;  
        }
    }

    //Providing Access to To-Do Items
    getTodoItems(includeComplete: boolean): TodoItem[] {
        return [...this.itemMap.values()]
        .filter(item => includeComplete || !item.complete);
    }
    //Removing complete true
    removeComplete() {
        this.itemMap.forEach(item => {
            if (item.complete) {
                this.itemMap.delete(item.id);
            }
        })
    }
    getItemCounts(): ItemCounts{
        return {
            total: this.itemMap.size,
            incomplete: this.getTodoItems(false).length
        };
    }

} 