export class TodoItem {
    constructor(public id: number,public task:string,public complete: boolean = false){
        //consice syntax 
    }

    printDetails():void{
        console.log(`ID:${this.id} \tTask:${this.task}\tCompleted:${this.complete}`);
    }
}