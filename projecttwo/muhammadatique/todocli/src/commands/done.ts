import {Command, flags} from '@oclif/command'
import { taskDone } from '../db'
import chalk = require('chalk')

export default class Done extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'id'}]

  async run() {
    const {args, flags} = this.parse(Done)
    const id = args.id
    console.clear()
    taskDone(id)
    
  }
}
