import { Command, flags } from '@oclif/command'
import todoAPI from '../api/todoAPI'
import chalk from 'chalk'
const Table = require('cli-table')

export default class List extends Command {
  static description = 'Print out all todos'

  static flags = {
    done: flags.boolean({ char: 'd', description: 'show done todos' }),
    notDone: flags.boolean({ char: 'n', description: 'show not done todos' })
  }

  async run() {

    const { flags } = this.parse(List)

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

      switch (true) {
        case flags.done && todo.done:
          table.push([
            i,
            todo.todo,
            status
          ])
          break;
        case flags.notDone && !todo.done:
          table.push([
            i,
            todo.todo,
            status
          ])
          break;
        case !flags.done && !flags.notDone:
          table.push([
            i,
            todo.todo,
            status
          ])
      }
    }
    this.log(table.toString())
  }
}