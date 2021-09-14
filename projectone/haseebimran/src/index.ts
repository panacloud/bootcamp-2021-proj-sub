import { Todoitem } from "./todoItem";
import { todocollection } from "./todoCollection";

let todos: Todoitem[] = [
 new Todoitem(1, "Prayer Namaz"), new Todoitem(2, "Get Shoes"),
 new Todoitem(3, "Do Coding"), new Todoitem(4, "Call Ahmed RAZA", true)];

let collection: todocollection = new todocollection("Haseeb", todos);
console.clear();
console.log(`${collection.userName}'s Todo List`);
//collection.addTodo(todoItem);
collection.getTodoItems(true).forEach(item => item.printDetails());

//collection.addTodo(todoItem);
/*
addTodo(task: string): number {
    while (this.getTodoById(this.nextId)) {
    this.nextId++;
    }
    this.todoItems.push(new TodoItem(this.nextId, task));
    return this.nextId;
   }
*/
