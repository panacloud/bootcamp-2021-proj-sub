// imports
import { Command, flags } from "@oclif/command";
import { TodoItem } from "../TodoData/todoItem";
import { TodoCollection } from "../TodoData/todoCollection";
import { JsonTodoCollection } from "../TodoData/jsonTodoCollection";
let chalk = require("chalk");

export default class Togglestatus extends Command {
  // Description for the command
  static description = "Toggle completion status of a Todo by proving its ID.";

  // Flag and argument defination for the command
  static flags = {
    help: flags.help({ char: "h" }),
  };
  static args = [{ name: "id" }];

  // Command Function
  async run() {
    // define todo and collection
    let todos: TodoItem[] = [];
    let collection: TodoCollection = new JsonTodoCollection(todos);

    // parse arguments from the command
    const { args } = this.parse(Togglestatus);
    const id = args.id;

    // check if there is some argument specidies
    // if argument exist
    if (id) {
      // check if argument is a number or not
      // if argument is not a number
      if (isNaN(id)) {
        this.error(
          `${chalk.red("Please specify")} ${chalk.redBright("ID")} ${chalk.red(
            "in"
          )} ${chalk.redBright("Numeric")} ${chalk.red("form.")}`
        );
      }
      // if specified argument is a number
      else {
        // check if there is a todo corresponding to given ID
        // if todo doesn't exist
        if (collection.getTodoById(parseInt(id)) == undefined) {
          this.error(
            `${chalk.red("This")} ${chalk.redBright("ID")} ${chalk.red(
              "don't correspond to any Todo."
            )} ${chalk.red("Please specify correct")} ${chalk.redBright(
              "ID"
            )}${chalk.red(".")}`
          );
        }
        // if todo exist against specified ID
        else {
          // check current status of the todo
          // if current status is complete
          if (collection.getTodoById(parseInt(id))?.complete) {
            collection.markComplete(parseInt(id), false);
            this.log(
              `${chalk.green("[Success]")} status of ${chalk.blue(
                collection.getTodoById(parseInt(id))?.task
              )} is changed to ${chalk.redBright("InComplete")}.`
            );
          }
          // if current status is in-complete
          else {
            collection.markComplete(parseInt(id), true);
            this.log(
              `${chalk.green("[Success]")} status of ${chalk.blue(
                collection.getTodoById(parseInt(id))?.task
              )} is changed to ${chalk.greenBright("Complete")}.`
            );
          }
        }
      }
    }
    // in case no argument specified
    else {
      this.error(
        `${chalk.red("Please specify")} ${chalk.redBright("ID")} ${chalk.red(
          "of a todo to toggle status."
        )}`
      );
    }
  }
}