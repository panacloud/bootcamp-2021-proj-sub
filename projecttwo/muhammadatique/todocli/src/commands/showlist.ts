import {Command ,flags} from '@oclif/command';

//---------------two decorate outputs using library chalks, clitable
import chalk = require('chalk');
import Table = require('cli-table')


//-------------------------import database
import {Todos} from'../db'


export default class showlist extends Command{
  static description="This will add new ToDo in list"
  static args =[{name:'showlist'}]

  static flags = {
    help: flags.help({char: 'h',description: "this will add new task"}),
    // flag with a value (-t, --todo=VALUE)
    todo: flags.string({char: 't', description: 'task to add'}),
  }
  async run(){
    const {args}=this.parse(showlist)
    //--------------------------------------------getting data from database
    const list= await Todos.sortBy('id').value()
    //--------------------------------------------table design
    const table = new Table({
      head: [
        chalk.blueBright('index'),
        chalk.blueBright('Task'),
        chalk.blueBright('Status')
      ]
    });
    //---------------------------------------------putting values in table
    
    for(let i=0 ;i<list.length;i++){
      const todo = list[i]
      const status = todo.done ? chalk.green('Done') : chalk.red('Pending')
        table.push([i,todo.task,status])
    }
    this.log(` =====* MY ToDo List *=====`)
    this.log(table.toString())
}
}
