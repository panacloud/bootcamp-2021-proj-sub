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
    
    public taskID(id: number): any {
        this.todos.filter((item) => {
            item.iD === id
        })
    }

    taskDone(id: number): void {
        this.taskID(id).isDone = true;
    }

  
    public addTask(todoTask: string) {
        let id = Math.floor(Math.random() * 100);
        
        let tasks: Todo = new Todo(todoTask, false, id);
        this.todos.push(tasks);

        this.printTodo();
    }
};

let collection: TodoCollection = new TodoCollection();
collection.addTask('task-01');
collection.taskDone(70)