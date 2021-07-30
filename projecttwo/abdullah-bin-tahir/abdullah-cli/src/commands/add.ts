//* abdullah-cli add [todo] => todo is an arg, no flag is needed
import { Command } from "@oclif/command";
import chalk from "chalk";

export default class Add extends Command {
  static description = "Add a new Todo to the list";

  static args = [{ name: "todo" }];

  async run() {
    const { args } = this.parse(Add);

    const todo = args.todo;
    if (todo) {
      this.log(`${chalk.green("[Success]")} New todo added: ${todo}`);
    } else {
      this.error(chalk.red("Please specify a new todo"));
    }
  }
}
