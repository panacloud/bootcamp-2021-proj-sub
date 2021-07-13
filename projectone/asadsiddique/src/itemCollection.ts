import { todoTask } from "./todoTask";

export class itemCollection {
  private nextTaskId: number = 1;
  private itemMap = new Map<number, todoTask>();

  public constructor(public userName: string, public items: todoTask[] = []) {
    this.items.forEach((item) => this.itemMap.set(item.id, item));
  }

  public addTodo(task: string): void {
    let todo: todoTask = new todoTask(++this.nextTaskId, task, false);
    // this.nextTaskId++;
    this.items.push(todo);
    this.itemMap.set(this.nextTaskId, todo);
    // console.log("VAlues: ",this.itemMap.values())
  }

  public getTodoById(taskId: number) {
    return this.itemMap.get(taskId);
  }

  public getTodoItems(isCompleted: boolean): todoTask[] {
    return [...this.itemMap.values()].filter(
      (item) => isCompleted || !item.isCompleted
    );
  }

  public removeCompletedTask() {
    this.itemMap.forEach((item) => {
      if (item.isCompleted) {
        this.itemMap.delete(item.id);
      }
    });
  }

  public isCompleted(tsakId: number): void {
    let completed: todoTask = this.items.find((item) => item.id === tsakId);
    completed.isCompleted = true;
  }

  public printDetails(): void {
    this.items.forEach((item) => console.log(item.printDetails()));
  }
}
