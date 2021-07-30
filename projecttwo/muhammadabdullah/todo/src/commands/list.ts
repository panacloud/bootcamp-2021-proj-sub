import { Command, flags } from '@oclif/command';
import { collection } from '../todo/TodoAPI';

export default class List extends Command {
  static description = 'describe the command here'

  static flags = {
    show_complete: flags.boolean({char: 'c'}),
    show_all: flags.boolean({char: 'a'}),
  }

  async run() {
    const { flags } = this.parse(List)
    if(flags.show_all){
      collection.listTasks();
    }else if(flags.show_complete){
      collection.listTasksCompleted();
    }else{
      console.log("Use following flag(s):\n\
      -a \t\t show all tasks\n\
      -c \t\t show only completed tasks");
    }
  }
}