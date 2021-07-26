import { TodoItem } from './TodoItem';
import { TodoCollection } from './TodoCollection';
import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";

type SchemaType = {
    todos: { id: number; todo: string; complete: boolean; }[]
}

export class JsonTodoCollection extends TodoCollection {
    private database: lowdb.LowdbSync<SchemaType>;

    constructor(todoItems: TodoItem[] = []) {
        super([]);
        this.database = lowdb(new FileSync("Todos.json"));
        if (this.database.has("todos").value()) {
            let dbItems = this.database.get("todos").value();
            dbItems.forEach(record => this.itemsMap.set(record.id, new TodoItem(record.id, record.todo, record.complete)));
        } else {
            this.database.set("todos", todoItems).write();
            if(todoItems.length) todoItems.forEach(item => this.itemsMap.set(item.id, item));
        }
    }

    public addTodo = (todo: string): number => {
        let result = super.addTodo(todo);
        this.storeTodos();
        return result;
    };

    removeTodo = (todoId: number): void => {
        super.removeTodo(todoId);
        this.storeTodos();
    }

    markComplete = (id: number, complete: boolean): void => {
        super.markComplete(id, complete);
        this.storeTodos();
    }

    removeTodos = (completeOrNot: boolean = null): void => {
        super.removeTodos(completeOrNot);
        this.storeTodos();
    }

    private storeTodos = () => {
        this.database.set("todos", [...this.itemsMap.values()]).write();
    }
}