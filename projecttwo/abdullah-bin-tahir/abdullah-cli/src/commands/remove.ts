import {Command} from '@oclif/command'
import todoAPI from '../api/todoAPI'
import chalk from 'chalk'

export default class Remove extends Command {
  static description = 'remove a todo'

  static args = [{name: 'index'}];

  async run() {
    const {args} = this.parse(Remove);

    const index = (args.index);
    // console.log("index is:", index);
    if (index) {
      const todo = todoAPI.get(index-1).todo;
      todoAPI.remove(index-1);
      this.log(`${chalk.green('[Success]')} Removed todo: ${todo}`);
    } else {
      this.error(chalk.red('Please specify the index for todo to remove'));
    }
  }
}