import { Command, flags } from "@oclif/command";
import { collection } from "../index";

export default class Add extends Command {
  static description = "add more todos";

  static flags = {
    help: flags.help({ char: "h" }),
  };

  static args = [{ name: "todo", required: true }];

  async run() {
    const { args, flags } = this.parse(Add);

    if (args.todo) {
      await collection.addTodo(args.todo);
    }
  }
}
