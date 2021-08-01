import {Command, flags} from '@oclif/command'
import {todoapi} from '../api/todoapi'
import {todo} from '../api/todo'
import { tododb } from '../database/db'



export default class Add extends Command {
  static description = 'Add todo'
  static args = [{name:'username'},{name:'todoname'}]
  static flags={
    done:flags.boolean({char:'d'})
  }


  async run() {
    

    const {args,flags} = this.parse(Add)
    const username=args.username
    const newTodo=args.todoname
    
    if(username){
        if(newTodo)
        {
            if(tododb.userExist(username)){
              if(flags.done){
                tododb.addUserTodo(username,newTodo,true)
              }
              else{
                tododb.addUserTodo(username,newTodo)
              }
              
              this.log("Successfully added todo")
            }
            else{
                this.log("Sorry User does not exist")
            }
        }
        else{
            this.log("Please specify Todo to add")
        }
      
    }
    else{
      this.log("Please specify username")
    }
    
  }
}
