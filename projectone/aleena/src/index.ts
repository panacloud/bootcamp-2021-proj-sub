import { TodoItem } from "./todoitem";
import { TodoCollection } from "./todocollection";
let todos: TodoItem[] = [
new TodoItem(1, "Buy mangos"), new TodoItem(2, "get sleep"),
new TodoItem(3, "Collect fruits"), new TodoItem(4, "Call bata", true)];
let collection: TodoCollection = new TodoCollection("Hassans", todos);
console.clear();
console.log(`${collection.userName}'s Todo List `
+ `(${ collection.getItemCounts().incomplete } items to do)`);
collection.getTodoItems(true).forEach(item => item.printDetails()); 
