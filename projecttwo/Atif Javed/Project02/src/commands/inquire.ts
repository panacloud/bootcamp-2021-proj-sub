// imports
import { Command, flags } from "@oclif/command";
import { TodoItem } from "../TodoData/todoItem";
import { TodoCollection } from "../TodoData/todoCollection";
import { JsonTodoCollection } from "../TodoData/jsonTodoCollection";
let chalk = require("chalk");
import Table = require("cli-table");
import * as inquirer from "inquirer";

export default class Inquire extends Command {
  // Description for the command
  static description = "Use App with prompting for user inputs";

  // Flag defination for the command
  static flags = {
    help: flags.help({ char: "h" }),
  };

  // Command Function
  async run() {
    this.parse(Inquire);

    // list of todos and in case there is no data in Json file and collection of todos
    let todos: TodoItem[] = [];
    let collection: TodoCollection = new JsonTodoCollection(todos);

    // For displaying completed tasks
    let showCompleted: boolean = true;

    // Function to display ToDo list, this function will be used with inquirer
    const displayTodoList = (): void => {
      // Initilize table
      const table1 = new Table({
        // Table Heading
        head: [
          chalk.blueBright("Id"),
          chalk.blueBright("Todo"),
          chalk.blueBright("Completed"),
        ],
      });
      // Title
      console.log(chalk.bgMagentaBright("Todo List"));
      // Check if there are any todos in the storage
      // If no todos in the list
      if (collection.getItemCounts().total == 0) {
        table1.push(["---", "There is no Todo in the List", "---"]);
      } else {
        collection
          .getTodoItems(showCompleted)
          .forEach((item) =>
            table1.push([
              item.id,
              item.task,
              item.complete ? chalk.green("Yes") : chalk.red("No"),
            ])
          );
      }
      // Display table
      this.log(table1.toString());
    };

    // Commands to be displayed in the command prompt
    enum Commands {
      Add = "Add New Task",
      Toggle = "Show/Hide Completed",
      Complete = "Complete Task",
      Purge = "Remove Completed Tasks",
      Quit = "Quit",
    }

    // Function to add new task from promp window
    function promptAdd(): void {
      console.clear();
      inquirer
        .prompt({
          type: "input",
          name: "add",
          message: `${chalk.blue("Enter task:")}`,
        })
        .then((answers) => {
          if (answers["add"] !== "") {
            collection.addTodo(answers["add"]);
          }
          promptUser();
        });
    }

    // Function mark a task as completed/incomplete
    function promptComplete(): void {
      console.clear();
      inquirer
        .prompt({
          type: "checkbox",
          name: "complete",
          message: `${chalk.green("Mark Tasks Complete")}`,
          choices: collection.getTodoItems(showCompleted).map((item) => ({
            name: item.task,
            value: item.id,
            checked: item.complete,
          })),
        })
        .then((answers) => {
          let completedTasks = answers["complete"] as number[];
          collection
            .getTodoItems(true)
            .forEach((item) =>
              collection.markComplete(
                item.id,
                completedTasks.find((id) => id === item.id) != undefined
              )
            );
          promptUser();
        });
    }

    // function to take input from user
    function promptUser(): void {
      console.clear();
      displayTodoList();
      inquirer
        .prompt({
          type: "list",
          name: "command",
          message: "Choose option",
          choices: Object.values(Commands),
        })
        .then((answers) => {
          switch (answers["command"]) {
            // In case we select toggle b/w show and hide completed
            case Commands.Toggle:
              showCompleted = !showCompleted;
              promptUser();
              break;
            // Case for adding new task
            case Commands.Add:
              promptAdd();
              break;
            // Case for marking a task as complete
            case Commands.Complete:
              if (collection.getItemCounts().incomplete > 0) {
                promptComplete();
              } else {
                promptUser();
              }
              break;
            // Case for removing completed tasks
            case Commands.Purge:
              collection.removeComplete();
              promptUser();
              break;
          }
        });
    }
    promptUser();
  }
}