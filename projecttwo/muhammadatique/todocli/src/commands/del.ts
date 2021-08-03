import {Command, flags} from '@oclif/command'
import { Todos } from '../db'

export default class Del extends Command {
  static description = 'describe the command here'

  static description = 'it will change the status of task to done'

  
  static args = [
    {name: 'id'}
]

  async run() {
    const {args} = this.parse(Del)
    const id = args.id
 

    const res = await Todos.remove({id: parseInt(id, 10)}).write()
      this.log(`Task ${id} is Removed`)
  }
}
