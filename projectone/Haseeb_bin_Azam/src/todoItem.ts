export class TodoItem {
    // public id: number;
    // public task: string;
    // public complete: boolean = false;

    //concise constructor syntax
    constructor(public id: number, public task: string, public complete: boolean = false) {
        // this.id = id;
        // this.task = task;
        // this.complete = complete;
    }

    // by default public
    printDetails(): void {
        console.log(`${this.id} \t ${this.task} \t 
                ${this.complete ? "complete" : ""}`);
    }
}