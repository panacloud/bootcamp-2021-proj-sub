import { TodoList } from './todoList';
import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";
import { Todo } from './todo';

type schemaType = {
    tasks: { id: number; name: string; status: boolean; }[]
};

export class JsonTodoCollection extends TodoList {

    private database: lowdb.LowdbSync<schemaType>;
    
    constructor(public userName: string, todo: Todo[] = []) {
        super(userName, []);
        this.database = lowdb(new FileSync("Todos.json"));

        if (this.database.has("todos").value()) {
            let dbItems = this.database.get("todos").value();
            dbItems.forEach((todo: Todo) => this.todoMap.set(todo.id,
                new Todo(todo.id, todo.name, todo.status)));
        } else {
            this.database.set("todos", todo).write();
            todo.forEach(todo => this.todoMap.set(todo.id, todo));
        }
    }

    addTodo(task: string): number {
        let result = super.addTodo(task);
        this.storeTasks();
        return result;
    }
    
    markComplete(id: number): void {
        super.completeTodo(id);
        this.storeTasks();
    }

    markDelete(id: number): void {
        super.deleteTodo(id);
        this.storeTasks();
    }

    removeComplete(): void {
        super.deleteDoneTodo();
        this.storeTasks();
    }

    private storeTasks() {
        this.database.set("todos", [...this.todoMap.values()]).write();
    }
}