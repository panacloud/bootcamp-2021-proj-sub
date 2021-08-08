import {Command, flags} from '@oclif/command'

import {Todo} from './../db'

export default class Add extends Command {
  static description = `Adds a new todo
  ...
  Adds a new todo to the existing list
  `

  static flags = {
    task: flags.string({char: 'n', description: 'task'}),
  }

  async run() {
    const {flags: {task}} = this.parse(Add)

    const res = await Todo.push({
      task,
      id: Todo.value().length,
      done: false
    }).write()
    this.log(res)
  }
}
