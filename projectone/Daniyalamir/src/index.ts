import {ItemCollection} from "./todocollection";
import { TodoItem } from "./todoitem";
console.clear();
let Grocery: ItemCollection= new ItemCollection();
Grocery.addTodoItems("purchase sabzii");
Grocery.addTodoItems("purchase plates and bowls");
Grocery.addTodoItems("purchase child cloths");

Grocery.taskDone(2);
Grocery.taskDone(3);
Grocery.printDetails();