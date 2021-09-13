#!/usr/bin/env node
import * as yargs from 'yargs'
import {addTodo, printAll,getItem,taskdDone} from "./todoCollection";

const argv = yargs(process.argv.splice(2)).argv

if(argv['add']){
    
    addTodo(argv['add'])
    printAll()


}else if(argv['show']) {
    
    printAll()
    
}else if(argv['taskdone']){
    
    taskdDone(argv['taskdone'])
    printAll()

}else if(argv['item']){

    getItem(argv['item'])
}else{
    console.log('Enter Flag of task')
}
