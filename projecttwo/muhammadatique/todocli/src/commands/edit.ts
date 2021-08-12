import {Command, flags} from '@oclif/command'
import { editTask } from '../db'

export default class Edit extends Command {
  static description = 'Edit and update task "required id, task"'

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'id'},{name: 'task'}]

  async run() {
    const {args, flags} = this.parse(Edit)
    const id =args.id
    const task = args.task
    //-----------------------------------------------------------------------function to edit task (just pass id and task)
   editTask(id,task)
  }
}
