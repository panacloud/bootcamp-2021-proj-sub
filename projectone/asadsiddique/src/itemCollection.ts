import { todoTask } from "./todoTask";

// Object literal or Object Shape...
type countItems = {
  totalItems: number;
  isCompletedTask: number;
};

//  Items Collection Class...

export class itemCollection {
  // Attributes of items Collections...
  private nextTaskId: number = 1;
  protected itemMap = new Map<number, todoTask>();

  public constructor(public userName: string, public items: todoTask[] = []) {
    this.items.forEach((item) => this.itemMap.set(item.id, item));
  }

  // Method to add new todo in the list...
  public addTodo(task: string): number {
    // let todo: todoTask = new todoTask(this.nextTaskId, task, false);
    // this.nextTaskId++;

    // this.items.push(todo);
    while (this.getTodoById(this.nextTaskId)) {
      this.nextTaskId++;
    }
    this.itemMap.set(this.nextTaskId, new todoTask(this.nextTaskId, task));
    return this.nextTaskId;
    // console.log("VAlues: ",this.itemMap.values())
  }

  // Methods to get Items By their ID's...
  public getTodoById(taskId: number) {
    return this.itemMap.get(taskId);
  }

  // Method to get the list of All Items...
  public getTodoItems(isCompleted: boolean): todoTask[] {
    return [...this.itemMap.values()].filter(
      (item) => isCompleted || !item.isCompleted
    );
  }

  // Method to Count the total and Completed items...
  public getTodoItemsCount(): countItems {
    return {
      totalItems: this.itemMap.size,
      isCompletedTask: this.getTodoItems(false).length,
    };
  }

  // method to remove the Completed Task...
  public removeCompletedTask() {
    this.itemMap.forEach((item) => {
      if (item.isCompleted) {
        this.itemMap.delete(item.id);
      }
    });
  }

  // Method to Completed the Task...
  public isCompleted(tsakId: number, isCompleted: boolean): void {
    let completed: todoTask = this.getTodoById(tsakId);
    if (completed) {
      completed.isCompleted = isCompleted;
    }
  }

  // method to print the All items...
  public printDetails(): void {
    this.items.forEach((item) => console.log(item.printDetails()));
  }
}
