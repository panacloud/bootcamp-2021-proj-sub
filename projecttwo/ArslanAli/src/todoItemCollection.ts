import { readFile, writeFileSync } from "fs";
import { join } from "path";
import { TodoItem } from "./todoItem";
const inquirer = require("inquirer");

const pathToFile = join(__dirname, "../", "data", "todos.json");

export class TodoItemCollection {
  private id = 1;

  constructor(public collectionName?: string, initialItems?: TodoItem[]) {
    if (initialItems) writeFileSync(pathToFile, JSON.stringify(initialItems));
  }

  async readTodos(): Promise<TodoItem[]> {
    return await new Promise((resolve, reject) => {
      readFile(pathToFile, (err, data) => {
        if (err) reject("Error while reading file !");

        let todos;

        if (data.length == 0) {
          todos = [];
        } else {
          todos = JSON.parse(data.toString());
        }

        resolve(todos);
      });
    });
  }

  async listTodos() {
    const todos = await this.readTodos();
    return todos.map((item: TodoItem) => {
      return [item.id, item.todo, item.isComplete ? true : false];
    });
  }

  async addTodo(todo: string): Promise<TodoItem> {
    const todos = await this.readTodos();
    todos.forEach((item: TodoItem) => {
      if (this.id === item.id) {
        this.id++;
      }
    });
    const newTodo = new TodoItem(this.id, todo, false);
    todos.push(newTodo);
    writeFileSync(pathToFile, JSON.stringify(todos));

    return newTodo;
  }

  async removeTodo(id: number): Promise<boolean> {
    let todos = await this.readTodos();
    let filtered = todos.filter((t) => t.id !== id);
    writeFileSync(pathToFile, JSON.stringify(filtered));
    return filtered.length < todos.length;
  }

  async mark() {
    let todos = await this.readTodos();

    const answers = await inquirer.prompt([
      {
        type: "checkbox",
        message: "mark/unmark",
        name: "marked",
        choices: todos.map((t) => {
          return {
            name: t.todo,
            checked: t.isComplete,
          };
        }),
      },
    ]);

    const mapped = todos.map((t) => {
      if (answers.marked.includes(t.todo)) return { ...t, isComplete: true };
      else return { ...t, isComplete: false };
    });

    writeFileSync(pathToFile, JSON.stringify(mapped));
  }
}
