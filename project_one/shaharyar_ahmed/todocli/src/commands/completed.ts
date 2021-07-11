import {Command, flags} from '@oclif/command'

import {Todo} from './../todos'

export default class Completed extends Command {
  static description = "Assigns todo as completed by ID"

  static flags = {
    id: flags.string({description: 'id of the task', required: true}),
  }

  async run() {
    const {flags: {id}} = this.parse()

    const res = await Todo.find({id: id})
      .assign({done: true})
      .write()

    this.log(`Assigned task as completed`)

  }
}