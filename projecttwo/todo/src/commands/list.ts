import {Command, flags} from '@oclif/command'
import todoAPI from '../api/todoAPI'
import chalk from 'chalk'
const Table = require('cli-table')


export default class List extends Command {
  static description = 'Displays all Tasks'

  async run() {
    const table = new Table( {
      head: [
        'Index',
        'Task',
        'Status'
      ]
    })

    const todos = todoAPI.list()
    for (let i = 0; i < todos.length;i++) {
      const todo = todos[i]
      const status = todo.done ? chalk.green('done'): chalk.red('not done')
      table.push([i, todo.task, status])
    }
    this.log(table.toString())
  }
}