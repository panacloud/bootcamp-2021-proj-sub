import { Command } from '@oclif/command';
import { collection } from '../todo/TodoAPI';

export default class Add extends Command {
  static description = 'add <Task> - Add Task to Todo list'

  static args = [{ name: 'todo' }]

  async run() {
    const { args } = this.parse(Add)
    const todo = args.todo;
    if (todo) {
      collection.addTask(todo)
      console.log("task added");
    }
    else {
      console.log("Please specify new todo");
    }
  }
}
