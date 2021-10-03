import { TodoItem } from "./todoitems";

export class TodoCollection{
    
    private nextId: number = 1;

    public constructor(public username: string, public todoItems: TodoItem[] = []){} 

    addTodo(task: string): number{
        while (this.getTodoById(this.nextId)){
            this.nextId++;
        }
        this.todoItems.push(new TodoItem(this.nextId, task))
        return this.nextId;
    }

    getTodoById(taskId: number): TodoItem {
        return this.todoItems.find(item => item.id === taskId)
    }
}