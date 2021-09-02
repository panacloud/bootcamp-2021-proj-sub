import {Command, flags} from '@oclif/command'
import chalk from 'chalk'
import TodoAPI from '../api/todoApi'

export default class Remove extends Command {
  static description = 'Remove todo from a list';

  
  static args = [{name: 'index'}];

  

  async run() {
    const {args} = this.parse(Remove);

    const index = args.index;
    if(index){
      const todo = TodoAPI.get(index).todo;
      TodoAPI.remove(index);

      this.log(`${chalk.green('[Success]')} Removed todo: ${todo}`);

    }else{
      this.error(chalk.red(`please specify the todo\'s index`));
    }
  }
}
