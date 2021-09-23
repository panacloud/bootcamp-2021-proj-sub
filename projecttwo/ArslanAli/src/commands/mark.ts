import { Command, flags } from "@oclif/command";
import { collection } from "../index";

export default class Mark extends Command {
  static description = "Toggle todo status";

  static flags = {
    help: flags.help({ char: "h" }),
  };

  static args = [];

  async run() {
    const { args, flags } = this.parse(Mark);
    collection.mark();
  }
}
