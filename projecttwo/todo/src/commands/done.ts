import {Command} from '@oclif/command'
import chalk from 'chalk'
import todoAPI from '../api/todoAPI'

export default class Done extends Command {
  
  static description = 'Marks a task complete'

  static args = [{name: 'index'}]

  async run() {
    const {args} = this.parse(Done)

    const index = args.index

    if (index) {
      const task = todoAPI.get(index).task
      todoAPI.done(index)
      this.log(`${chalk.green('[Success]')} marked task: ${task}, complete`)
    } else {
      this.error(chalk.red('please specify the todo\'s index'))
    }
  }
}