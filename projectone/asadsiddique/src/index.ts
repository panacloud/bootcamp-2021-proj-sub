// import { itemTodo } from "./itemTodo";
import { itemCollection } from "./itemCollection";

let col_1 = new itemCollection();

col_1.addTodo("Project is in Pending...");
col_1.addTodo("Project Still in Pending");
col_1.addTodo("is Done Now?");

col_1.isCompleted(2);
col_1.isCompleted(3);

col_1.printDetails();

// let item1 = new itemTodo(1, "Completed First Task", false);

// item1.printDetails();
