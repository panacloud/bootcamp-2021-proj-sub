import {Command, flags} from '@oclif/command'
import chalk from 'chalk'
import TodoAPI from '../api/todoAPI'
const Table = require('cli-table')


export default class Add extends Command {
  static description = 'Add new todo item here.'

  static args = [{name: 'todo'}]

  async run() {
    const {args} = this.parse(Add)      // What is this line doing?

    const todo = args.todo

    if (todo) {
      TodoAPI.add(todo)
      this.log(`${chalk.green('[Success]')} Added new todo:  ${todo}`)
    } else {
      this.error(chalk.red('please specify the new todo'))

    }
  }
}
