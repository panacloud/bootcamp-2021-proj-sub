import { todo } from '../api/todo';
import { todoapi } from '../api/todoapi';
declare class db extends todoapi {
    private database;
    constructor();
    userExist(key: string): boolean | undefined;
    createTodoList(name: string): boolean;
    getTodosByUser(name: string, includeComplete: boolean): todo[];
    addUserTodo(name: string, todoName: string, taskDone?: boolean): void;
    removeTodo(name: string, index: string | undefined): string;
    taskDone(username: string, ids: number[]): void;
    private mapObj;
    private storeTasks;
}
export declare const tododb: db;
export {};
