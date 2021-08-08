import {Command} from '@oclif/command'
import chalk from 'chalk'

import {Todo} from './../db'

export default class Show extends Command {
  static description = `Shows existing tasks
  ...
  Shows all the tasks sorted by their ids
  `

  async run() {
    const res = await Todo.sortBy('id').value()
    res.forEach(({id, task, done}: any) => {
      this.log(
        `
          ${chalk.magenta(id)} ${
            done ? chalk.green('DONE') : chalk.yellowBright('NOT DONE')
          } : ${task}
        `
      )
    })
  }
}
