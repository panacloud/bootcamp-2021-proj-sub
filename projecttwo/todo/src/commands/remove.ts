import {Command} from '@oclif/command'
import chalk from 'chalk'
import todoAPI from '../api/todoAPI'

export default class Remove extends Command {
  
  static description = 'Remove a todo from list'

  static args = [{name: 'index'}]

  async run() {
    const {args} = this.parse(Remove)

    const index = args.index

    if (index) {
      const task = todoAPI.get(index).task
      todoAPI.remove(index)
      this.log(`${chalk.green('[Success]')} Removed todo: ${task}`)
    } else {
      this.error(chalk.red('please specify the todo\'s index'))
    }
  }
}