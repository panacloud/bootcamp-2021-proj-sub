import * as fs from "fs";
import * as path from "path";
import * as os from "os";

//? os.homedir()
//* get path of the home directory for the current user
//* On windows, It collects its value from an environment variable called USERPROFILE if defined.
//* Otherwise, it returns the path to the profile directory for the current user.
//* Example: C:\Users\hc

//? this will be the json "database" having todos
const todoFile = path.join(os.homedir(), "abdullah-cli", "todos.json");

//* an interface defines the specification of an entity
//* handels the *what* part, but not the *how* part
interface Todo {
  done: boolean;
  todo: string;
}

class TodoAPI {
  private todos: Todo[] = [];

  constructor() {
    //* JSON.parse: converts JSON to object
    //* readFileSync: Synchronously reads the entire contents of a file.
    this.todos = JSON.parse(fs.readFileSync(todoFile, { encoding: "utf-8" }));
  }

  private saveTodos() {
    //* existsSync: Synchronously tests whether or not the given
    //* path exists by checking with the file system.
    if (!fs.existsSync(path.dirname(todoFile))) {
      fs.mkdirSync(path.dirname(todoFile));
    }
    //? JS to JSON
    const data = JSON.stringify(this.todos);
    fs.writeFileSync(todoFile, data, { encoding: "utf-8" });
  }

  add(todo: string, done?: boolean) {
    //* done is an optional argument
    done = done || false;
    const newTodo: Todo = { done, todo };
    this.todos.push(newTodo);
    this.saveTodos();
  }

  remove (index : number) {
    this.todos.splice(index, 1);
    this.saveTodos();
  }

  list () {
    return this.todos;
  }

  get (index : number) : Todo {
    return this.todos[index];
  }

  done (index : number) {
    this.todos[index].done = true;
    this.saveTodos();
  }

  undone (index : number) {
    this.todos[index].done = false;
    this.saveTodos();
  }
}

const api = new TodoAPI();
export default api;
