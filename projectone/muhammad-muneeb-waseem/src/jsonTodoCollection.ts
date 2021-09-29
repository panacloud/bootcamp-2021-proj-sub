import { TodoCollection } from "./todoCollection";
import { Todo } from "./todo";
import * as lowdb from 'lowdb';
import * as FileSync from "lowdb/adapters/FileSync";

type schemaType = {
    tasks: {
        taskId : number,
        task : string,
        done : boolean
    }[]
};

export class JsonTodoCollection extends TodoCollection {
    private database: lowdb.LowdbSync<schemaType>;
    constructor(public userName: string, todoItems: Todo[] = []) {
    super(userName, []);
    this.database = lowdb(new FileSync("Todos.json"));
    if (this.database.has("tasks").value()) {
    let dbItems = this.database.get("tasks").value();
    dbItems.forEach(item => this.itemMap.set(item.taskId,
    new Todo(item.taskId, item.task, item.done)));
    } else {
    this.database.set("tasks", todoItems).write();
    todoItems.forEach(item => this.itemMap.set(item.taskId, item));
    }
    }

    addTodo(task: string): number {
        let result = super.addTodo(task);
        this.storeTasks();
        return result;
    }

    markComplete(id: number, complete: boolean): void {
    super.markComplete(id, complete);
    this.storeTasks();
    }

    deleteComplete(): void {
    super.deleteComplete();
    this.storeTasks();
    }
    
    private storeTasks() {
    this.database.set("tasks", [...this.itemMap.values()]).write();
    }


}

