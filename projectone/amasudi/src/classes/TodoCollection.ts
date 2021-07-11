import { TodoItem } from "./TodoItem";

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
}