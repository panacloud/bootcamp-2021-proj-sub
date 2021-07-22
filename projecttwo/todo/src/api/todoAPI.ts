
import * as fs from 'fs'
import * as os from 'os'
import * as path from 'path'

const todoFilePath = path.join(os.homedir(), 'todo' , 'todos.json' )

interface Todo {
    task: string;
    done: boolean;
}


class TodoAPI {
    private todos: Todo[]=[];

    constructor() {
        this.todos = JSON.parse(fs.readFileSync(todoFilePath, {encoding: 'utf8'}))
    }

    private fileMethod() {
        // make folder for the first run
        if (!fs.existsSync(path.dirname(todoFilePath))) {
            fs.mkdirSync(path.dirname(todoFilePath))
        }
        // save todos on that file
        const data = JSON.stringify(this.todos)
        fs.writeFileSync(todoFilePath, data, {encoding : 'utf8'})
    }

    add (task: string) {
        const newTodo: Todo = { task, done:false}
        this.todos.push(newTodo)
        this.fileMethod()
    }

    remove (index: number) {
        this.todos.splice(index, 1)
        this.fileMethod()
    }

    list () {
        return this.todos;
    }

    get (index: number): Todo {
        return this.todos[index]
    }

    done (index: number) {
        this.todos[index].done = true
        this.fileMethod()
    }

    undone (index:number) {
        this.todos[index].done = false
        this.fileMethod()
    }
    
}

const api = new TodoAPI
export default api
