import {Command} from '@oclif/command'
import todoAPI from '../api/todoAPI';
import * as inquirer from 'inquirer';

export default class Interact extends Command {
  static description = 'interactive mode'



  static args = [{name: 'file'}]

  async run(){
    const source = todoAPI.list();
    const choices = source;
    const prompt: any = await inquirer.prompt([
      {
        type: "checkbox",
        message: "Update todo",
        name: "todos",
        choices: choices.map(todo => {
          return {name: todo.todo, checked: todo.done}
        })
      }
    ]);

    //* prompt.todos is the list of todos selected by user
    const finishedTodo = prompt.todos;
    
    //* index is an optional parameter in forEach
    source.forEach((todo, index)=>{
      if (finishedTodo.indexOf(todo.todo) !== -1){
        todoAPI.done(index);
      } else {
        todoAPI.undone(index);
      }
    })
  }
}
