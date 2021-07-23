export class item {

    public constructor(public id:number,public name:string,public task_completion=false){}

    public print():void{
        console.log(`${this.id}\t ${this.name}\t ${this.task_completion?"Completed":""}`)
    }
}