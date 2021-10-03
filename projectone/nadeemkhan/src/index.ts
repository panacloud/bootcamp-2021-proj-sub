import {TodoCollection} from './todocollection';
import { TodoItem } from "./todoitems";

let todos: TodoItem[] = [
    new TodoItem(1, "Buy Flowers"), new TodoItem(2, "Get Shoes"),
    new TodoItem(3, "Collect Tickets"), new TodoItem(4, "Call Joe", true)
];

let collection: TodoCollection = new TodoCollection("Adam", todos);

console.log(`${collection.username}'s todos list!'`)

collection.getTodoItems(true).forEach(item=> item.printDetails());
collection.removeComplete()
collection.getTodoItems(true).forEach(item=> item.printDetails());