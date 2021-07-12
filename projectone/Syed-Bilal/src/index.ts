class Todo {
    public todoDescription: string;
    public isDone: boolean;
    public iD: number;

    public constructor(todoDescription: string, isDone: boolean, iD: number) {
        this.todoDescription = todoDescription;
        this.isDone = isDone;
        this.iD = iD
    };

    public printTask(): void {
        console.log(`Task Description: ${this.todoDescription}`)
        console.log(`Is task completed: ${this.isDone}`)
        console.log(`Todo iD: ${this.iD}`)
    }

}

class TodoCollection {
    constructor(public todos: Todo[] = []) {};

    printTodo(): void {
        this.todos.forEach((item: Todo) => {
            item.printTask()
        })
    }
  
    public addTask(todoTask: string, completed: boolean) {
        let id = Math.floor(Math.random() * 100);
        
        if(todoTask && completed) {
            let tasks: Todo = new Todo(todoTask, completed, id);
            this.todos.push(tasks);

            this.printTodo();
            
        } else {
            console.log('Please enter all Fields')
        }
    }
}

let collection: TodoCollection = new TodoCollection();
collection.addTask('task-01', true);