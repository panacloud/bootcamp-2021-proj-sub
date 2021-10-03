import {TodoCollection} from './todocollection';
import { TodoItem } from "./todoitems";

let todos = [
    new TodoItem(1, "Buy Flowers"), new TodoItem(2, "Get Shoes"),
    new TodoItem(3, "Collect Tickets"), new TodoItem(4, "Call Joe", true)
];

let collection = new TodoCollection("Adam", todos);

console.log(`${collection.username}'s todos list!'`)

console.log(JSON.stringify(collection.getTodoById(2)));