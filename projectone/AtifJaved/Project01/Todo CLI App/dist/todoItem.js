"use strict";
// export class todoItem{
//     public id: number;
//     public task: string;
//     public complete : boolean = false ;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItem = void 0;
//     public constructor(id: number, task: string, complete: boolean = false ){
//         this.id = id;
//         this.task = task; 
//         this.complete = complete;
//     } 
//     public printDetails(): void { 
//         console.log(`${this.id} \ t${this.task} ${this.complete ? "\t(complete)" : " "}`)
//     }
//  }
class TodoItem {
    constructor(id, task, complete = false) {
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    printDetails() {
        console.log(`${this.id} \t ${this.task} ${this.complete ? "\t (complete)" : " "}`);
    }
}
exports.TodoItem = TodoItem;
