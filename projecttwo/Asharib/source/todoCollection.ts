import * as low from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";

const adapter = new FileSync('todo.json')
const db = new low(adapter)  

db.defaults({ tasks: []})
    .write()

    export const addTodo = (item: string) =>  {
    let increment
     try{
         console.log('run')
         increment=db.get('tasks').takeRight(1).value()[0].id+1
        }
        catch(e: unknown){
            console.log('run1')
            increment=+1
        }
        

    db.get('tasks')
    .push({ id: increment,
    task: item, complete: 0})
    .write()
    console.log('succesfully added to list')
}

export const printAll = () =>{
    db.get('tasks').value().forEach(element => {
        console.log(`Id:${element.id} Task: ${element.task}  status: ${element.complete ? 'complete':'not complete'}`)    
    })
}

export const getItem= (id :number)=>{
    let array = db.get('tasks').find({ id : id }).value()
    console.log(`task: ${array.task} \nstatus:${array.complete ? 'complete':'not complete'}`)
}

export const taskdDone = (id:number) => {

    db.get('tasks')
    .find({id: id})
    .assign({complete : 1})
    .write()    
    console.log('Task Done')

}
