import {Command, flags} from '@oclif/command'

import {DataHandler} from '../utils'

export default class Completed extends Command {
  static description = "Assigns todo as completed"

  static flags = {
    todo: flags.string({char: 't', description: 'name of the todo', required: true}),
  }

  async run() {
    const {flags} = this.parse(Completed)
    
    try {
      DataHandler.db.push(`/${flags.todo}`, {done: true}, false)
    } catch (error) {
      throw Error('Todo does not exist')
    }

    this.log(`Assigned todo as completed`)

  }
}
