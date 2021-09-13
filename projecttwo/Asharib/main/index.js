#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yargs = require("yargs");
const todoCollection_1 = require("./todoCollection");
const argv = yargs(process.argv.splice(2)).argv;
if (argv['add']) {
    todoCollection_1.addTodo(argv['add']);
    todoCollection_1.printAll();
}
else if (argv['show']) {
    todoCollection_1.printAll();
}
else if (argv['taskdone']) {
    todoCollection_1.taskdDone(argv['taskdone']);
    todoCollection_1.printAll();
}
else if (argv['item']) {
    todoCollection_1.getItem(argv['item']);
}
else {
    console.log('Enter Flag of task');
}
