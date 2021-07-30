import {itemtodo} from "./itemtodo";

type taskcount = {
    size:number,
    incomplete:number

};

export class todocollection{
    private id:number = 1;
    protected itemMap = new Map<number,itemtodo>();
    constructor(public username:string, public todotasks:itemtodo[]=[]){
        todotasks.forEach(item => this.itemMap.set(item.id,item));
    }

    public addtodo(task:string):number{
        //this.todotasks.push(new itemtodo(this.id,task));
        while(this.gettodobyid(this.id)){
        this.id++;}
        this.itemMap.set(this.id,new itemtodo(this.id,task));
        return this.id;
    }

    public gettodobyid(id:number):itemtodo{
        return this.itemMap.get(id);
    }
    gettodoitems(incompletetasks:boolean):itemtodo[]{
        return [...this.itemMap.values()]
        .filter(item=>incompletetasks || !item.complete);
    }

    public markcomplete(id:number,complete:boolean):void{
        let newtask = this.gettodobyid(id);
        if(newtask.complete == false){
            newtask.complete = true;
        }
    }
    removeCompleteitem() {
        this.itemMap.forEach(item => {
        if (item.complete) {
        this.itemMap.delete(item.id);
        }
        })
        }
        getitemcountss():taskcount{
            return {size :this.itemMap.size,
            incomplete: this.gettodoitems(false).length};
        }
}