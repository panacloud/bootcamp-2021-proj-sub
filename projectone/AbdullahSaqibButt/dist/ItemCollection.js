"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCollection = void 0;
const Item_1 = require("./Item");
class ItemCollection {
    constructor(todoCollection) {
        this.todoCollection = todoCollection;
        this.nextid = 1;
        this.itemMap = new Map();
        todoCollection.forEach(item => this.itemMap.set(item.id, item));
    }
    /**
     * AddTodo
     * This function takes the task as parameter
     *  and Adds it to the Todo Collection Map
   task :string  : number*/
    // #########################################################
    // #########################################################
    AddTodo(task) {
        while (this.gettodobyid(this.nextid)) {
            this.nextid++;
        }
        this.itemMap.set(this.nextid, new Item_1.Item(this.nextid, task));
        return this.nextid;
    }
    /**
     * gettodobyid
     * This is Getter function and returns the item
     * whose Id is passed as parameter
id : number  : Item    */
    // ########################################################
    // ########################################################
    gettodobyid(id) {
        return this.itemMap.get(id);
    }
    /**
     * printAll
     * This Funtion Prints All Tasks that are stored
     * in Todo Collection Array
 : void    */
    // ############################################################
    // ############################################################
    printAll() {
        this.itemMap.forEach((item) => { item.PrintDetails(); });
    }
    /**
     * Taskcomplete
     * This Function takes task id as input
     * Finds the corresponding task and marks as completed
     */
    // ###############################################################
    // ###############################################################
    Taskcomplete(taskid, complete) {
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
    listofcompletedtasks() {
        this.itemMap.forEach(item => {
            if (item.complete == true) {
                item.PrintDetails();
            }
        });
    }
    /**
     * removecompletedtasks
     */
    removecompletedtasks() {
        this.itemMap.forEach(item => {
            if (item.complete == true) {
                this.itemMap.delete(item.id);
            }
        });
    }
    /*
        This function provides list of all

    */
    getTodoItems(includeComplete) {
        return [...this.itemMap.values()]
            .filter(item => includeComplete || !item.complete);
    }
    /**
     * getItemCounts
  : Itemcount    */
    getItemCounts() {
        return {
            total: this.itemMap.size,
            incomplete: this.getTodoItems(false).length
        };
    }
}
exports.ItemCollection = ItemCollection;
