import { todoItem } from "./todoItem";
import { todoCollection } from "./todoCollection";
import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";

type schemaType = {
  tasks: { id: number; task: string; complete: boolean }[];
};

export class JsonToDoCollection extends todoCollection {
    private database: lowdb.LowdbSync<schemaType>;
    
    constructor(public todoItems: todoItem[] = []) 
    {
        super([]);
        this.database = lowdb(new FileSync("ToDo.json"));
        if (this.database.has("tasks").value()) {
            let dbItems = this.database.get("tasks").value();
            dbItems.forEach((item) =>this.itemMap.set(item.id,new todoItem(item.id, item.task, item.complete)));
        }
        else
        {
            this.database.set("tasks", todoItems).write();
            todoItems.forEach((item) => this.itemMap.set(item.id, item));
        }
    }
    
    public addToDo(task: string): number {
        let result = super.addTodo(task);
        this.storeTask();
        return result;
    }
    
    public markComplete(id: number, complete: boolean): void {
        super.markComplete(id, complete);
        this.storeTask();
    }
    
    public removeComplete(): void {
        super.removeComplete();
        this.storeTask();
    }
    
    private storeTask() {
        this.database.set("tasks", [...this.itemMap.values()]).write();
    }
}
