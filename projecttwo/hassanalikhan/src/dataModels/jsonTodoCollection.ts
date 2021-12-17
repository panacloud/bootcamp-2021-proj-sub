// Imports
import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";
import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";

// Type defination of the data to be stored
type schemaType = {
  tasks: { id: number; task: string; complete: boolean }[];
};

// Sub-class of the TodoCollection class
export class JsonTodoCollection extends TodoCollection {
  private database: lowdb.LowdbSync<schemaType>;

  constructor(todoItems: TodoItem[] = []) {
    // refers to TodoCollection class
    super([]);
    // Create file with name to store data
    this.database = lowdb(new FileSync("Todos.json"));
    // check if the data base has already stored tasks in it
    if (this.database.has("tasks").value()) {
      // returns the tasks with id, todo and complete status
      let dbItems = this.database.get("tasks").value();
      dbItems.forEach((item) =>
        this.itemMap.set(
          item.id,
          new TodoItem(item.id, item.task, item.complete)
        )
      );
    } else {
      // in-case when no task in the file write data to file
      this.database.set("tasks", todoItems).write();
      todoItems.forEach((item) => this.itemMap.set(item.id, item));
    }
  }
  // Add new task to file
  addTodo(task: string): number {
    let result = super.addTodo(task);
    this.storeTasks();
    return result;
  }
  // mark status of a said task in the file
  markComplete(id: number, complete: boolean): void {
    super.markComplete(id, complete);
    this.storeTasks();
  }
  // remove completed tasks from file
  removeComplete(): void {
    super.removeComplete();
    this.storeTasks();
  }
  // Store Data
  private storeTasks() {
    this.database.set("tasks", [...this.itemMap.values()]).write();
  }
}
