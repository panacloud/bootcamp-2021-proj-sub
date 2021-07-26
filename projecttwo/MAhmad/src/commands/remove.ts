import { Command } from '@oclif/command'
import chalk from 'chalk'
import todoAPI from '../api/todoAPI'

export default class Remove extends Command {
  static description = 'Remove a todo from list'

  static args = [{ name: 'index' }]

  static examples = [`
$ checkme remove 0
[Success] Removed todo: a new todo
`, `
$ checkme remove
›   Error: please specify the todo's index
`]

  async run() {
    const { args } = this.parse(Remove)

    const index = args.index
    if (index) {
      try {
        const todo = todoAPI.get(index).todo
        todoAPI.remove(index)
        this.log(`${chalk.green('[Success]')} Removed todo: ${todo}`)
      } catch (error) {
        this.log(`${chalk.red('[Error]')} ${chalk.redBright('Index out of range')}`)
      }
    } else {
      this.error(chalk.red('please specify the todo\'s index'))
    }
  }
}