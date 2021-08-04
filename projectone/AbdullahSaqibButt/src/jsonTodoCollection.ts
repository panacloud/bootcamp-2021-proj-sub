import { Item } from "./Item";
import { ItemCollection } from "./itemCollection";
import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";


type schemaType = {
 tasks: { id: number; task: string; complete: boolean; }[]
};


export class JsonTodoCollection extends ItemCollection {
    private database: lowdb.LowdbSync<schemaType>;
    constructor(public userName: string, todoItems: Item[] = []) {
        super([]);
        this.database = lowdb(new FileSync("Todos.json"));
        if (this.database.has("tasks").value()) {
                let dbItems = this.database.get("tasks").value();
                dbItems.forEach(item => this.itemMap.set(item.id,
                new Item(item.id, item.task, item.complete)));
            }           
        else {
            this.database.set("tasks", todoItems).write();
            todoItems.forEach(item => this.itemMap.set(item.id, item));
        }
    }
        
            AddTodo(task: string): number {
            let result = super.AddTodo(task);
            this.storeTasks();
            return result;
            }


            TaskComplete(id: number, complete: boolean): void {
            super.Taskcomplete(id, complete);
            this.storeTasks();
            }

            removecompletedtasks(): void {
            super.removecompletedtasks();
            this.storeTasks();
            }


         private storeTasks() {
         this.database.set("tasks", [...this.itemMap.values()]).write();

        }
   }

