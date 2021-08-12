import {Command, flags} from '@oclif/command'
import { getData } from '../db';
import Mycommands from './mycommands';
//---------------two decorate outputs using library chalks, clitable
import chalk = require('chalk');
import Table = require('cli-table')


export default class Showall extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(Showall)
    //----------------------------------------------getting Data
      const list =getData()

     //--------------------------------------------table design
     const table = new Table({
      head: [
        chalk.redBright('index'),
        chalk.redBright('Task'),
        chalk.redBright('Status')
      ]
    });
    //---------------------------------------------putting values in table
    
    for(let i=0 ;i<list.length;i++){
      const todo = list[i]
      const status = todo.status ? chalk.green('Done') : chalk.red('Pending')
   
        table.push([todo.id,todo.task,status])
    }
    console.clear()
    this.log(` =====* MY ToDo List *=====`)
    this.log(table.toString())
    // await Mycommands.run()
  }
}
