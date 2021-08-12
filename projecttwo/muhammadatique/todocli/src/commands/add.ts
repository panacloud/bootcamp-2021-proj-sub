import {Command, flags} from '@oclif/command'
import chalk = require('chalk')
import { saveTodo,getLastid} from '../db'


export  class todoItem  {
  public constructor(public id:number,public task:string,public  status:boolean = false){

  }
}

export default class Add extends Command {
  static description = 'Commanad used to add '

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'task to save' }),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'task'}]

  async run() {
    const {args, flags} = this.parse(Add)
    const task = args.task
  const id = getLastid()
 
    let todo = new todoItem(id+1,task,false)

    console.clear()
    saveTodo(todo)
  }
}
