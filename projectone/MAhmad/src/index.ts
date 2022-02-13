import { TodoList } from "./todoList";
import * as inquirer from 'inquirer';
import { Todo } from "./todo";
import { JsonTodoCollection } from "./jsonTodoCollection";

enum Commands {
    ShowAllTodos = "Show All Todos",
    ShowDone = "Show Completed Todos",
    ShowUndone = "Show Incomplete Todos",
    ShowStats = "Show Stats of Todos",
    AddTodos = "Add Todos",
    DelTodos = "Delete Todos",
    DoneTodos = "Complete Todo",
    DelDoneTodo = "Delete Completed Todos",
    Quit = "Quit"
}

let allTodo: TodoList = new JsonTodoCollection("Ahmad", []);

function todoByStatus(Status: boolean): void {
    allTodo.getTodoWithStatus(Status).forEach((todo: Todo) => todo.printTodo());
}

console.log(`${allTodo.userName}'s Todo List`);
allTodo.printTodos();

function promptAdd(): void {
    inquirer.prompt({
        type: "input",
        name: "add",
        message: "Enter Todo:"
    }).then(answers => {
        if (answers["add"] !== "") {
            allTodo.addTodo(answers["add"]);
        }
        promptUser();
    });
}

function promptDel(): void {
    inquirer.prompt({
        type: "checkbox",
        name: "Del",
        message: "Mark the todos to delete them:",
        choices: allTodo.getAllTodos().map(todo => ({ name: todo.name, value: todo.id, checked: todo.status }))
    }).then(answers => {
        let deletedTodos = answers["Del"] as number[];
        deletedTodos.forEach(todo => {
            allTodo.deleteTodo(todo);
        })
        promptUser();
    });
}

function promptDone(): void {
    inquirer.prompt({
        type: "checkbox",
        name: "Done",
        message: "Mark the todos to complete them:",
        choices: allTodo.getTodoWithStatus(false).map(todo => ({ name: todo.name, value: todo.id, checked: todo.status }))
    }).then(answers => {
        let completedTodos = answers["Done"] as number[];
        completedTodos.forEach(todo => {
            allTodo.completeTodo(todo);
        })
        promptUser();
    });
}

function promptUser(): void {
    inquirer.prompt({
        type: "list",
        name: "command",
        message: "Choose option",
        choices: Object.values(Commands),
        // badProperty: true
    }).then(answers => {
        switch (answers["command"]) {
            case Commands.ShowAllTodos:
                allTodo.printTodos();
                promptUser();
                break;
            case Commands.ShowDone:
                todoByStatus(true);
                promptUser();
                break;
            case Commands.ShowUndone:
                todoByStatus(false);
                promptUser();
                break;
            case Commands.ShowStats:
                console.log(`Total: ${allTodo.countTodo().total}`);
                console.log(`Completed: ${allTodo.countTodo().complete}`);
                console.log(`Incomplete: ${allTodo.countTodo().incomplete}`);
                promptUser();
                break;
            case Commands.AddTodos:
                promptAdd();
                break;
            case Commands.DelTodos:
                promptDel();
                break;
            case Commands.DoneTodos:
                promptDone();
                break;
            case Commands.DelDoneTodo:
                allTodo.deleteDoneTodo();
                promptUser();
                break;
            case Commands.Quit:
                break;
        }
    })
}
promptUser();


