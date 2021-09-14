import { Todoitem } from "./todoitem";

type ItemCounts = {
    total: number,
    incomplete: number
}

export class todocollection {
    private nextId: number = 1;
    protected itemMap = new Map<number, Todoitem>();

    constructor(public userName: string, public todoitems: Todoitem[]=[]) {
        todoitems.forEach(item => this.itemMap.set(item.id, item));
    }
    
    addTodo(task: string): number {
        while (this.getTodoById(this.nextId)){
            this.nextId++;
        }
        this.itemMap.set(this.nextId, new Todoitem(this.nextId, task));
        return this.nextId;
    }
    getTodoById(id: number): Todoitem {
        return this.itemMap.get(id);
    }

    getTodoItems(includeComplete: boolean): Todoitem[] {
        return [...this.itemMap.values()]
        .filter(item => includeComplete || !item.complete);
        }

    markComplete(id: number, complete: boolean) {
        const todoItem = this.getTodoById(id);
        if(todoItem) {
            todoItem.complete = complete;
        }
    }
    removeComplete() {
        this.itemMap.forEach(item => {
            if (item.complete) {
                this.itemMap.delete(item.id);
            }
        })
    }
    getItemCounts(): ItemCounts {
        return {
            total: this.itemMap.size,
            incomplete: this.getTodoItems(false).length
        };
    }
}