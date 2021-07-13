import { Todo } from "./todo";

export class TodoList {

    private ID: number = 1;
    private todoMap = new Map<number, Todo>();

    public constructor(public todos: Todo[] = []) {

    }

    public addTodo(name: string): number {
        this.todoMap.set(this.ID, new Todo(this.ID, name, false));
        return this.ID++;
    }

    public getTodo(ID: number): Todo {
        return this.todoMap.get(ID);
    }

    public completeTodo(ID: number): void {
        let completeTodo = this.getTodo(ID);
        completeTodo.status = true;
    }

    public deleteTodo(ID: number): void {
        this.todoMap.delete(ID);
    }

    public deleteDoneTodo(): void {
        this.todoMap.forEach((todo) => {
            if (todo.status) {
                this.todoMap.delete(todo.id);
            }
        })
    }

    public printTodos(): void {
        this.todoMap.forEach((todo) => todo.printTodo());
    }

}