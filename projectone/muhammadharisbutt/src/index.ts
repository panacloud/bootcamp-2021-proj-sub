import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";

let todos :TodoItem[] = [
    new TodoItem(1,"Buy Flowers"),
    new TodoItem(2,"Get Shoes"),
    new TodoItem(3,"COllect Tickets"),
    new TodoItem(4,"Call Joe",true),
]

let collection : TodoCollection = new TodoCollection("Haris",todos)

console.clear();
console.log(`${collection.userName}'s Todo List`);

let newId:number  = collection.addTodo("Go for run");
let todoItem: TodoItem = collection.getTodoById(newId);
console.log(JSON.stringify(todoItem));