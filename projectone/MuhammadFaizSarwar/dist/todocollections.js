"use strict";
// import { TodoItem } from "./todoItem";
// export class TodoCollection {
//     private nextId: number = 1;
//     constructor(public userName: string, public todoItems: TodoItem[] = []) {
//         // no statements required
//     }
//     addTodo(task: string): number {
//         while (this.getTodoById(this.nextId)) {
//             this.nextId++;
//         }
//         this.todoItems.push(new TodoItem(this.nextId, task));
//         return this.nextId;
//     }
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoCollection = void 0;
//     getTodoById(id: number) : TodoItem {
//         return this.todoItems.find(item => item.id === id);
//     }
//     markComplete(id: number, complete: boolean) {
//         const todoItem = this.getTodoById(id);
//         if (todoItem) {
//             todoItem.complete = complete;
//         }
//     }
// }
// import { TodoItem } from "./todoItem";
// export class TodoCollection {
//     private nextId: number = 1;
//     private itemMap = new Map<number, TodoItem>();          // using generic type 
//     constructor(public userName: string, todoItems: TodoItem[] = []) {
//         todoItems.forEach(item => this.itemMap.set(item.id, item));
//     }
//     addTodo(task: string): number {
//         while (this.getTodoById(this.nextId)) {
//             this.nextId++;
//         }
//         this.itemMap.set(this.nextId, new TodoItem(this.nextId, task));
//         return this.nextId;
//     }
//     getTodoById(id: number) : TodoItem {
//         return this.itemMap.get(id);
//     }
//     markComplete(id: number, complete: boolean) {
//         const todoItem = this.getTodoById(id);
//         if (todoItem) {
//             todoItem.complete = complete;
//         }
//     }
// }
// Providing acess to To-Do items
// import { TodoItem } from "./todoItem";
// export class TodoCollection {
//     private nextId: number = 1;
//     private itemMap = new Map<number, TodoItem>();
//     constructor(public userName: string, todoItems: TodoItem[] = []) {
//         todoItems.forEach(item => this.itemMap.set(item.id, item));
//     }
//     addTodo(task: string): number {
//         while (this.getTodoById(this.nextId)) {
//             this.nextId++;
//         }
//         this.itemMap.set(this.nextId, new TodoItem(this.nextId, task));
//         return this.nextId;
//     }
//     getTodoById(id: number) : TodoItem {
//         return this.itemMap.get(id);
//     }
//     getTodoItems(includeComplete: boolean): TodoItem[] {
//         return [...this.itemMap.values()]
//             .filter(item => includeComplete || !item.complete);
//     }
//     markComplete(id: number, complete: boolean) {
//         const todoItem = this.getTodoById(id);
//         if (todoItem) {
//             todoItem.complete = complete;
//         }
//     }
// }
// removing completed items
// import { TodoItem } from "./todoItem";
// export class TodoCollection {
//     private nextId: number = 1;
//     private itemMap = new Map<number, TodoItem>();
//     constructor(public userName: string, todoItems: TodoItem[] = []) {
//         todoItems.forEach(item => this.itemMap.set(item.id, item));
//     }
//     addTodo(task: string): number {
//         while (this.getTodoById(this.nextId)) {
//             this.nextId++;
//         }
//         this.itemMap.set(this.nextId, new TodoItem(this.nextId, task));
//         return this.nextId;
//     }
//     getTodoById(id: number) : TodoItem {
//         return this.itemMap.get(id);
//     }
//     getTodoItems(includeComplete: boolean): TodoItem[] {
//         return [...this.itemMap.values()]
//             .filter(item => includeComplete || !item.complete);
//     }
//     markComplete(id: number, complete: boolean) {
//         const todoItem = this.getTodoById(id);
//         if (todoItem) {
//             todoItem.complete = complete;
//         }
//     }
//     removeComplete() {
//         this.itemMap.forEach(item => {
//             if (item.complete) {
//                 this.itemMap.delete(item.id);
//             }
//         })
//     }
// }
// adding a shape type
const todoItem_1 = require("./todoItem");
class TodoCollection {
    constructor(userName, todoItems = []) {
        this.userName = userName;
        this.nextId = 1;
        this.itemMap = new Map();
        todoItems.forEach(item => this.itemMap.set(item.id, item));
    }
    addTodo(task) {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        this.itemMap.set(this.nextId, new todoItem_1.TodoItem(this.nextId, task));
        return this.nextId;
    }
    getTodoById(id) {
        return this.itemMap.get(id);
    }
    getTodoItems(includeComplete) {
        return [...this.itemMap.values()]
            .filter(item => includeComplete || !item.complete);
    }
    markComplete(id, complete) {
        const todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.complete = complete;
        }
    }
    removeComplete() {
        this.itemMap.forEach(item => {
            if (item.complete) {
                this.itemMap.delete(item.id);
            }
        });
    }
    getItemCounts() {
        return {
            total: this.itemMap.size,
            incomplete: this.getTodoItems(false).length
        };
    }
}
exports.TodoCollection = TodoCollection;
