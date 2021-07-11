import { TodoItem } from "./classes/TodoItem";
import { TodoCollection } from "./classes/TodoCollection";

let todoList: TodoCollection = new TodoCollection();

todoList.addTodo("Task 1");
todoList.addTodo("Task 2");
todoList.addTodo("Task 3");

todoList.taskDone(2);

console.log("All Completed:");
todoList.printAll(true);
console.log("All Incompleted:");
todoList.printAll(false);
console.log("All Items:");
todoList.printAll();