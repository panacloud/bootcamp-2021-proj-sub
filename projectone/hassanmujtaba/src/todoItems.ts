export class TodoItems {
    constructor(public id: number, public task: string, public status: boolean){}

    public printTask(){
        console.log(`${this.id}\t${this.task}\t ${this.status}`)
    }
}