import {Command, flags} from '@oclif/command'

import {Todo} from './../db'

export default class Update extends Command {
  static description = `Marks a task as done
  ...
  Marks a task as done
  `

  static flags = {
    id: flags.string({description: 'id of the task', required: true}),
  }

  async run() {
    const {flags: {id}} = this.parse(Update)

    const res = await Todo.find({id: parseInt(id, 10)})
    .assign({done: true})
    .write()

    this.log(res as any)
  }
}
