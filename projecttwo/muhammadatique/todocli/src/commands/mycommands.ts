import { Command, flags } from '@oclif/command'
import * as inquirer from 'inquirer';
import showall from './showall'
import chalk = require('chalk');
import { todoItem } from './add';
import Add from './add';
import {  
  saveTodo,
  getLastid,
  getData,
  editTask,
  delTask,
  taskDone,
  removeDone } from '../db';
import { add } from 'lodash';


export default class Mycommands extends Command {
  static description = 'describe the command here'

  static flags = {

    stage: flags.string({ options: ['add', 'edit', 'done', 'delete', 'quit'] })
  }

  static args = [{ name: 'file' }]


  async run() {
    await showall.run()
    const { flags } = this.parse(Mycommands)
    let stage = flags.stage
//-------------------------------------------------------------------------------designed command menu    
    if (!stage) {
      let commands: any = await inquirer.prompt([{
        name: 'stage',
        message: 'select a command',
        type: 'list',
        choices: [{ name: 'Add Todo' }, { name: 'Edit Todo' }, { name: 'Tick Done' },{ name: 'Del Task' }, { name: 'Delete Completed' }, { name: 'Quit' }],
      }]).then(stage => {
//----------------------------------------------------------------------------------------------adding todo
function addTodo():void { 
   inquirer.prompt([{
  type: "input", name: "add", message: "Enter task:"
}]).then(

  answers => {
    let task: string = answers['add']
    if (task != '') {
      const id = getLastid()
      let todo = new todoItem(id+1,task,false)
     saveTodo(todo)
     Mycommands.run()
    }
  }
)
}
//--------------------------------------------------------------------------------------------------------------
// //-----------------------------------------------------------------edit task
function edit (){
  const data = getData()
    
  inquirer.prompt([
  {
    type: 'checkbox',
    message: 'Select Todo to Update',
    name: 'edit',

    choices:data.filter(item=>{return item.status==false}).map(item=>({ value: item.id, name: item.task, checked: item.status }))
   }
]).then(answers => {
  let id = answers["edit"] as number;
  if (id) {
    inquirer.prompt({ type: "input", name: "edit", message: "Enter task:" })
      .then(answers => {
        if (answers["edit"] !== "") {
          let task = answers["edit"]
          editTask(id,task)
          Mycommands.run()
        }
      }

      )
  }
})}
//------------------------------------------------------------------------task done
function markDone () {
  const data = getData()
  inquirer.prompt([
  {
    type: 'checkbox',
    message: 'Select completed todo',
    name: 'done',
    choices:data.filter(item=>{return item.status==false}).map(item=>({ value: item.id, name: item.task, checked: item.status }))
   }
]).then(results => {

  let dn = results['done']
  if (dn) {
    dn.forEach((id: number) => {
     taskDone(id)
     Mycommands.run()
    });
  }
})}
//------------------------------------------------------------------------task done
function delTodo () {
  const data = getData()
  inquirer.prompt([
  {
    type: 'checkbox',
    message: 'Select completed todo',
    name: 'done',
    choices:data.map(item=>({ value: item.id, name: item.task, checked: item.status }))
   }
]).then(results => {

  let dn = results['done']
  if (dn) {
    dn.forEach((id: number) => {
     delTask(id)
     Mycommands.run()
    });
  }
})}

//--------------------------------------------------------------------------------------------------------------
async function delcompleted():Promise<void> {
         removeDone()
  await  Mycommands.run()
}
//--------------------------------------------------------------------------------------------------------------
switch (stage.stage) {
          case 'Add Todo':
            console.clear()
            addTodo()
            
            break
          case 'Edit Todo':
            console.clear()
            edit()
            break
          case 'Tick Done':
            console.clear()
           markDone()
            break
          case 'Del Task':
            console.clear()
            delTodo()
            break  
          case 'Delete Completed':
            console.clear()
            delcompleted()
            break
          case 'Quit':
            console.clear()
            this.exit
            break
          default:
            Mycommands.run()
            break;
        }
      })
    }



  }
  
}


