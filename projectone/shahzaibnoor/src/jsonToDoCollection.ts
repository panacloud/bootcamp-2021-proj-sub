import {TodoItem} from "./TodoItem";
import {todoCollection} from "./todoCollection";
import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";

type schemaType = {
    tasks: {id: number, task: string, complete: boolean}[]
}

export class JsonTodoCollection extends todoCollection {
    private database: lowdb.LowdbSync<schemaType>;

    constructor(username: String, todoItems: TodoItem[] = []){
        super(username, []);
        this.database = lowdb(new FileSync('Todos.json'));
        if(this.database.has('tasks').value()) {
            let dbItems = this.database.get('tasks').value();
            dbItems.forEach(item => this.itemMap.set(item.id, new TodoItem(item.id, item.task, item.complete)));
        }else {
            this.database.set('tasks', todoItems).write();
            todoItems.forEach(item => this.itemMap.set(item.id, item));
        }
    }

    addTodo(task: string){
        let result = super.addToDo(task);
        // super.addToDo(task);
        this.storeTasks();
        return result;
    }

    deleteTodo(id: number){
        super.deleteToDo(id);
        this.storeTasks();
    }

    markComplete(id: number, complete: boolean){
        super.markComplete(id, complete);
        this.storeTasks();
    }

    removeComplete(){
        super.removeComplete();
        this.storeTasks();
    }

    private storeTasks(){
        // console.log('Tasks in db');
        // console.log(this.itemMap.values());
        this.database.set('tasks', [...this.itemMap.values()]).write();
    }
}