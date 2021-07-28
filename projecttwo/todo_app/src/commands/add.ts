import {Command} from '@oclif/command'
import chalk from 'chalk'
import todoAPI from '../api/todo-api'

export default class Add extends Command {
  static description = 'Add new todo to list'

  static args = [{name: 'todo'}]

  async run() {
    const {args} = this.parse(Add)
    const todo   = args.todo
    if (todo) {
      todoAPI.add(todo)
      this.log(`${chalk.green('[Success]')} Added new todo: ${todo}`)
    } else {
      this.error(chalk.red('please specify the new todo'))
    }
  }
}
