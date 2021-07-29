import { TodoItem } from "./todoItem";
import {TodoCollection} from "./todoCollection";

let list1 : TodoCollection = new TodoCollection();
let list2 : TodoCollection = new TodoCollection();

list1.addTodo("Buy Mango");
list1.addTodo("Get Haircut");
list1.taskDone(2);
list1.printAll();

list2.addTodo("Ride Motorbike");
list2.addTodo("Eat Meal");
list2.taskDone(2);
list2.printAll();

list1.getTodoItems(true).forEach(item => item.printDetails());
