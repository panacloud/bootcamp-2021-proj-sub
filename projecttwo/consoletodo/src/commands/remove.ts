import {Command, flags} from '@oclif/command'

import {Todo} from './../db'

export default class Remove extends Command {
  static description = `Removes a task by id
  ...
  Removes a task permanently from database by id
  `

  static flags = {
    id: flags.string({description: 'id of the task', required: true}),
  }

  async run() {
    const {flags: {id}} = this.parse(Remove)

    const res = await Todo.remove({id: parseInt(id, 10)}).write()

    this.log(res as any)
  }
}
