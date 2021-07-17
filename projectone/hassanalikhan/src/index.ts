// imports
import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";

// List of Todos - Dummy data
let todos: TodoItem[] = [
  new TodoItem(1, "Go for run", true),
  new TodoItem(2, "Play Cricket", false),
  new TodoItem(5, "Go to Class"),
  new TodoItem(6, "Eat Lunch", true),
];

// Collection of todos
let collection: TodoCollection = new TodoCollection("Hassan", todos);

// Clear console
console.clear();

// Print Collection (Pre defined)
console.log("*** Original Collection ***");
console.log(
  `${collection.userName}'s Todo List \nTotal : ${
    collection.getItemCounts().total
  } \tComplted : ${collection.getItemCounts().complete} \tIncomplete : ${
    collection.getItemCounts().incomplete
  }`
);
collection.printAll();

// add new todo to the collection
// this will return a id of the newly added todo
let newId1: number = collection.addTodo("Watch Movie");
let newId2: number = collection.addTodo("Go to Sleep");

// get todo's by Id
let todoItem1: TodoItem = collection.getTodoById(newId1);
let todoItem2: TodoItem = collection.getTodoById(newId2);

// Print details of todo items fetched by id
console.log("\n*** Todo's fetched by ID ***");
todoItem1.printDetails();
todoItem2.printDetails();

// Print Updated Collection
console.log("\n*** Updated Collection with new todo's ***");
console.log(
  `${collection.userName}'s Todo List \nTotal : ${
    collection.getItemCounts().total
  } \tComplted : ${collection.getItemCounts().complete} \tIncomplete : ${
    collection.getItemCounts().incomplete
  }`
);
collection.printAll();

// Update complete status of todos
collection.markComplete(2, true);
collection.markComplete(6, false);

// Print Updated Collection
console.log("\n*** Updated Collection with Complete Status Changed ***");
console.log(
  `${collection.userName}'s Todo List \nTotal : ${
    collection.getItemCounts().total
  } \tComplted : ${collection.getItemCounts().complete} \tIncomplete : ${
    collection.getItemCounts().incomplete
  }`
);
collection.printAll();

// fetch items based on complete status
console.log("\n*** Get Todo Items based on complete status ***");
console.log(
  `${collection.userName}'s Todo List \nTotal : ${
    collection.getItemCounts().total
  } \tComplted : ${collection.getItemCounts().complete} \tIncomplete : ${
    collection.getItemCounts().incomplete
  }`
);
collection.getTodoItems(true).forEach((item) => item.printDetails());

// Remove completed Items
collection.removeComplete();
console.log("\n*** Updated Collection after completed tasks removed ***");
console.log(
  `${collection.userName}'s Todo List \nTotal : ${
    collection.getItemCounts().total
  } \tComplted : ${collection.getItemCounts().complete} \tIncomplete : ${
    collection.getItemCounts().incomplete
  }`
);
collection.printAll();
