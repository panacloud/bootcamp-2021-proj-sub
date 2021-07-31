import { Command, flags } from "@oclif/command";
import chalk from "chalk";
import todoAPI from '../api/todoAPI';


export default class Add extends Command {
  static description = "add a new todo";

  static args = [{ name: "todo" }];

  static flags = {
    done:  flags.boolean({char: 'd'})
  };

  async run() {
    const { args, flags } = this.parse(Add);

    const todo = args.todo;
    if (todo) {
      if (flags.done) {
      todoAPI.add(todo, true);
    }
      else{
        todoAPI.add(todo);
      }  
      this.log(`${chalk.green("[Success]")} New todo added: ${todo}`);
    } else {
      this.error(chalk.red("Please specify a new todo"));
    }
  }
}
