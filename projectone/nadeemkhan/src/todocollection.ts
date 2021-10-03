import { TodoItem } from "./todoitems";

export class TodoCollection{
    
    private nextId: number = 1;
    private itemMap = new Map<number, TodoItem>();

    public constructor(public username: string, public todoItems: TodoItem[] = []){
        todoItems.forEach(item => this.itemMap.set(item.id, item))
    } 

    addTodo(task: string): number{
        while (this.getTodoById(this.nextId)){
            this.nextId++;
        }

        // this.todoItems.push(new TodoItem(this.nextId, task))
        this.itemMap.set(this.nextId, new TodoItem(this.nextId, task));
        return this.nextId;
    }

    getTodoById(taskId: number): TodoItem {
        // return this.todoItems.find(item => item.id === taskId)
        return this.itemMap.get(taskId);
    }

    getTodoItems(includeComplete: boolean): TodoItem[]{
        return [...this.itemMap.values()]
            .filter(item => includeComplete || !item.complete)
    }

    markComplete(id: number, complete: boolean){
        const todoItem = this.getTodoById(id)
        if(todoItem)
        {
            todoItem.complete = complete
        }
    }

    removeComplete(): void{
        this.itemMap.forEach(item => {
            if(item.complete)
            {
                this.itemMap.delete(item.id);
            }
        })
    }
}