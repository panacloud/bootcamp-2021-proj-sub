// Imports
import { Command, flags } from "@oclif/command";
import { TodoItem } from "../dataModels/todoItem";
import { TodoCollection } from "../dataModels/todoCollection";
import { JsonTodoCollection } from "../dataModels/jsonTodoCollection";
import chalk = require("chalk");

export default class Add extends Command {
  // Description for the command
  static description = "Add new todo to list/collection";

  // Flag and Arguments defination for the command
  static flags = {
    help: flags.help({ char: "h" }),
  };
  static args = [{ name: "todo" }];

  // Command Function
  async run() {
    // list of todos and in case there is no data in Json file and collection of todos
    let todos: TodoItem[] = [];
    let collection: TodoCollection = new JsonTodoCollection(todos);

    // Parsing data from commad argument
    const { args } = this.parse(Add);
    const todo = args.todo;

    // Check if todo provided in the argumennt or not
    // If argument provided
    if (todo) {
      this.log(
        chalk.green("[Success]"),
        "Added new todo:",
        chalk.blue(`${todo}`)
      );
      collection.addTodo(todo);
    }
    // if no argument provided
    else {
      this.error(chalk.red("Please specify the new todo"));
    }
  }
}
