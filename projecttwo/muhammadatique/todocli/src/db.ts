import { get } from 'http';
import * as lowdb from 'lowdb';
import chalk = require('chalk');

import * as FileSync from 'lowdb/adapters/FileSync'
import { todoItem } from './commands/add'

// let itemMap = new Map<number, todoItem>();
// let todoItems:todoItem[]= []
type schemaType = {
    todos: {
        id: number,
        task: string,
        status: boolean
    }[]
}
let database: lowdb.LowdbSync<schemaType>


database = lowdb(new FileSync('db.json'))
database.defaults({ todos: [] }).write()


//----------------------------------------------------------get data
function getData(): todoItem[] {
    const data = database.get('todos').value()
    return data
}

//-----------------------------------------------------------------------------------save data
function saveTodo(todo: { id: number, task: string, status: boolean }): void {

    if (todo) {
        console.clear()
        const data = getData()
        data.push(todo)
        database.set("todos", data).write();
        console.log(`\n${chalk.bgGreen('SUCCESS')} >>> ToDo added ${chalk.bgBlue((todo.task))}\n`)
    }
    else {
        console.log(`\n${chalk.bgRed('OOPS')} >>>  Please enter   ${chalk.bgRed(' TODO')}\n`)
    }
}



//---------------------------------------------------------------get last id
function getLastid(): number {

    const data = database.get('todos')
    const nextid = data.value().length
    return nextid
}

//--------------------------------------------------------------------------edit task
function editTask(id: number, task: string): void {
    const data = getData()
    data[data.findIndex(x => x.id == id)].task = task
    database.set("todos", data).write();
    console.log(`\n${chalk.bgGreen('SUCCESS')} >>> Todo  Updated  to ${chalk.bgBlue(chalk.white(task))}\n`)
}
//--------------------------------------------------------------------------del task
function delTask(id: number): void {
    const rs = database.get('todos')
    rs.remove(x => x.id == id).write()
    console.log(`\n${chalk.bgGreen('SUCCESS')} >>> Todo  Deleted  having id ${chalk.bgBlue(chalk.white(id))}\n`)
}
//--------------------------------------------------------------------------mark done task
function taskDone(id: number): void {
    const data = getData()
    data[data.findIndex(x => x.id == id)].status = true
    database.set("todos", data).write();
    console.log(`\n${chalk.bgGreen('SUCCESS')} >>> Task complted  \n`)
}
//--------------------------------------------------------------------------mark done task
function removeDone(): void {
    const rs = database.get('todos')
    rs.remove(x => x.status == true).write()
    console.log(`\n${chalk.bgGreen('SUCCESS')} >>>  all completed Tasks Deleted  \n`)
}




export {
    saveTodo,
    getLastid,
    getData,
    editTask,
    delTask,
    taskDone,
    removeDone
}