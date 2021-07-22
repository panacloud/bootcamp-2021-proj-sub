#!/usr/bin/env node

import {Command, flags} from '@oclif/command'
import todoAPI from '../api/todoAPI'
import chalk from 'chalk'
const table = require('cli-table')


export default class List extends Command {
  static description = 'Displays all Tasks'

  async run() {
    const tables = new table( {
      head: [
        'Index',
        'Task',
        'Done',
      ]
    })

    const todos = todoAPI.show()
    for (let i = 0; i < todos.length;i++) {
      this.log(`${i}`)
      const todo = todos[i]
      const status = todo.done ? chalk.green('done'): chalk.red('not done')
      table.push([ i, todo.task, todo.done ])
      
    }
    this.log(tables.toString())
  }
}