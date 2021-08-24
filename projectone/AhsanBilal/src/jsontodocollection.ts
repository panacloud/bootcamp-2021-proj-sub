import { itemtodo } from "./itemtodo";
import { todocollection } from "./todocollection";
import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";
type schemaType = {
tasks: { id: number; task: string; complete: boolean; }[]
};
export class JsonTodoCollection extends todocollection {
private database: lowdb.LowdbSync<schemaType>;
constructor(public userName: string, todoItems: itemtodo[] = []) {
super(userName, []);
this.database = lowdb(new FileSync("Todos.json"));
if (this.database.has("tasks").value())
{
let dbItems = this.database.get("tasks").value();
dbItems.forEach(item => this.itemMap.set(item.id,
new itemtodo(item.id, item.task, item.complete)));
} else {
this.database.set("tasks", todoItems).write();
todoItems.forEach(item => this.itemMap.set(item.id, item));
}
}
addTodo(task: string): number {
let result = super.addtodo(task);
this.storeTasks();
return result;
}
markComplete(id: number, complete: boolean): void {
super.markcomplete(id, complete);
this.storeTasks();
}
removeComplete(): void {
super.removeCompleteitem();
this.storeTasks();
}
private storeTasks() {
this.database.set("tasks", [...this.itemMap.values()]).write();
}
}