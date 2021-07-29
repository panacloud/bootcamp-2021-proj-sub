import { TodoItem } from "./todoItem";
//-----------------------------------------------------------------------define type to calculate size of object with tye shape 
type ItemCounts = {
    total: number,
    incomplete: number
}
export class TodoList {
    private nextId: number = 1;
    protected itemMap = new Map<number, TodoItem>();

    constructor(public userName: string, todoItems: TodoItem[] = []) {
        todoItems.forEach(item => this.itemMap.set(item.id, item));
    }

    //------------------------------------------------------------------------------------ading todo
    addTodo(task: string): number {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        this.itemMap.set(this.nextId, new TodoItem(this.nextId, task));
        return this.nextId;
    }
    //------------------------------------------------------------------------------------get id from collection of todos
    getTodoById(id: number): TodoItem {
        return this.itemMap.get(id);
    }
    //------------------------------------------------------------------------------------------getting elemnt by id
    getTodoItems(includeComplete: boolean): TodoItem[] {
        return [...this.itemMap.values()]
            .filter(item => includeComplete || !item.complete);
    }
    //----------------------------------------------------------------------------------------function to marke compleed to an item
    markComplete(id: number, complete: boolean) {
        const todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.complete = complete;
        }
    }
    //------------------------------------------------------------------------------------removing completed task
    removeComplete() {
        this.itemMap.forEach(item => {
            if (item.complete) {
                this.itemMap.delete(item.id);
            }
        })
    }
    //-----------------------------------------------------------------------getting number of pending task
    getItemCounts(): ItemCounts {
        return {
            total: this.itemMap.size,
            incomplete: this.getTodoItems(false).length
        };
    }
    //-*********************************=========================================----my addition to update  task
    updateTodo(id: number,item:TodoItem): void {
     
       if( this.itemMap.get(id)){
           this.itemMap.set(id,item)
       };
       
    }
    
}