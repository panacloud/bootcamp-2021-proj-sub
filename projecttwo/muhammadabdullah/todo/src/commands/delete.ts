import { Command, flags } from '@oclif/command'
import { collection } from '../todo/TodoAPI';

export default class Delete extends Command {
  static description = 'delete <TaskID> - Delete the task of TaskID'

  static flags = {
    complete: flags.boolean({char: 'c', description: 'delete completed'}),
    id: flags.integer({char: 'i', description: 'id of task'})
  }


  async run() {
    const { flags } = this.parse(Delete)
    if(flags.id ){
      if(collection.deleteTask(flags.id)){
        console.log("task deleted");
      }else{
        console.log("invalid id");
      }
    }else if(flags.complete){
      collection.deleteCompleted();
    }else{
      console.log("Use following flag(s):\n\
      -i <TaskID>\t delete the task of <TaskID>\n\
      -c \t\t delete all completed tasks");
    }
  }
}
