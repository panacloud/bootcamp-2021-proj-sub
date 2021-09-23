import { TodoItem } from "./todoItem";

type itemCounts = {
    total: number,
    incomplete: number
}

export class TodoCollection {
    private nextId: number = 1;
    //using map
    protected itemMap = new Map<number, TodoItem>();

    constructor(public userName: string, public todoItems: TodoItem[] = []) {
        //map is used otherwise no statement is required
        todoItems.forEach( item => this.itemMap.set(item.id, item) );
    }

    getTodoById(id: number): TodoItem {
        // return this.todoItems.find(item => item.id == id);
        return this.itemMap.get(id);
    }

    addTodo(task: string): number {
        while(this.getTodoById(this.nextId)) {
            this.nextId++;
        }

        // this.todoItems.push(new TodoItem(this.nextId, task));
        this.itemMap.set(this.nextId, new TodoItem(this.nextId, task));
        return this.nextId;
    }

    markComplete(id: number, complete: boolean): void {
        const todoItem = this.getTodoById(id);
        if(todoItem) {
            todoItem.complete = complete;
        }
    }

    getTodoItems(includeComplete: boolean): TodoItem[] {
        return [ ...this.itemMap.values() ]
            .filter( item => includeComplete || !item.complete )
    }

    removeComplete(): void {
        this.itemMap.forEach( item => {
            if(item.complete)
                this.itemMap.delete(item.id);
        } )
    }

    getItemCounts(): itemCounts {
        return {
            total: this.itemMap.size,
            incomplete: this.getTodoItems(false).length
        };
    }
}