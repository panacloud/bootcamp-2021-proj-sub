"use strict";
// export class Todo
// {
//     private taskID: number = 0;
//     private taskName: string;
//     private taskStatus: boolean;        
//     // public task_list:Todo[] = [];
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItem = void 0;
//     public constructor(tId:number, t_Name:string, t_status?:boolean)
//     {           
//         this.taskID = tId;      
//         this.taskName = t_Name;
//         this.taskStatus = false;            
//         // in case if user explicitly provide status
//             if(t_status)
//                 { this.taskStatus = t_status;}
//         // in case if user don't provide status            
//             else
//                 {this.taskStatus = false;}
//     }
//     public returnTaskName(): string
//     {
//         return this.taskName;
//     }
//     public returnTaskID(): number
//     {
//         return this.taskID;
//     }
//     public returnTaskStatus(): boolean
//     {
//         return this.taskStatus;
//     }
//     public changeTaskStatus()
//     {
//         this.taskStatus = !this.taskStatus;
//     }
//     public displayTask()
//     {
//         console.log(`${this.taskID}\t${this.taskName}\t${this.taskStatus}`);
//     }
// }
class TodoItem {
    constructor(id, task, complete = false) {
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    printDetails() {
        console.log(`${this.id}\t${this.task} ${this.complete
            ? "\t(complete)" : ""}`);
    }
}
exports.TodoItem = TodoItem;
