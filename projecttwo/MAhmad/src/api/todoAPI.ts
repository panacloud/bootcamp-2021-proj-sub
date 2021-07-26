import * as fs from 'fs'
import * as path from 'path'

const todoFile = path.join(__dirname, '../db/todos.json');

interface Todo {
  done: boolean;
  todo: string;
}

class TodoAPI {
  private todos : Todo[] = []

  constructor () {
    this.todos = JSON.parse(fs.readFileSync(todoFile, { encoding: 'utf-8' }))
  }

  private saveTodos () {
    const data = JSON.stringify(this.todos)
    fs.writeFileSync(todoFile, data, { encoding: 'utf-8' })
  }

  add (todo : string, done? : boolean) {
    done = done || false
    const newTodo : Todo = { done, todo }
    this.todos.push(newTodo)
    this.saveTodos()
  }

  remove (index : number) {
    this.todos.splice(index, 1)
    this.saveTodos()
  }

  list () {
    return this.todos
  }

  get (index : number) : Todo {
    return this.todos[index]
  }

  done (index : number) {
    this.todos[index].done = true
    this.saveTodos()
  }

  undone (index : number) {
    this.todos[index].done = false
    this.saveTodos()
  }
}

const api = new TodoAPI
export default api