import {item} from "./item"

export class collection{
    private nextId:number=1
    protected itemMap=new Map <number,item>()

    public constructor(public items:item[],public userName:string){
        items.forEach(item=>this.itemMap.set(item.id,item))
        
    }

    public addTodo(itemName:string):void{
        while(this.getTodoById(this.nextId)){
            this.nextId++
        }
        this.itemMap.set(this.nextId,new item(this.nextId,itemName))
        
    }

    public taskDone(id:number,completion:boolean):void{
        let item:item=this.getTodoById(id)
        if(item){
            item.task_completion=completion
        }
    }
    
    public getTodoById(id:number):item{
        return this.itemMap.get(id)
    }

    public getTodoItems(includeComplete:boolean):item[]{
        return [...this.itemMap.values()].filter(item=> includeComplete||!item.task_completion)
    }

    public printAllItems():void{
        this.getTodoItems(true).forEach(item=>item.print())
    }

    public removeCompletedTask():void{
        this.itemMap.forEach(item=>{
            if(item.task_completion){
                this.itemMap.delete(item.id)}
            }
            )
    }

    public getItemCount():{total:number,incomplete:number}{
        return{
            total:this.itemMap.size,
            incomplete:this.getTodoItems(false).length
        }
    }
}