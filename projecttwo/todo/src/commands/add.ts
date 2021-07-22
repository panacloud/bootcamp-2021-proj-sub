import {Command, flags} from '@oclif/command'
import chalk from 'chalk'

export default class Add extends Command {
  static description = 'Add new todo item here.'

  static args = [{name: 'todo'}]

  async run() {
    const {args} = this.parse(Add)

    const todo = args.todo

    if (todo) {
      this.log(`${chalk.green('[Success]')} added new todo:  ${todo}`)
    } else {
      this.error(chalk.red('please specify the new todo'))

    }
  }
}
