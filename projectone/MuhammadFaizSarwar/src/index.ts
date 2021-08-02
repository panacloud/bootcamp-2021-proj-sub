// console.clear();
// console.log("hello");

// import { TodoItem } from "./todoItem";
// import { TodoCollection } from "./todocollections";

// let todos = [
//     new TodoItem(1, "Buy Flowers"), new TodoItem(2, "Get Shoes"),
//     new TodoItem(3, "Collect Tickets"), new TodoItem(4, "Call Joe", true)];

// let collection = new TodoCollection("Adam", todos);
// console.clear();
// console.log(`${collection.userName}'s Todo List`);
// let newId = collection.addTodo("Go for run");
// let todoItem = collection.getTodoById(newId);
// // console.log(JSON.stringify(todoItem)); // shows last todo item in the list
// todoItem.printDetails();

// collection.addTodo(todoItem);  // error here fn accepts string not object


//updating file
import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todocollections";
let todos: TodoItem[] = [
    new TodoItem(1, "Buy Flowers"), new TodoItem(2, "Get Shoes"),
    new TodoItem(3, "Collect Tickets"), new TodoItem(4, "Call Joe", true)];
let collection: TodoCollection = new TodoCollection("Adam", todos);
console.clear();
console.log(`${collection.userName}'s Todo List`);
collection.removeComplete();                                                    // removing completed items
collection.getTodoItems(true).forEach(item => item.printDetails());