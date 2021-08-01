import {Command} from '@oclif/command'
import inquirer from 'inquirer';
import TodoApi from '../api/todoApi'

export default class Interact extends Command {
  static description = 'Enter the interacting mode'




  async run() {
  const source = TodoApi.list();
  const choices = source // make a copy of source
  const prompt : any = await inquirer.prompt([
    {
      type: 'checkbox',
      message: 'Update todo',
      name: 'todos',
      choices: choices.map(todo => {
        // the default checked value is determined by the status of todo
        return {name: todo.todo, checked: todo.done}
      })
    }
  ])
  const finishedTodo = prompt.todos //list of todos selected by user
  source.forEach((todo,index) =>{
    if (finishedTodo.indexOf(todo.todo) !== -1){
      // the todo is in the select list
      TodoApi.done(index)
    }else{
      TodoApi.undone(index)
    }
  })     


  }
}
