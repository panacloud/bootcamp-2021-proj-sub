"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
class Todo {
    // public task_list:Todo[] = [];
    constructor(tId, t_Name, t_status) {
        this.taskID = 0;
        this.taskID = tId;
        this.taskName = t_Name;
        this.taskStatus = false;
        // in case if user explicitly provide status
        if (t_status) {
            this.taskStatus = t_status;
        }
        // in case if user don't provide status            
        else {
            this.taskStatus = false;
        }
    }
    returnTaskName() {
        return this.taskName;
    }
    returnTaskID() {
        return this.taskID;
    }
    returnTaskStatus() {
        return this.taskStatus;
    }
    changeTaskStatus() {
        this.taskStatus = !this.taskStatus;
    }
    displayTask() {
        console.log(`${this.taskID}\t${this.taskName}\t${this.taskStatus}`);
    }
}
exports.Todo = Todo;
