export class Item{

    public constructor(public taskId:number, public task: string, public Complete: boolean){

    }
    public printTasks(){
        console.log(`TaskTd: ${this.taskId}, \tTask: ${this.task}, \tComplete: ${this.Complete}`)
    }
}
