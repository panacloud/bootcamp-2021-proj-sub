import { Item } from "./Item";

type Itemcount = {
    total : number;
    incomplete : number;
}


export class ItemCollection {
    private nextid : number = 1;
    protected itemMap = new Map <number , Item>();
    constructor(public todoCollection : Item []) {
        todoCollection.forEach(item=> this.itemMap.set(item.id,item));
    }

    /**
     * AddTodo
     * This function takes the task as parameter
     *  and Adds it to the Todo Collection Map
   task :string  : number*/

    // #########################################################
    // #########################################################

    AddTodo(task :string) : number {
        while (this.gettodobyid(this.nextid)) {
            this.nextid++;
        }
        this.itemMap.set(this.nextid, new Item(this.nextid, task));
        return this.nextid;
    }


    /**
     * gettodobyid
     * This is Getter function and returns the item 
     * whose Id is passed as parameter
id : number  : Item    */

    // ########################################################
    // ########################################################


    public gettodobyid(id : number) : Item {
        return this.itemMap.get(id);
    }



    /**
     * printAll
     * This Funtion Prints All Tasks that are stored
     * in Todo Collection Array
 : void    */

    // ############################################################
    // ############################################################


    public printAll(): void {
        this.itemMap.forEach((item: Item) => {item.PrintDetails()})
    }


    /**
     * Taskcomplete
     * This Function takes task id as input 
     * Finds the corresponding task and marks as completed
     */

    // ###############################################################
    // ###############################################################

    public Taskcomplete(taskid:number , complete : boolean) {
        const todoItem = this.gettodobyid(taskid);
        if (todoItem) {
            todoItem.complete = complete;
        }    
    }


    /**
     * listofcompletedtasks
     * This Function Prints all the tasks from Array 
     * Which are completed
     */

    // ######################################################
    // ######################################################


    public listofcompletedtasks() {
        this.itemMap.forEach(item => {
            if (item.complete == true) {
                item.PrintDetails();
            }
        })
    }


    /**
     * removecompletedtasks
     */
    public removecompletedtasks() {
        this.itemMap.forEach(item=> {
            if (item.complete == true) {
                this.itemMap.delete(item.id);
            }
        })
    }

    /*
        This function provides list of all 

    */
    getTodoItems(includeComplete: boolean): Item[] {
        return [...this.itemMap.values()]
        .filter(item => includeComplete || !item.complete);
        }

    /**
     * getItemCounts
  : Itemcount    */
    public getItemCounts() : Itemcount {
        return {
            total : this.itemMap.size,
            incomplete : this.getTodoItems(false).length
        };
        
    }    
    
}