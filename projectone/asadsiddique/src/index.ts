import { itemCollection } from "./itemCollection";
import {todoTask} from "./todoTask";

let col_1 = new itemCollection("Asad");

col_1.addTodo("Project is in Pending...");
col_1.addTodo("Project Still in Pending");
col_1.addTodo("is Done Now?");

col_1.isCompleted(2);
col_1.isCompleted(3);
// Remove Completed Task
col_1.removeCompletedTask()

console.log(col_1.userName, "Todo's List" )
// Getting Completed Task
col_1.getTodoItems(true).forEach(item=>item.printDetails())




// // let todo = col_1.getTodoById(1);
// // console.log(todo)
// col_1.printDetails();

// let item1 = new itemTodo(1, "Completed First Task", false);

// item1.printDetails();
