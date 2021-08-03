import {Command, flags} from '@oclif/command'
import { Todos } from '../db'


export default class Done extends Command {
  static description = 'it will change the status of task to done'

  
  static args = [
    {name: 'id'}
]

  async run() {
    const {args} = this.parse(Done)
    const id = args.id
 

     const res = await Todos.find({id: parseInt(id, 10)})
      .assign({done: true})
      .write()
  }
}
