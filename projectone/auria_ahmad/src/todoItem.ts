// export class TodoItem
// {
//     public id : number;
//     public task: string;
//     public complete: boolean = false;

//     public constructor (id: number, task: string, complete: boolean)
//     {
//         this.id = id;
//         this.task = task;
//         this.complete = complete;
//     }

//     public printDetails() : void
//     {
//         console.log(`${this.id} \t${this.task} ${this.complete ? "\t(complete)":""}`);
//     }
// }

// ==================================================//
// correct way to write a class in js//
//===================================================//
export class TodoItem{
    public constructor (public id: number, public task:string, public complete:boolean = false){
        // no need of statements 
    }
    public printDetails():void{
        console.log(`${this.id} \t${this.task} ${this.complete ? "\t(complete)":""}`);
    }
}