import {Command} from '@oclif/command'
import todoAPI from '../api/todoAPI'
import chalk from 'chalk'

const Table = require('cli-table')

export default class List extends Command {
  static description = 'List all the todo items'

  async run() {
    const table = new Table({
      head: [
        chalk.blueBright('index'),
        chalk.blueBright('todo'),
        chalk.blueBright('status')
      ]
    })

    const todos = todoAPI.list()

    for(let i = 0; i < todos.length; i++) {
      
      const todo = todos[i]
      const status = todo.done ? chalk.green('done') : chalk.red('not done')
      table.push([i, todo.todo, status])
    }

    if(todos.length > 0) {
      this.log(table.toString())
    } else {
      this.log(chalk.green('Nothing left to do. Add some!'))
    }
  }
}
