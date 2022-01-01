import {Command, flags} from '@oclif/command'
import { TodoItem } from "../TodoData/todoItem";
import { TodoCollection } from "../TodoData/todoCollection";
import { JsonTodoCollection } from "../TodoData/JsonTodoCollection";
let chalk = require("chalk");

export default class Add extends Command {
  static description = 'Add new todo to list/Collection'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [{name: 'todo'}]

  async run() {
    let todos: TodoItem[] = [];
    let collection: TodoCollection = new JsonTodoCollection(todos);

    const { args } = this.parse(Add);
    const todo = args.todo;

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
