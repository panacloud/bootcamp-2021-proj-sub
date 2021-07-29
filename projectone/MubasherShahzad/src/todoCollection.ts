import {TodoItem} from "./TodoItem";

export class TodoCollection{

    private nextId: number = 1;
    private itemMap = new Map<number, TodoItem>();

    constructor(public items: TodoItem[] = [] ){

    }

    public addTodo(items: string): void{
        let item: TodoItem = new TodoItem(this.nextId, items, false);
        this.nextId++;
        this.items.push(item);
        this.itemMap.set(this.nextId, new TodoItem(this.nextId, items));

    }
    getTodoById(id: number): TodoItem {
        return this.itemMap.get(id);

    }
    getTodoItems(includeComplete: boolean): TodoItem[] {
        return [...this.itemMap.values()]
        .filter(item => includeComplete || !item.complete);
    }

    public taskDone(id: number) {
        let item: TodoItem = this.items.find((item) => item.id == id);
        item.complete = true;
    }
    public printAll(): void {
        this.items.forEach((item: TodoItem) => item.printDetails());

    }
}