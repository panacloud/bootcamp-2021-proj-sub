import { Command, flags } from '@oclif/command'
import * as inquirer from 'inquirer';
import Choices = require('inquirer/lib/objects/choices');
import { Todos } from '../db';
import chalk = require('chalk');
import showlist from './showlist';
import Del from './del'
import Add from './add';
import Edit from './edit';
import Done from './done';
import { add } from 'lodash';
import { clear } from 'console';

export default class Inquirer extends Command {
  static description = 'describe the command here'
  static args = [{ name: 'intract' }]

  static flags = {
    // app: flags.string({required: true}),
    stage: flags.string({ options: ['add', 'edit', 'done', 'delete', 'quit'] })
  }
  async run() {

    const { flags } = this.parse(Inquirer)


    //----------------------------------------------------filtering pendind task
    const source = await Todos.value()
    const options = source.filter((obj: { id: number, task: string, done: boolean }) => {
      return !obj.done
    })

    const completed = source.filter((obj: { id: number, task: string, done: boolean }) => {
      return obj.done
    })

    //-------------------------------------------------------------------------

    await showlist.run()
    //---------------------------------------------------------showing table and command
    let stage = flags.stage
    if (!stage) {
      let Mycommands: any = await inquirer.prompt([{
        name: 'stage',
        message: 'select a command',
        type: 'list',
        choices: [{ name: 'Add Todo' }, { name: 'Edit Todo' }, { name: 'Tick Done' }, { name: 'Delete Completed' }, { name: 'Quit' }],
      }]).then(stage => {

        switch (stage.stage) {
          case 'Add Todo':
            //---------------------------------------------------------adding todo
            inquirer.prompt([{
              type: "input", name: "add", message: "Enter task:"
            }]).then(

              answers => {
                let todo: string = answers['add']
                if (todo != '') {
                  const task = Todos.push({
                    task: todo,
                    id: Todos.value().length,
                    done: false
                  }).write()

                  Inquirer.run()
                  if (todo) {
                    this.log(`${chalk.green('[Success]')} Added new Task:${todo}`)
                  }
                  else {
                    this.error(chalk.red('Please specify the New Todo'))
                  }
                }
              }
            )
            break;
          case 'Edit Todo':
            // //-----------------------------------------------------------------edit task
            inquirer.prompt([
              {
                type: 'checkbox',
                message: 'Select completed todo',
                name: 'edit',
                choices: options.map((item: { id: number, task: string; done: boolean; }) => ({ value: item.id, name: item.task, checked: item.done }))
              }
            ]).then(answers => {
              let id = answers["edit"] as string;
              if (id) {
                inquirer.prompt({ type: "input", name: "edit", message: "Enter task:" })
                  .then(answers => {
                    if (answers["edit"] !== "") {
                      let task = answers["edit"]
                      const res = Todos.find({ id: parseInt(id, 10) })
                        .assign({ task: task, done: false })
                        .write()

                      Inquirer.run()
                    }
                  }

                  )
              }
            })
            break;
          case 'Tick Done':
            // //------------------------------------------------------------------------task done
            inquirer.prompt([
              {
                type: 'checkbox',
                message: 'Select completed todo',
                name: 'done',
                choices: options.map((item: { id: number, task: string; done: boolean; }) => ({ value: item.id, name: item.task, checked: item.done }))
              }
            ]).then(results => {

              let dn = results['done']
              if (dn) {
                dn.forEach((id: string) => {
                  const res = Todos.find({ id: parseInt(id, 10) })
                    .assign({ done: true })
                    .write()

                  Inquirer.run()
                });
              }
            })
            break;
          case 'Delete Completed':
           for(let i=0;i<completed.length;i++){
             let id =completed[i]['id']
             const res = Todos.remove({id: parseInt(id, 10)}).write()
           }
                    Inquirer.run()
                    break;
          case 'Quit':
            this.exit()        
          default:
            Inquirer.run()
            break;
        }
      }

      )

    }
  }

}









