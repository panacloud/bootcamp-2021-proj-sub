import { Todo } from "./todo";

export class TodoList {

    private ID: number = 1;

    public constructor(public todos: Todo[] = []) {

    }

    public addTodo(name: string): number {
        this.todos.push(new Todo(this.ID, name, false));
        return this.ID++;
    }

    public completeTodo(ID: number): void {
        this.todos.find((ID) => ID.status = true)
    }

    public printTodos(): void {
        this.todos.forEach((todo) => todo.printTodo());
    }

}