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
    addTask(todoTask, completed) {
        let id = Math.floor(Math.random() * 100);
        if (todoTask && completed) {
            let tasks = new Todo(todoTask, completed, id);
            this.todos.push(tasks);
            this.printTodo();
        }
        else {
            console.log('Please enter all Fields');
        }
    }
}
let collection = new TodoCollection();
collection.addTask('task-01', true);
