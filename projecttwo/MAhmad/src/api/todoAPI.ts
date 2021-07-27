import * as fs from 'fs'
import * as path from 'path'
import * as os from 'os';

const todoPath = path.join(os.homedir(), 'todocli');
const todoFile = path.join(todoPath, 'todos.json');

if (!fs.existsSync(todoFile)) {
  // fs.mkdir(todoPath, (err) => {
  //   if (err) {
  //     console.log(err);
  //     }
  // })
  // fs.open(todoFile, 'w', function (err, file) {
  //   if (err) throw err;
  //   console.log('Saved!');
  // });
  fs.mkdirSync(todoPath);
  fs.writeFileSync(todoFile, '[]');
}

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

  showdb () {
    console.log(todoFile);
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

  removeAll () {
    this.todos = []
    this.saveTodos()
  }

  removeDone () {
    this.todos = this.todos.filter(todo => !todo.done)
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