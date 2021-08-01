"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoapi = void 0;
const todo_1 = require("./todo");
class todoapi {
    constructor() {
        // todos.forEach(todo=>this.todoMap.set(todo.id,todo))
        this.nextId = 1;
        this.todoMap = new Map();
    }
    addTodo(name, taskDone) {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        this.todoMap.set(this.nextId, new todo_1.todo(this.nextId, name, taskDone));
    }
    getTodoById(id) {
        return this.todoMap.get(id);
    }
    getTodos(includeComplete) {
        return [...this.todoMap.values()].filter(todo => includeComplete || !todo.taskDone);
    }
    removeCompletedTask() {
        this.todoMap.forEach(item => {
            if (item.taskDone) {
                this.todoMap.delete(item.id);
            }
        });
    }
}
exports.todoapi = todoapi;
