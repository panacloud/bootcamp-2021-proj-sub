import { TodoItem } from "./todo_item";

export class TodoCollection {
    private nextId: number = 1;
    constructor(public items: TodoItem[] = []){

    }
    public addTodo(item: string): number{
        this.items.push(new TodoItem(this.nextId, item, false))
        return this.nextId++;
    }
    public printAll(): void {
        this.items.forEach((items) => items.printDetails());
    }
    public getItem(id: number): TodoItem{
        return this.items.find((item) => item.id == id);
    }

    public taskDone(id: number): void{
        this.getItem(id).complete = true;
    }

}
   