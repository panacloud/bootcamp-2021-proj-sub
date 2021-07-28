"use strict";
class Todo {
    constructor(todoDescription, isDone, iD) {
        this.todoDescription = todoDescription;
        this.isDone = isDone;
        this.iD = iD;
    }
    ;
    printTask() {
        console.log(`Task Description: ${this.todoDescription}`);
        console.log(`Is task completed: ${this.isDone}`);
        console.log(`Todo iD: ${this.iD}`);
    }
}
class TodoCollection {
    constructor(todos = []) {
        this.todos = todos;
    }
    ;
    printTodo() {
        this.todos.forEach((item) => {
            item.printTask();
        });
    }
    taskID(id) {
        this.todos.filter((item) => {
            item.iD === id;
        });
    }
    taskDone(id) {
        this.taskID(id).isDone = true;
    }
    addTask(todoTask) {
        let id = Math.floor(Math.random() * 100);
        let tasks = new Todo(todoTask, false, id);
        this.todos.push(tasks);
        this.printTodo();
    }
}
;
let collection = new TodoCollection();
collection.addTask('task-01');
collection.taskDone(70);
