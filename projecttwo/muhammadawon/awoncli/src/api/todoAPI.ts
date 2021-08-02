import * as fs from 'fs'
import * as path from 'path'

const todoFile = path.join(__dirname, '..', '..', 'todos.json')

class TodoAPI {
    private todos : Todo[] = []
  find: any

    constructor() {
        this.todos = JSON.parse(fs.readFileSync(todoFile, {encoding : 'utf-8'}))
    }

    private saveTodos() {
        if(!fs.existsSync(path.dirname(todoFile))) {
            fs.mkdirSync(path.dirname(todoFile))
        }

        const data = JSON.stringify(this.todos)
        fs.writeFileSync(todoFile, data, {encoding: 'utf-8'})
    }
    
    add(todo: string, done?: boolean) {
        done = done || false
        const newTodo: Todo = {done, todo}
        this.todos.push(newTodo)
        this.saveTodos()
    }

    list() {
        return this.todos
    }

    remove(index: number) {
        this.todos.splice(index, 1)
        this.saveTodos()
    }

    done(index: number) {
        this.todos[index].done = true
        this.saveTodos()
    }

    undone(index: number) {
        this.todos[index].done = false
        this.saveTodos()
    }

    get(index: number) {
        return this.todos[index]
    }
}

interface Todo {
    done: boolean,
    todo: string
}

const api = new TodoAPI
export default api
