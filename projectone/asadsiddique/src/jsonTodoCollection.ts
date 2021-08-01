import { todoTask } from "./todoTask";
import { itemCollection } from "./itemCollection";
import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";

// define schemaType that data will stored in this procedure...
type schemaType = {
  tasks: {
    id: number;
    task: string;
    isCompleted: boolean;
  }[];
};

export class JsonTodoCollection extends itemCollection {
  private database: lowdb.LowdbSync<schemaType>;

  constructor(public userName: string, todoItems: todoTask[] = []) {
    super(userName, []);

    this.database = lowdb(new FileSync("Todos.json"));
    if (this.database.has("tasks").value()) {
      let dbItems = this.database.get("tasks").value();
      dbItems.forEach((item) =>
        this.itemMap.set(
          item.id,
          new todoTask(item.id, item.task, item.isCompleted)
        )
      );
    } else {
      this.database.set("tasks", todoTask).write();
      todoItems.forEach((item) => this.itemMap.set(item.id, item));
    }
  }

  markComplete(id: number, complete: boolean): void {
    super.isCompleted(id, complete);
    this.storeTasks();
  }

  removeComplete(): void {
    super.removeCompletedTask();
    this.storeTasks();
  }

  private storeTasks() {
    this.database.set("tasks", [...this.itemMap.values()]).write();
  }

  addTodo(task: string): number {
    let result = super.addTodo(task);
    this.storeTasks();
    return result;
  }
}
