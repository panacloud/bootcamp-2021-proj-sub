import {Command, flags} from '@oclif/command'
import { Todos } from '../db'

export default class Edit extends Command {
  static description = 'describe the command here'

  static description = 'it will change the status of task to done'

  
  static args = [
    {name: 'id'},
    {name:'todo'}
]

  async run() {
    const {args} = this.parse(Edit)
    const id = args.id
    const todo =args.todo
 

     const res = await Todos.find({id: parseInt(id, 10)})
      .assign({task:todo})
      .write()
      this.log(`Task ${id} Edited to ${todo}`)
  }

}
