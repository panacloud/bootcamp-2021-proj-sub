"use strict";
// export class TodoItem {
//     public id: number;
//     public task: string;
//     public complete: boolean = false;
//     public constructor(id: number, task: string, complete: boolean = false) {
//         this.id = id;
//         this.task = task;
//         this.complete = complete;
//     }
//     public printDetails() : void {
//         console.log(`${this.id}\t${this.task} ${this.complete
//             ? "\t(complete)": ""}`);
//     }
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItem = void 0;
//upper class can also be written like this
class TodoItem {
    constructor(id, task, complete = false) {
        this.id = id;
        this.task = task;
        this.complete = complete;
        // no statements required
    }
    printDetails() {
        console.log(`${this.id}\t${this.task} ${this.complete
            ? "\t(complete)" : ""}`);
    }
}
exports.TodoItem = TodoItem;
