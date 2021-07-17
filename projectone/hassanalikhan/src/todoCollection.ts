// imports
import { TodoItem } from "./todoItem";

// Type defination for Item Counts
type ItemCounts = {
  total: number;
  incomplete: number;
  complete: number;
};

export class TodoCollection {
  // to define item id
  private nextId: number = 1;
  // by this way we can store a todo item in the form of key value pair
  // itemMap have keys in form of number an dvalues are of TodoItem type
  private itemMap = new Map<number, TodoItem>();

  constructor(public userName: string, public todoItems: TodoItem[] = []) {
    // no statements required here
    // TS compiler will auto genrate these
    todoItems.forEach((item) => this.itemMap.set(item.id, item));
  }

  // adding a new todo and get ID of the added todo
  addTodo(task: string): number {
    // increment in the todo id in case same id already exist
    while (this.getTodoById(this.nextId)) {
      this.nextId++;
    }
    this.itemMap.set(this.nextId, new TodoItem(this.nextId, task));
    return this.nextId;
  }

  // get a todo by specific id
  getTodoById(id: number): TodoItem {
    return this.itemMap.get(id);
  }

  // get items based on complete status (default to get all items)
  getTodoItems(includeComplete: boolean): TodoItem[] {
    return [...this.itemMap.values()].filter(
      (item) => includeComplete || !item.complete
    );
  }

  // mark a task as completed or back to uncomplete
  markComplete(id: number, complete: boolean): void {
    const todoItem = this.getTodoById(id);
    // acts only in case if the todo exist with specific id
    if (todoItem) {
      todoItem.complete = complete;
    }
  }

  // Remove Completed Itmes
  removeComplete(): void {
    this.itemMap.forEach((item) => {
      if (item.complete) {
        this.itemMap.delete(item.id);
      }
    });
  }

  // Count items in the collection
  getItemCounts(): ItemCounts {
    return {
      total: this.itemMap.size,
      incomplete: this.getTodoItems(false).length,
      complete: this.itemMap.size - this.getTodoItems(false).length,
    };
  }

  // To print all the todos at once
  printAll(): void {
    this.getTodoItems(true).forEach((item) => {
      item.printDetails();
    });
  }
}
