import { Command, flags } from '@oclif/command'
import { integer } from '@oclif/command/lib/flags';
import { collection } from '../todo/TodoAPI';

export default class Complete extends Command {
  static description = 'complete <TaskID> - Mark Task of TaskID complete'

  static flags = {
    id: flags.integer({ char: 'i' }),
  }

  async run() {
    const { flags } = this.parse(Complete)
    if (flags.id) {
      if (collection.completeTask(flags.id)) {
        console.log("task completed");
      } else {
        console.log("invalid id");
      }
    }else{
      console.log("Use following flag(s):\n\
      -i <TaskID>\t complete the task of <TaskID>")
    }
  }
}
