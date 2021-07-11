import { TodoItem } from "./TodoItem";

type ItemCounts = {
    total: number,
    inCompleted: number,
    completed: number
}

export class TodoCollection {

    private nextId: number = 1;
    private itemsMap = new Map<number, TodoItem>();

    constructor(public items: TodoItem[] = []) {
        items.forEach(item => this.itemsMap.set(item.id, item));
    }

    public addTodo = (item: string): number => {
        this.itemsMap.set(this.nextId, new TodoItem(this.nextId, item, false));
        return this.nextId++;
    }

    public printAll = (completeOrNot: boolean = null): void => {
        let filteredItems : TodoItem[] = this.getAllItems(completeOrNot);
        filteredItems.forEach((item) => item.printDetails());
    }

    public getItem = (id: number): TodoItem => {
        return this.itemsMap.get(id);
    }

    public taskDone = (id: number): void => {
        this.itemsMap.get(id).complete = true;
    }

    public getAllItems = (completeOrNot: boolean = null): TodoItem[] => {
        return (completeOrNot != null) ? [...this.itemsMap.values()].filter(item => item.complete==completeOrNot) : [...this.itemsMap.values()];
    }

    public removeItems = (completeOrNot: boolean = null): void => {
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

    public getItemCount = (): ItemCounts => {
        return {
            total: this.itemsMap.size, // OR we can also use this.getAllItems().length
            inCompleted: this.getAllItems(false).length,
            completed: this.getAllItems(true).length
        }
    }
}