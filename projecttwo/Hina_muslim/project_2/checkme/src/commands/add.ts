// import {Command} from '@oclif/command'
// import todoAPI from '../api/todoAPI'
// import chalk from 'chalk'
// const Table  = require('cli-table')

// export default class List extends Command {
//   static description = 'Print out all todos'

//   async run() {
//     const table = new Table({
//       head: [
//         chalk.blueBright('index'),
//         chalk.blueBright('todo'),
//         chalk.blueBright('status')
//       ]
//     });
//     const todos = todoAPI.list()
//     for (let i = 0; i < todos.length; i++) {
//       const todo = todos[i]
//       const status = todo.done ? chalk.green('done') : chalk.red('not done')
//       table.push([ i, todo.todo, status ])
//     }
//     this.log(table.toString())
//   }
// }


// import {Command} from '@oclif/command'
// import todoAPI from '../api/todoAPI'
// import chalk from 'chalk'
// const Table  = require('cli-table')

// export default class List extends Command {
//   static description = 'Print out all todos'

//   async run() {
//     const table = new Table({
//       head: [
//         chalk.blueBright('index'),
//         chalk.blueBright('todo'),
//         chalk.blueBright('status')
//       ]
//     });
//     const todos = todoAPI.list()
//     for (let i = 0; i < todos.length; i++) {
//       const todo = todos[i]
//       const status = todo.done ? chalk.green('done') : chalk.red('not done')
//       table.push([ i, todo.todo, status ])
//     }
//     this.log(table.toString())
//   }
// }


import {Command, flags} from '@oclif/command'
import chalk from 'chalk'
import todoAPI from '../api/todoAPI'

export default class Add extends Command {
  static description = 'Add new todo to list'

  static args = [{name: 'todo'}]

  static flags = {
    done: flags.boolean({ char: 'd' })
  }

  async run() {
    const {args, flags} = this.parse(Add)
    const todo   = args.todo
    if (todo) {
      if (flags.done) {
        todoAPI.add(todo)
      } else {
        todoAPI.add(todo)
      }
      this.log(`${chalk.green('[Success]')} Added new todo: ${todo}`)
    } else {
      this.error(chalk.red('please specify the new todo'))
    }
  }
}









