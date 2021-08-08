import { TodoItems } from "./todoItems";

export class TodoCollection{
    private nextId: number = 1
    constructor(public items: TodoItems[] = []){}

    public addTodos(item: string){
        this.items.push(new TodoItems(this.nextId, item, false))
        return this.nextId++
    }
    public printAll(): void{
        this.items.forEach(item=> item.printTask())
    }
    public printSelectedItem(id: number): void{
        let item = this.items.find(item=> item.id == id)
        item.printTask()
    }

    public getItem(id: number): TodoItems{
        return this.items.find(item=> item.id == id)
    }
    public taskDone(id: number): void{
        this.getItem(id).status = true
    }
    public EditTask(id: number, task: string): void{
        this.getItem(id).task = task
    }
}