"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todoitem = void 0;
class Todoitem {
    /*
    public id: number;
    public task: string;
    public complete: boolean = false
    */
    constructor(id, task, complete = false) {
        this.id = id;
        this.task = task;
        this.complete = complete;
        /*
        this.id = id;
        this.task = task;
        this.complete = complete;
        */
    }
    printDetails() {
        console.log(`${this.id}\t
                    ${this.task}\t
                    ${this.complete ? "\t(complete)" : ""}`);
    }
}
exports.Todoitem = Todoitem;
