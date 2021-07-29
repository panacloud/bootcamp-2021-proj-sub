import { TodoItem } from "./todoItem";
type ItemsCount = {
  total: number;
  incomplete: number;
};

export class TodoCollection {
  private itemId: number = 1;
  protected itemMap = new Map<number, TodoItem>();

  constructor(public userName: string, public todoItems: TodoItem[] = []) {
    this.todoItems.forEach((item) => this.itemMap.set(item.id, item));
  }

  getItemsCount(): ItemsCount {
    return {
      total: this.itemMap.size,
      incomplete: this.getTodoItems(false).length,
    };
  }

  removeComplete() {
    this.itemMap.forEach((item) => {
      if (item.complete) this.itemMap.delete(item.id);
    });
  }

  getTodoItems(inculdeComplete: boolean): TodoItem[] {
    return [...this.itemMap.values()].filter(
      (item) => !item.complete || inculdeComplete
    );
  }

  addTodo(task: string): number {
    while (this.getTodoById(this.itemId)) {
      this.itemId++;
    }
    this.itemMap.set(this.itemId, new TodoItem(this.itemId, task));
    return this.itemId;
  }

  getTodoById(id: number): TodoItem {
    return this.itemMap.get(id);
  }

  markComplete(id: number, complete: boolean) {
    const item = this.getTodoById(id);
    if (item) {
      item.complete = complete;
    }
  }

}
