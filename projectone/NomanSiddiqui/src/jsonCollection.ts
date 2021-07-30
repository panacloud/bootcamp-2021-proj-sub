import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";
import { join } from "path";
import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";

type schemaType = {
    tasks: { id: number, task: string, complete: boolean; }[];
}

// Use JSON File for storage
export class JsonTodoCollection extends TodoCollection {

    private db: lowdb.LowdbSync<schemaType>;

    constructor(public userName: string, todoItems: TodoItem[] = []) {

        super(userName, todoItems);
        let filePath: string = join(__dirname, 'NSTododb.json');
        this.db = lowdb(new FileSync(filePath));
        if (this.db.has("tasks").value()) {
            let dbItems = this.db.get("tasks").value();
            dbItems.forEach(item => this.itemMap.set(item.id,
                new TodoItem(item.id, item.task, item.complete)));
        } else {
            this.db.set("tasks", todoItems).write();
            todoItems.forEach(item => this.itemMap.set(item.id, item));
        }


    }
    private storeTasks(): void {
        this.db.set("tasks", [...this.itemMap.values()]).write()

    }

    addTodo(task: string): number {
        let taskId = super.addTodo(task);
        this.storeTasks();
        return taskId;
    }

    markComplete(id: number, complete: boolean): void {
        super.markComplete(id, complete);
        this.storeTasks();
    }

    removeComplete(): void {
        super.removeComplete();
        this.storeTasks();
    }
}




