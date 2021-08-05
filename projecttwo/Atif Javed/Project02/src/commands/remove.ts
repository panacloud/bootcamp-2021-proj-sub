// imports
import { Command, flags } from "@oclif/command";
import { TodoItem } from "../TodoData/todoItem";
import { TodoCollection } from "../TodoData/todoCollection";
import { JsonTodoCollection } from "../TodoData/jsonTodoCollection";
// import Table = require("cli-table");
let chalk = require("chalk");

export default class Remove extends Command {
  // Description for the command
  static description = "Remove Completed todos";

  // Flag defination for the command
  static flags = {
    help: flags.help({ char: "h" }),
  };

  // Command Function
  async run() {
    this.parse(Remove);

    // list of todos and in case there is no data in Json file and collection of todos
    let todos: TodoItem[] = [];
    let collection: TodoCollection = new JsonTodoCollection(todos);

    // Check if there are any todos in the list
    // If no todos
    if (collection.getItemCounts().total == 0) {
      this.log(`${chalk.yellow("Message : There are todos in the list.")}`);
    }
    // if list is not empty
    else {
      // check if there are completed tasks or not
      // if no completed tasks
      if (collection.getItemCounts().complete == 0) {
        this.log(
          `${chalk.yellow(
            "Message : There are no completed todos in the list."
          )}`
        );
      }
      // if completed tasks are present
      else {
        collection.removeComplete();
        this.log(
          chalk.green("[Success]"),
          "Completed todos removed from the list."
        );
      }
    }
  }
}