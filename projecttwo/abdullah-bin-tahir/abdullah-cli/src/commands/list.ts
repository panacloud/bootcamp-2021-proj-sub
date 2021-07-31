import {Command} from '@oclif/command'
import todoAPI from '../api/todoAPI'
import chalk from 'chalk'
const Table  = require('cli-table')

export default class List extends Command {
  static description = 'show all todos'

  async run() {
    const table = new Table({
      head: [
        chalk.blueBright('index'),
        chalk.blueBright('todo'),
        chalk.blueBright('status')
      ]
    });

    const todos = todoAPI.list()
    
    for (let i = 0; i < todos.length; i++) {
      const todo = todos[i]
      const status = todo.done ? chalk.green('done') : chalk.red('not done')
      table.push([ i+1, todo.todo, status ])
    }
    this.log(table.toString())
  }
}