"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCollection = void 0;
class ItemCollection {
    constructor(userNAME, items = []) {
        this.userNAME = userNAME;
        this.items = items;
        this.additem = 1;
        this.itemMap = new Map();
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
    getTodoItems(includeComplete) {
        return [...this.itemMap.values()]
            .filter(item => includeComplete || !item.Complete);
    }
    getItemCounts() {
        return {
            total: this.itemMap.size,
            incomplete: this.getTodoItems(false).length
        };
    }
}
exports.ItemCollection = ItemCollection;
