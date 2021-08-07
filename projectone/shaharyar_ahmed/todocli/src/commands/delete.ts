import {Command, flags} from '@oclif/command'

import {DataHandler} from '../utils'

export default class Remove extends Command {
  static description = "Removes a todo"

  static flags = {
    todo: flags.string({char: 't', description: "name of the todo", required: true})
  }

  async run() {
    const {flags} = this.parse(Remove)

    try {
      DataHandler.db.delete(`${flags.todo}`)
    } catch (error) {
      throw new Error('Todo does not exist')
    }
    this.log("Removed todo")
  }
}
