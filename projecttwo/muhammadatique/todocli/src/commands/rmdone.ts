import {Command, flags} from '@oclif/command'
import { removeDone } from '../db'
export default class Rmdone extends Command {
  static description = 'Remove all completed'

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(Rmdone)

    removeDone()
  }
}
