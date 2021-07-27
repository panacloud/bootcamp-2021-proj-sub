'use strict';
import { TodoItem } from "./TodoItems";
import { TodoCollection } from "./TodoCollection";
import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";

type schemaType = {
    tasks: { id: number; task: string; complete: boolean; }[]
};

export class JsonTodoCollections extends TodoCollection {
    private database: lowdb.LowdbSync<schemaType>;

    constructor(public userName: string, todoItems: TodoItem[] = []) {
        super(userName, todoItems);
        this.database = lowdb(new FileSync("tasks.json"));
        if (this.database.has("tasks").value()) {
            let dbitems = this.database.get("tasks").value();
            dbitems.forEach(item => this.itemMap.set(item.id, new TodoItem(item.id, item.task, item.complete)));
        } else {
            this.database.set("tasks", todoItems).write();
            todoItems.forEach(item => this.itemMap.set(item.id, item))
        }
    }

    addTask(task: string): number {
        let result = super.addTodo(task);
        this.storeTask();
        return result;
    }

    deleteTask(id: number) {
        super.removeById(id);
        this.database.get("tasks").remove({ id: id }).write();
    }

    storeTask(): void {
        this.database.set("tasks", [...this.itemMap.values()]).write();
    }

    completeTask(id: number): boolean {
        let status: boolean = super.markComplete(id, true);
        if (status) {
            this.database.get("tasks").find({ id: id }).assign({ complete: true }).write();
        }
        return status;
    }

    dumpDataBase(): void {
        let items = this.database.get("tasks").value();
        if (items) {
            items.forEach(item => console.log(item))
        }
    }
}