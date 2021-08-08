import { TodoCollection } from "./todoCollection";

let list: TodoCollection = new TodoCollection()

list.addTodos("Buy Mango")
list.addTodos("Buy Apple")
list.addTodos("Complete Home Work")

list.printSelectedItem(3)
list.taskDone(1)
list.EditTask(2, "Buy Banana")
list.printAll()