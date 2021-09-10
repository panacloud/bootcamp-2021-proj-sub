import { TodoCollection } from "./todoCollection";
import { TodoItem } from "./todoItem";
import * as inquirer from "inquirer";
import { JsonTodoCollection } from "./jsonTodoCollection";

let todos: TodoItem[] = [
  new TodoItem(1, "Do Homework", true),
  new TodoItem(2, "Play Football"),
  new TodoItem(3, "Rest a while"),
];

let collection: TodoCollection = new JsonTodoCollection("Arslan", todos);

let showHide = true;

function displayTodoList(): void {
  console.log(
    `${collection.userName}'s Todo List ` +
      `(${collection.getItemCounts().incomplete} items to do)`
  );
  collection.getTodoItems(showHide).forEach((item) => item.printDetails());
}

function promptAdd(): void {
  console.clear();
  inquirer
    .prompt({
      type: "input",
      name: "add",
      message: "Enter task:",
    })
    .then((answers) => {
      if (answers["add"] !== "") {
        collection.addTodo(answers["add"]);
      }
      promptUser();
    });
}

function promptComplete(): void {
  console.clear();
  inquirer
    .prompt({
      type: "checkbox",
      name: "complete",
      message: "Mark tasks as complete",
      choices: collection.getTodoItems(showHide).map((item) => ({
        name: item.task,
        value: item.id,
        checked: item.complete,
      })),
    })
    .then((answers) => {
      let completed = answers["complete"] as number[];
      console.log(completed);
      collection.getTodoItems(true).forEach((item) => {
        collection.markComplete(
          item.id,
          completed.find((id) => id === item.id) !== undefined
        );
      });
      promptUser();
    });
}

enum Commands {
  Add = "Add",
  Complete = "Complete",
  Purge = "Purge",
  Toggle = "Toggle",
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
    })
    .then((answers) => {
      switch (answers.command) {
        case Commands.Toggle:
          showHide = !showHide;
          promptUser();
          break;
        case Commands.Quit:
          break;
        case Commands.Add:
          promptAdd();
          break;
        case Commands.Complete:
          if (collection.getItemCounts().incomplete > 0) {
            promptComplete();
          } else {
            promptUser();
          }
          break;
        case Commands.Purge:
          collection.removeComplete();
          promptUser();
          break;
      }
    });
}

promptUser();
