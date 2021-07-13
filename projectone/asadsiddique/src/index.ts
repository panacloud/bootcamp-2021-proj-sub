import { itemCollection } from "./itemCollection";
import { todoTask } from "./todoTask";
import * as inquirer from "inquirer";

// let col_1 = new itemCollection("Asad");

// col_1.addTodo("Project is in Pending...");
// col_1.addTodo("Project Still in Pending");
// col_1.addTodo("is Done Now?");

// col_1.isCompleted(2);
// col_1.isCompleted(3);
// // Remove Completed Task
// // col_1.removeCompletedTask()

// console.log(col_1.userName, "\nTodo's List: ", `Total Items: ${col_1.getTodoItemsCount().totalItems} \n Completed Items: ${col_1.getTodoItemsCount().isCompletedTask}` )

let todos: todoTask[] = [
  new todoTask(1, "Buy Chicken"),
  new todoTask(2, "Buy IceCream"),
  new todoTask(3, "Buy Cinama Tickets"),
  new todoTask(4, "Call ALi"),
];

let collection: itemCollection = new itemCollection("Adam", todos);

let showCompleted: boolean = true;

function displayTodoList(): void {
  console.log(
    `${collection.userName}'s Todo List` +
      `(${collection.getTodoItemsCount().isCompletedTask} item's to do)` +
      `    ${collection
        .getTodoItems(showCompleted)
        .forEach((item) => item.printDetails())}

    `
  );
}

function promptAdd(): void {
  console.clear();
  inquirer
    .prompt({
      type: "input",
      name: "add",
      message: "Enter Task: ",
    })
    .then((answer) => {
      if (answer["add"] !== "") {
        collection.addTodo(answer["add"]);
      }
      promptUser();
    });
}

function prompComplete(): void {
  console.clear();
  inquirer
    .prompt({
      type: "checkbox",
      name: "complete",
      message: "Mark Task Complete",
      choices: collection.getTodoItems(showCompleted).map((item) => ({
        name: item.task,
        value: item.id,
        checked: item.isCompleted,
      })),
    })
    .then((answer) => {
      let completedTasks = answer["complete"] as number[];
      collection
        .getTodoItems(true)
        .forEach((item) =>
          collection.isCompleted(
            item.id,
            completedTasks.find((id) => id === item.id) != undefined
          )
        );
      promptUser();
    });
}

enum Commands {
  Add = "Add new Task",
  Complete = "Complete Task",
  Purge = "Remove Completed Tasks",
  Toggle = "Show/Hide Completed",
  Quit = "Quit",
}

function promptUser(): void {
  console.clear();
  displayTodoList();
  inquirer
    .prompt({
      type: "list",
      name: "command",
      message: "Choose Option",
      choices: Object.values(Commands),
      //   badProperty: true,
    })
    .then((answer) => {
      switch (answer["command"]) {
        case Commands.Toggle:
          showCompleted = !showCompleted;
          promptUser();
          break;
        case Commands.Add:
          promptAdd();
          break;
        case Commands.Complete:
          if (collection.getTodoItemsCount().isCompletedTask > 0) {
            prompComplete();
          } else {
            promptUser();
          }
          break;
        case Commands.Purge:
          collection.removeCompletedTask();
          promptUser();
          break;
      }
    });
}

promptUser();

// Getting Completed Task
// col_1.getTodoItems(true).forEach(item=>item.printDetails())

// // let todo = col_1.getTodoById(1);
// // console.log(todo)
// col_1.printDetails();

// let item1 = new itemTodo(1, "Completed First Task", false);

// item1.printDetails();
