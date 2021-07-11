import {Command} from '@oclif/command'
import chalk from 'chalk'

import {Todo} from '../todos'

export default class Print extends Command {
  static description = "Prints all exisiting todos"

  async run() {
    const res = await Todo.value()
    res.forEach(({id, task, done}) => {
      this.log(
        `${chalk.cyanBright(id)} ${ done ? chalk.green('Completed') : chalk.red('Not completed')} : ${task}`
      )
    })
  }
}