import {TodoItem} from "./todoItem";

export class ItemCollection{
    private nextId: number = 1;

    public constructor(public Items: TodoItem[]=[]){
    }

    public addTodoItems(task:string):void{
        let thing:TodoItem = new TodoItem(this.nextId, task, false);
        this.nextId ++;
        this.Items.push(thing);
    }

    public printDetails():void {
        this.Items.forEach((thing:TodoItem)=>thing.printDetails());
    }

    public taskDone(taskId:number){
        let item :TodoItem = this.Items.find((item)=>item.id === taskId);
        item.complete = true;
    }


}