import {Command} from '@oclif/command'
import * as inquirer from 'inquirer'
import todoAPI from '../api/todoAPI'

export default class Interact extends Command {
  static description = 'Enter the interacting mode'

  async run() {
    const source = todoAPI.list()
    const choices = source // make a copy of the source
    const prompt : any = await inquirer.prompt([
      {
        type: 'checkbox',
        message: 'Update todo',
        name: 'todos',
        choices: choices.map(todo => {
          // the default checked value is determined by the status of todo
          return { name: todo.todo, checked: todo.done }
        })
      }
    ])
    const finishedTodo = prompt.todos // list of todos selected by user
    source.forEach((todo, index) => {
      if (finishedTodo.indexOf(todo.todo) !== -1) {
        // the todo is in the select list
        todoAPI.done(index)
      } else {
        // the todo is not in the select list
        todoAPI.undone(index)
      }
    })
  }
}
