"use strict";
// import { Todoitem } from "./todoItem";
// import { Todocollection } from "./todoCollection";
// import Lowdb = require("lowdb");
// import * as lowdb from "lowdb";
// import { Low, LowSync }  from "lowdb";
// //import * as FileSync from "lowdb/adapters/FileSync";
// //import Lowdb = require("lowdb");
// const FileSync = require("lowdb/adapters/FileSync");
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTodoCollection = void 0;
// type schemaType = {
//     tasks: {id:number; task:string; complete:boolean;}[]
// };
// export class jsonTodoCollection extends Todocollection {
//     private database: lowdb.LowSync<schemaType>;
//     constructor(public userName:string, todoItems: Todoitem[] = []){
//         super(userName,[]);
//         this.database = new Lowdb.LowSync(new FileSync("Todos.json"));
//         if (this.database.has("tasks").value()) {
//             let dbItems = this.database.get("tasks").value();
//             dbItems.forEach(item => 
//                 this.itemMap.set(item.id, new Todoitem(item.id, item.task, item.complete
//                     )));
//         }
//         else {
//             this.database.set("tasks",todoItems).write();
//             todoItems.forEach(item => this.itemMap.set(item.id,item));
//         }
//     }
//     addTodo(task: string): number{
//         let result = super.addTodo(task);
//         this.storeTasks();
//         return result;
//     }
//     markComplete(id: number, complete:boolean): void{
//         super.markComplete(id,complete);
//         this.storeTasks();
//     }
//     removeComplete(): void {
//         super.removeComplete();
//         this.storeTasks();
//     }
//     private storeTasks() {
//         this.database.set("tasks", [...this.itemMap.values()]).write();
//     }
// }
const todoItem_1 = require("./todoItem");
const todoCollection_1 = require("./todoCollection");
const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
class JsonTodoCollection extends todoCollection_1.Todocollection {
    constructor(userName, todoItems = []) {
        super(userName, []);
        this.userName = userName;
        this.database = lowdb(new FileSync("Todos.json"));
        if (this.database.has("tasks").value()) {
            let dbItems = this.database.get("tasks").value();
            dbItems.forEach(item => this.itemMap.set(item.id, new todoItem_1.Todoitem(item.id, item.task, item.complete)));
        }
        else {
            this.database.set("tasks", todoItems).write();
            todoItems.forEach(item => this.itemMap.set(item.id, item));
        }
    }
    addTodo(task) {
        let result = super.addTodo(task);
        this.storeTasks();
        return result;
    }
    markComplete(id, complete) {
        super.markComplete(id, complete);
        this.storeTasks();
    }
    removeComplete() {
        super.removeComplete();
        this.storeTasks();
    }
    storeTasks() {
        this.database.set("tasks", [...this.itemMap.values()]).write();
    }
}
exports.JsonTodoCollection = JsonTodoCollection;
