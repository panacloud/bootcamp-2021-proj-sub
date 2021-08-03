import { Item } from "./Item";


type ItemCounts = {
    incomplete: number,
    total: number
   }


export class ItemCollection{

    private additem: number = 1
    private itemMap = new Map<number, Item>();


    

    public constructor(public userNAME: string,public items:Item[] = []){
            items.forEach(obj => this.itemMap.set(obj.taskId, obj));
    }



    // public gettaskbyid(id:number): Item{
    //     return this.itemMap.get(id) ;

    // }



    // public addtoitem(task:string){
    //     let item: Item = new Item(this.additem,task,false);
    //     this.additem++;
    //     this.items.push(item);

    // }
    
    
    
    
    
    // public printall():void{
    //     this.items.forEach((item:Item) => {item.printTasks()})
    // }
    
    
    
    
    // public compare(taskId:number){
    //     let item: Item = this.items.find((item) => item.taskId == taskId )
    //     item.Complete= true;
    // }



    public getTodoItems(includeComplete: boolean): Item[] {
        return [...this.itemMap.values()]
        .filter(item => includeComplete || !item.Complete);
        }
    

    getItemCounts(): ItemCounts {
        return {
        total: this.itemMap.size,
        incomplete: this.getTodoItems(false).length
        };
    }
}