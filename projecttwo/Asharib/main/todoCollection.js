"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskdDone = exports.getItem = exports.printAll = exports.addTodo = void 0;
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync('todo.json');
const db = new low(adapter);
db.defaults({ tasks: [] })
    .write();
const addTodo = (item) => {
    let increment;
    try {
        console.log('run');
        increment = db.get('tasks').takeRight(1).value()[0].id + 1;
    }
    catch (e) {
        console.log('run1');
        increment = +1;
    }
    db.get('tasks')
        .push({ id: increment,
        task: item, complete: 0 })
        .write();
    console.log('succesfully added to list');
};
exports.addTodo = addTodo;
const printAll = () => {
    db.get('tasks').value().forEach(element => {
        console.log(`Id:${element.id} Task: ${element.task}  status: ${element.complete ? 'complete' : 'not complete'}`);
    });
};
exports.printAll = printAll;
const getItem = (id) => {
    let array = db.get('tasks').find({ id: id }).value();
    console.log(`task: ${array.task} \nstatus:${array.complete ? 'complete' : 'not complete'}`);
};
exports.getItem = getItem;
const taskdDone = (id) => {
    db.get('tasks')
        .find({ id: id })
        .assign({ complete: 1 })
        .write();
    console.log('Task Done');
};
exports.taskdDone = taskdDone;
