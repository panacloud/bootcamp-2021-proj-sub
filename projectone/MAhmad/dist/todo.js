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
        console.log(`${this.id} \t ${this.name} \t ${this.status ? 'Completed' : 'Incomplete'}`);
    }
}
exports.Todo = Todo;
