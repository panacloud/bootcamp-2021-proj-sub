import { Command, flags } from "@oclif/command";
import { collection } from "../index";

export default class Remove extends Command {
  static description = "remove todo";

  static flags = {
    help: flags.help({ char: "h" }),
  };

  static args = [{ name: "id", parse: (input: any) => Number(input) }];

  async run() {
    const { args, flags } = this.parse(Remove);

    if (!args.id) this.error("argument id is required!");

    try {
      await collection.removeTodo(args.id);
    } catch (error) {
      this.error("error while removing todo !");
    }
  }
}
