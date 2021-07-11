import { TodoItem } from "./todoItem";
import {TodoCollection} from "./todoCollection";

let list : TodoCollection = new TodoCollection();

list.addTodo("Buy Mango");
list.addTodo("Buy Meat");
list.addTodo("Get Haircut");
list.addTodo("Go for a walk");


list.taskDone(2);

list.printAll();


