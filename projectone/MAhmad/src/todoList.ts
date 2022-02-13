import { Todo } from "./todo";

type todoCount = {
    total: number;
    incomplete: number;
    complete: number;
}

export class TodoList {

    private ID: number = 1;
    protected todoMap = new Map<number, Todo>();

    public constructor(public userName: string, public todos: Todo[] = []) {

    }
     
    addTodo(name: string): number {
        this.todoMap.set(this.ID, new Todo(this.ID, name, false));
        return this.ID++;
    }

    getTodo(ID: number): Todo {
        return this.todoMap.get(ID);
    }
    
    getAllTodos(): Todo[] {
        return [...this.todoMap.values()]
    }

    getTodoWithStatus(statusTodo: boolean): Todo[] {
        return [...this.todoMap.values()]
        .filter(todo => statusTodo == todo.status);
    }
     
    countTodo(): todoCount {
        return {
            total: this.todoMap.size,
            incomplete: this.getTodoWithStatus(false).length,
            complete: this.getTodoWithStatus(true).length
        }
    }

    completeTodo(ID: number): void {
        let completeTodo = this.getTodo(ID);
        completeTodo.status = true;
    }

    deleteTodo(ID: number): void {
        this.todoMap.delete(ID);
    }
     
    deleteDoneTodo(): void {
        this.todoMap.forEach((todo) => {
            if (todo.status) {
                this.todoMap.delete(todo.id);
            }
        })
    }

    printTodos(): void {
        this.todoMap.size > 0? console.log(`ID \t Name \t Status`): null;
        this.todoMap.forEach((todo) => todo.printTodo());
    }
}