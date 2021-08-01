import {Command, flags} from '@oclif/command'
import { tododb } from '../database/db'

export default class Remove extends Command {
  static description = 'Remove Todo'

  

  static args = [{name: 'username'},{name:"index"}]

  async run() {
    const {args} = this.parse(Remove)
    const username=args.username
    const index=args.index
    if(username){
      if(tododb.userExist(username)){
        this.log(tododb.removeTodo(username,index))
      }
      else{
        this.log("Sorry user does not exist")
      }
    }
    else{
      this.log("Please Specify user name")
    }
  }
}
