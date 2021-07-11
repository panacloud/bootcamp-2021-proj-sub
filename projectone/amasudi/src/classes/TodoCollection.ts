import { TodoItem } from "./TodoItem";

type ItemCounts = {
    total: number,
    inCompleted: number,
    completed: number
}

export class TodoCollection {

    private nextId: number = 1;
    protected itemsMap = new Map<number, TodoItem>();

    constructor(public items: TodoItem[] = []) {
        items.forEach(item => this.itemsMap.set(item.id, item));
    }

    public addTodo(item: string): number {
        this.itemsMap.set(this.nextId, new TodoItem(this.nextId, item, false));
        return this.nextId++;
    }

    public printAll(completeOrNot: boolean = null): void {
        console.log(`ID\tTask\t\tCompleted\n=========================================`);
        let filteredItems : TodoItem[] = this.getAllItems(completeOrNot);
        if (filteredItems.length) filteredItems.forEach((item) => item.printDetails());
        else console.log("No items found.");
    }

    public getTodo(id: number): TodoItem {
        return this.itemsMap.get(id);
    }

    public removeTodo(id: number): void {
        this.itemsMap.delete(id);
    }

    public markComplete(id: number, complete: boolean): void {
        this.itemsMap.get(id).complete = complete;
    }

    public getAllItems(completeOrNot: boolean = null): TodoItem[] {
        return (completeOrNot != null) ? [...this.itemsMap.values()].filter(item => item.complete==completeOrNot) : [...this.itemsMap.values()];
    }

    public removeTodos(completeOrNot: boolean = null): void {
        if (completeOrNot != null) {
            this.itemsMap.forEach(item => {
                if (item.complete == completeOrNot) {
                    this.itemsMap.delete(item.id);
                }
            });
        } else {
            this.itemsMap = new Map<number, TodoItem>();
        }
    }

    public getTodoCount(): ItemCounts {
        return {
            total: this.itemsMap.size, // OR we can also use this.getAllItems().length
            inCompleted: this.getAllItems(false).length,
            completed: this.getAllItems(true).length
        }
    }
}