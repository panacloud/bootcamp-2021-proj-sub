import {Command, flags} from '@oclif/command'
import chalk from 'chalk'
import todoAPI from '../api/todoAPI'

export default class Add extends Command {
  static description = 'Add new todo to list'

  static args = [{name: 'todo'}]

  static flags = {
    done: flags.boolean({ char: 'd', description: 'mark todo as done'})
  }

  static examples = [`
$ checkme add "a new todo"
[Success] Added new todo: a new todo
`,`
$ checkme add
›   Error: please specify the new todo
`]

  async run() {
    const {args, flags} = this.parse(Add)
    const todo   = args.todo
    if (todo) {
      if (flags.done) {
        todoAPI.add(todo, true)
      } else {
        todoAPI.add(todo)
      }
      this.log(`${chalk.green('[Success]')} Added new todo: ${todo}`)
    } else {
      this.error(chalk.red('please specify the new todo'))
    }
  }
}