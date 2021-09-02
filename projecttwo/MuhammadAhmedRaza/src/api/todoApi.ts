import * as fs from 'fs'
import * as path from 'path'
import * as os from 'os'

const todoFile = path.join(os.homedir(),'ahmedclitodo','todo.json')

interface Todo {
    done: boolean,
    todo: string
}

 class TodoAPI{
    private todos : Todo[] = [];

    constructor(){
        //  this.todoSave();
        if(!fs.existsSync(path.dirname(todoFile))){
            fs.mkdirSync(path.dirname(todoFile));
            const data = JSON.stringify(this.todos);
            fs.writeFileSync(todoFile,data,{encoding: 'utf-8'});
        }
        
        this.todos = JSON.parse(fs.readFileSync(todoFile, {encoding: 'utf-8'}));
    }

    private todoSave (): void {
        if(!fs.existsSync(path.dirname(todoFile))){
            fs.mkdirSync(path.dirname(todoFile));
        }
        const data = JSON.stringify(this.todos);
        fs.writeFileSync(todoFile,data,{encoding: 'utf-8'});
    }

    add (todo: string, done : boolean = false ){
        const newTodo : Todo = {done, todo};
        this.todos.push(newTodo);
        this.todoSave();
    }

    remove (index:number){
        this.todos.splice(index, 1);
        this.todoSave();
    }

    list() {
        return this.todos
    }

    get (index: number): Todo {
        return this.todos[index]
    }

    done (index : number) {
        this.todos[index].done = true
        this.todoSave();
      }
    
      undone (index : number) {
        this.todos[index].done = false
        this.todoSave();
      }



}

const api = new TodoAPI
export default api