import {Command, flags} from '@oclif/command'
import chalk from 'chalk'
import todoAPI from '../api/todoAPI'

export default class Add extends Command {
  static description = 'Add a new todo item'

  static flags = {
    done: flags.boolean({char: 'd'})
  }

  static args = [{name: 'todo'}]

  async run() {
    const {args, flags} = this.parse(Add)
    const todo = args.todo

    if(todo) {
      if(flags.done) {
        todoAPI.add(todo, true)
      } else {
        todoAPI.add(todo)
      }
      
      this.log(`${chalk.green('[Success]')} Added new todo: ${todo}`)
    } else {
      this.error(chalk.red('Please specify a todo item'))
    }
  }
}