export class TodoItem {
    public id: number;
    public task: string;
    public complete: boolean = false;
    // 
    constructor(id: number, task: string, complete: boolean = false){
        this.id = id;
        this.task = task;
        this.complete = complete;
    };
    //
    printDetails(){
        console.log(`${this.id}\t${this.task} ${this.complete
            ? "\t(complete)": ""}`);
    }
}