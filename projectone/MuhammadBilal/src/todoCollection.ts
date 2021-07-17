import { TodoItem } from "./todoItem";
type ItemCounts = {
total: number,
incomplete: number
}export class TodoCollection {
  private nextId: number = 1;
  protected itemMap = new Map<number, TodoItem>();
  constructor(public userName: string, todoItems: TodoItem[] = []) {
  todoItems.forEach(item => this.itemMap.set(item.id, item));
  }
  // ...methods omitted for brevity...
  }