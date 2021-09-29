"use strict";
//Class template
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
class Todo {
    //************************************************************************************** *
    //First and old MEthod
    // variables with types
    // taskId : number;
    // task: string;
    // done: boolean;
    // contructor
    // public constructor(taskId:number, task: string, done:boolean = false){
    //    this.taskId = taskId;
    //    this.task = task;
    //      this.done = done
    //  }
    //************************************************************************************** *
    //New synthetic sugar method
    constructor(taskId, task, done = false) {
        //automatic attributes and transpiler code generates here
        this.taskId = taskId;
        this.task = task;
        this.done = done;
    }
    //methods
    printTask() {
        console.log(`${this.taskId}\t${this.task} ${this.done ? "\t(complete)" : ""}`);
    }
}
exports.Todo = Todo;
