import { todo } from "./todo";
export declare class todoapi {
    private nextId;
    protected todoMap: Map<number, todo>;
    constructor();
    addTodo(name: string, taskDone: boolean): void;
    getTodoById(id: number): todo | undefined;
    getTodos(includeComplete: boolean): todo[];
    removeCompletedTask(): void;
}
