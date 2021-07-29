import * as fs from 'fs'
import * as path from 'path'
import * as os from 'os'

const todoFile = path.join(os.homedir(), '/bc2021/class0603/iot', 'todos.json')

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
    // make folder for the first run
    console.log("yes");
    if (!fs.existsSync(path.dirname(todoFile))) {
        console.log("in if");
      fs.mkdirSync(path.dirname(todoFile))
    }
    console.log("out if");
    const data = JSON.stringify(this.todos)
    fs.writeFileSync(todoFile, data, { encoding: 'utf-8' })
  }

  add (todo : string) {
    const newTodo : Todo = { done: false, todo }
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