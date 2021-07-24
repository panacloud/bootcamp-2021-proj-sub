"use strict";
// export class TodoItem
// {
//     public id : number;
//     public task: string;
//     public complete: boolean = false;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItem = void 0;
//     public constructor (id: number, task: string, complete: boolean)
//     {
//         this.id = id;
//         this.task = task;
//         this.complete = complete;
//     }
//     public printDetails() : void
//     {
//         console.log(`${this.id} \t${this.task} ${this.complete ? "\t(complete)":""}`);
//     }
// }
// ==================================================//
// correct way to write a class in js//
//===================================================//
class TodoItem {
    constructor(id, task, complete = false) {
        this.id = id;
        this.task = task;
        this.complete = complete;
        // no need of statements 
    }
    printDetails() {
        console.log(`${this.id} \t${this.task} ${this.complete ? "\t(complete)" : ""}`);
    }
}
exports.TodoItem = TodoItem;
