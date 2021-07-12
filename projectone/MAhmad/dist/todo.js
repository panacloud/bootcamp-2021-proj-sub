"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
class Todo {
    constructor(id, name, status = false) {
        this.id = id;
        this.name = name;
        this.status = status;
    }
    printTodo() {
        console.log(`ID: ${this.id} \t Name: ${this.name} \t Status: ${this.status}`);
    }
}
exports.Todo = Todo;
