import { TodoCollection } from "./todo_collection";

let list : TodoCollection = new TodoCollection();
list.addTodo("Buy Typescript Book")
list.addTodo("Buy Python Book")
list.addTodo("Learn AWS")
list.taskDone(2)
list.printAll()