// imports
import { Command, flags } from "@oclif/command";
import { TodoItem } from "../TodoData/todoItem";
import { TodoCollection } from "../TodoData/todoCollection";
import { JsonTodoCollection } from "../TodoData/jsonTodoCollection";
import Table = require("cli-table");
let chalk = require("chalk");

export default class List extends Command {
  // Description for the command
  static description = "Display list of all / incomplete todos";

  // Flag defination for the command
  static flags = {
    help: flags.help({ char: "h" }),
    mask: flags.boolean({
      char: "m",
      description: "Hide completed Todos",
    }),
  };

  // Command Function
  async run() {
    const { flags } = this.parse(List);

    // list of todos and in case there is no data in Json file and collection of todos
    let todos: TodoItem[] = [];
    let collection: TodoCollection = new JsonTodoCollection(todos);

    // Initilize table
    const table1 = new Table({
      // Table Heading
      head: [
        chalk.blueBright("Id"),
        chalk.blueBright("Todo"),
        chalk.blueBright("Completed"),
      ],
    });
    // Check if there are any todos in the storage
    // If no todos in the list
    if (collection.getItemCounts().total == 0) {
      // Title
      console.log(chalk.bgMagentaBright("Todo List"));
      table1.push(["---", "There is no Todo in the List", "---"]);
    }
    // if todos in the list
    else {
      // Check for flag to show or hide complted todos
      // If completed list to be displayed
      if (!flags.mask) {
        // Title
        console.log(chalk.bgMagentaBright("Complete Todo List"));
        collection
          .getTodoItems(true)
          .forEach((item) =>
            table1.push([
              item.id,
              item.task,
              item.complete ? chalk.green("Yes") : chalk.red("No"),
            ])
          );
      }
      // list by hiding completed todos
      else {
        // Title
        console.log(chalk.bgMagentaBright("List with completed todos hidden"));
        collection
          .getTodoItems(false)
          .forEach((item) =>
            table1.push([
              item.id,
              item.task,
              item.complete ? chalk.green("Yes") : chalk.red("No"),
            ])
          );
      }
    }
    // Display table
    this.log(table1.toString());
  }
}