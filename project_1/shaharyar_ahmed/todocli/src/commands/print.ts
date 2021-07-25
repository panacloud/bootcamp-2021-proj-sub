import {Command} from '@oclif/command'
import chalk from 'chalk'

import {DataHandler} from '../datahandler'

export default class Print extends Command {
  static description = "Prints all exisiting todos"

  async run() {
    const data = DataHandler.db.getData('/')
    
    for (const todo in data) {
      const todo_data = DataHandler.db.getData(`/${todo}`)
      this.log(
          `${chalk.cyanBright(todo)} ${ todo_data.done ? chalk.green('Completed') : chalk.red('Not completed')}`
      )
    }

  }
}
