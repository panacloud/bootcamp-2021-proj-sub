import {Command, flags} from '@oclif/command'
import { tododb } from '../database/db'
import * as inquirer from 'inquirer'

export default class Interact extends Command {
  static description = 'Update Todos'

  

  static args = [{name: 'username'}]

  async run() {
    const {args} = this.parse(Interact)
    const username=args.username
    if(username){
      if(tododb.userExist(username)){
        inquirer.prompt({
          type:"checkbox",name:"todo",message:"Update Todo",
          choices:tododb.getTodosByUser(username,true).map(todo=>({
              name:todo.name,value:todo.id,checked:todo.taskDone
          }))
      }).then(answers=>{
          let completedTodo:number[]=answers["todo"]
          tododb.taskDone(username,completedTodo)
                
      })
      }
      else{
        this.log("Sorry User does not exist")
      }
    }
    else{
      this.log("Please specify username")
    }
  }
}
