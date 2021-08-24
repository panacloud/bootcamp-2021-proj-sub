export class itemtodo{

    public id:number;
    public task:string;
    public complete:boolean;

     constructor(id:number,task:string,complete:boolean=false){
         this.id = id;
         this.task= task;
         this.complete = complete;
     }

     public printdetails():void{
         console.log(`${this.id}     ${this.task}      ${this.complete}`);
     }
}