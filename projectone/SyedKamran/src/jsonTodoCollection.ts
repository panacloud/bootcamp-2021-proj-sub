import { TodoItem } from "./todoitem";
import { TodoCollecton } from "./todoCollection";
import * as lowdb from "lowdb";
import * as FileSyn from "lowdb/adapters/FileSync";

type schemaType = {
    tasks: {id:number; task: string; complete:boolean;}[]
};

export class jsonTodoCollection extends TodoCollecton {
    private database: lowdb.LowdbSync<schemaType>;

    constructor (public userName: string, todoItem: TodoItem[]=[]){
        super(userName, []);

        this.database = lowdb(new FileSyn("Todos.json"));

        if (this.database.has("tasks").value()) {
            let dbItems = this.database.get("tasks").value();
            dbItems.forEach(item => this.itemMap.set(item.id, new TodoItem
                                                    (item.id, item.task, item.complete)));
        } else {
            this.database.set("tasks", this.todoItems).write();
            this.todoItems.forEach(item => this.itemMap.set(item.id, item));
        }             
            
    }

    private storeTask(){
        this.database.set("tasks", [...this.itemMap.values()]).write();        
    }

    addTodo(task:string): number {
        let result = super.addTodo(task);
        this.storeTask();
        return result;

    }
    markComplete(id: number, complete: boolean): void {
        super.markComplete(id, complete);
        this.storeTask();            
    }
    removeComplete(){
        super.removeComplete();
        this.storeTask();
    }


}






