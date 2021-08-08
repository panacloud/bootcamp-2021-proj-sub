import { TodoItem } from './TodoItem'; 

type ItemCounts = {
    total: number,
    incomplete: number
}

export class todoCollection {
    private nextId: number = 1;
    protected itemMap = new Map<number, TodoItem>();
    //
    constructor(public username: String, public todoItems: TodoItem[]){
        todoItems.forEach(item => this.itemMap.set(item.id, item));
    }
    //
    addToDo(task: string):number{
    // addToDo(task: string){
        while(this.getTodoById(this.nextId)){
            this.nextId++;
        }
        this.itemMap.set(this.nextId, new TodoItem(this.nextId, task));
        return this.nextId;
    }
    //
    deleteToDo(id: number){
        for(let i=0; i<this.itemMap.size;i++){
            if(this.itemMap.has(id)){
                this.itemMap.delete(id);
                break;
            }
        }
    }
    //
    getTodoById(id: number): TodoItem {
        return this.itemMap.get(id);
    }
    //
    markComplete(id: number, complete: boolean) {
        let todoItem = this.getTodoById(id);
        if(todoItem){
            todoItem.complete = complete;
        }
    }
    //
    getToDoItems(includeComplete: boolean) {
        return [...this.itemMap.values()]
                    .filter(item => includeComplete || !item.complete);
    }
    //
    removeComplete(){
        this.itemMap.forEach(item => {
            if(item.complete){
                this.itemMap.delete(item.id);
            }
        });
    }
    //
    getItemCounts(): ItemCounts{
        return {
            total: this.itemMap.size,
            incomplete: this.getToDoItems(false).length
        }
    }
}