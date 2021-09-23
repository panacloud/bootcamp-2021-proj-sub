import { Command, flags } from "@oclif/command";
import { collection } from "../index";
import Table = require("cli-table");

export default class List extends Command {
  static description = "list your todos";

  static flags = {
    help: flags.help({ char: "h" }),
  };

  static args = [];

  async run() {
    const { args, flags } = this.parse(List);
    const table = new Table({
      head: ["id", "todo", "complete"],
    });
    try {
      const todos = await collection.listTodos();
      table.push(...todos);
    } catch (error) {
      console.log(error);
    }

    console.log(table.toString());
  }
}
