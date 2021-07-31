import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";
import * as inquirer from 'inquirer';
import { JsonTodoCollection } from "./jsonTodoCollection";
let todos: TodoItem[] = [
new TodoItem(1, "Buy Flowers"), new TodoItem(2, "Get Shoes"),
new TodoItem(3, "Collect Tickets"), new TodoItem(4, "Call Joe", true)];
let collection: TodoCollection = new JsonTodoCollection("Adam", todos);
let showCompleted = true;
