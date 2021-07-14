import { todoItem } from "./todoItem";

type ItemCounts = {
  total: number;
  incomplete: number;
};

export class todoCollection {
  private nextId: number = 1;
  protected itemMap = new Map<number, todoItem>();

  public getItemCounts(): ItemCounts {
    return {
      total: this.itemMap.size,
      incomplete: this.getToDoItems(false).length,
    };
  }

  public constructor(public items: todoItem[] = []) {
    items.forEach((item) => this.itemMap.set(item.id, item));
  }

  public addTodo(task: string): number {
    while (this.getToDoById(this.nextId)) {
      this.nextId++;
    }
    this.itemMap.set(this.nextId, new todoItem(this.nextId, task));
    //this.items.push(new todoItem(this.nextId, task, false));
    return this.nextId;
  }

  public printAll(): void {
    // this.items.forEach((item)=>item.printDetails());
    this.itemMap.forEach((item) => item.printDetails());
  }

  public getToDoById(id: number): todoItem {
    // return this.items.find((item)=>item.id == id);
    return this.itemMap.get(id);
  }

  public markComplete(id: number, complete: boolean): void {
    const item = this.getToDoById(id);
    if (item) {
      item.complete = complete;
    }
    // this.getToDoById(id).complete = true;
  }

  public getToDoItems(includeComplete: boolean): todoItem[] {
    return [...this.itemMap.values()].filter(
      (item) => includeComplete || !item.complete
    );
  }

  public removeComplete(): void {
    this.itemMap.forEach((item) => {
      if (item.complete) {
        this.itemMap.delete(item.id);
      }
    });
  }
}
