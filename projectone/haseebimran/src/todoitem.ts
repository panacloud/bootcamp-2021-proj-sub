export class Todoitem {
    /*
    public id: number;
    public task: string;
    public complete: boolean = false
    */
    public constructor(public id: number, 
                       public task: string, 
                       public complete: boolean = false){
        /*
        this.id = id;
        this.task = task;
        this.complete = complete;
        */
    }

    public printDetails() : void {
        console.log(`${this.id}\t
                    ${this.task}\t
                    ${this.complete ? "\t(complete)": ""}`);
    }
}