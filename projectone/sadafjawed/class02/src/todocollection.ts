import { TodoItem } from "./todoitem";
export class TodoCollection {
 private nextId: number = 1;
 constructor(public userName: string, public todoItems: TodoItem[] = []) {
 // no statements required
 }
 addTodo(task: string): number {
 while (this.getTodoById(this.nextId)) {
 this.nextId++;
 }
 this.todoItems.push(new TodoItem(this.nextId, task));
 return this.nextId;
 }import { Todoitem } from "./todoitem";
 export class TodoCollection {
  private nextId: number = 1;
  constructor(public userName: string, public todoItems: TodoItem[] = []) {
  // no statements required
  }
  addTodo(task: string): number {
  while (this.getTodoById(this.nextId)) {
  this.nextId++;
  }
  this.todoItems.push(new TodoItem(this.nextId, task));
  return this.nextId;
