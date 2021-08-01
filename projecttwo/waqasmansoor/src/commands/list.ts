import {Command, flags} from '@oclif/command'
import {tododb} from '../database/db'
import {todo} from '../api/todo'
import {todoapi} from '../api/todoapi'

const Table=require('cli-table')

export default class List extends Command {
  static description = 'Show Todos'
  static args = [{name:'username'}]


  async run() {
    
    
    const table=new Table({
      head:[
        'index','todo','status'
      ]
    })


    const {args} = this.parse(List)
    const username=args.username
    if(username){
      
      if(tododb.userExist(username)){
          const todos=tododb.getTodosByUser(username,true)
          for(let i=0;i<todos.length;i++){
            const todo=todos[i]
            table.push([todo.id,todo.name,todo.taskDone?"Done":"Not Done"])
          }
      }
      else{
        this.log("Sorry User does not exist")
      }
      
      console.clear()
       this.log(table.toString())
    }
    else{
      console.log("Please specify user name")
    }
    
  }
}
