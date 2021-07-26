
export class TodoItem {
    constructor(public taskId: number,
        public task: string,
        public complete: boolean = false) {
        
        }
        printDetails() : void {
        console.log(`${this.taskId}\t${this.task} ${this.complete
        ? "\t(complete)": ""}`);
        }
    }