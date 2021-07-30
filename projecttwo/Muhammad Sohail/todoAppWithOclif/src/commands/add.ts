import {Command} from '@oclif/command'

export default class Add extends Command {
  static description = 'Add new todo to list'

  static args = [{name: 'todo'}]

  async run() {
    const {args} = this.parse(Add)
    const todo   = args.todo
    if (todo) {
      this.log(`[Success] Added new todo: ${todo}`)
    } else {
      this.error('please specify the new todo')
    }
  }
}