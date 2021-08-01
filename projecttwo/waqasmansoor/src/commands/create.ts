import {Command, flags} from '@oclif/command'
import {tododb} from '../database/db'

export default class Create extends Command {
  static description = 'Create new user todo list'

  

  static args = [{name: 'username'}]

  async run() {
    const {args} = this.parse(Create)
    const username=args.username
    if(username){
      if(tododb.createTodoList(username)){
        this.log(`Successfully created ${username} todo list`)
      }
      else{
        
        this.log("User already exist")
      }
    
    }
    else{
      this.log("Please specify user name")
    }
    
  }
}
