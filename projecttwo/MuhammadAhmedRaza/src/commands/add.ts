import {Command, flags} from '@oclif/command'
import chalk from 'chalk'
import TodoAPI from '../api/todoApi'

export default class Add extends Command {
  static description = 'Add new todo to list'


  static args = [{name: 'todo'}]

  static flags = {
    done : flags.boolean({char : 'd'})
  }

  async run() {
    const {args, flags} = this.parse(Add)
    const todo = args.todo
    if(todo){
      if (flags.done){
        TodoAPI.add(todo, true);
      }else{
        TodoAPI.add(todo);
      }

      
      this.log(`${chalk.green('[Success]')} Added new todo: ${todo}`)
    }else{
      this.error(chalk.red(`please specify the new todo`))
    }
    
    
  }
}
