import {Command, flags} from '@oclif/command'
import { delTask } from '../db'

export default class Del extends Command {
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
    const {args, flags} = this.parse(Del)
    const id:number = args.id
    delTask(id)
    
  }
}
