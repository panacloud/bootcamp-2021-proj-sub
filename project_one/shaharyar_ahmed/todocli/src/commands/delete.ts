import {Command, flags} from '@oclif/command'

import {Todo} from './../todos'

export default class Remove extends Command {
  static description = "Removes a todo by ID"

  static flags = {
    id: flags.string({description: "id of the task", required: true})
  }

  async run() {
    const {flags: {id}} = this.parse(Remove)

    const res = await Todo.remove({id}).write()

    this.log("Removed task")
  }
}