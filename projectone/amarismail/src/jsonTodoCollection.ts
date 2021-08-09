import { TodoCollection } from "./todoCollection";
import { TodoItem } from "./todoItem";
import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";

type schemaType = {
    tasks: {
        id:number;
        task: string;
        complete: boolean;
    }[]
};

export class JsonTodoCollection extends TodoCollection{
    private database: lowdb.LowdbSync<schemaType>;

    constructor(public userName:string, todoItems: TodoItem[]=[]){
        super(userName, []);
        this.database = lowdb(new FileSync("Todo.json"));
        if (this.database.has("tasks").value()){
            let dbItems = this.database.get("tasks").value();
            dbItems.forEach(item => this.itemMap.set(item.id, 
                new TodoItem(item.id, item.task, item.complete)));
        } else {
            this.database.set("tasks", todoItems).write();
            todoItems.forEach(item => this.itemMap.set(item.id, item));
        }
    }

    addTodo(task: string):number{
        let result = super.addTodo(task);
        this.storeTasks();
        return result;
    }

    markComplete(id:number, complete:boolean):void{
        super.markComplete(id, complete);
        this.storeTasks();
    }

    reomveComplete():void{
        super.reomveComplete();
        this.storeTasks();
    }

    private storeTasks(){
        this.database.set("tasks", [...this.itemMap.values()]).write();
    }
}