"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTodoCollection = void 0;
const TodoItem_1 = require("./TodoItem");
const TodoCollection_1 = require("./TodoCollection");
const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
class JsonTodoCollection extends TodoCollection_1.TodoCollection {
    constructor(todoItems = []) {
        super([]);
        this.addTodo = (todo) => {
            let result = super.addTodo(todo);
            this.storeTodos();
            return result;
        };
        this.removeTodo = (todoId) => {
            super.removeTodo(todoId);
            this.storeTodos();
        };
        this.markComplete = (id, complete) => {
            super.markComplete(id, complete);
            this.storeTodos();
        };
        this.removeTodos = (completeOrNot = null) => {
            super.removeTodos(completeOrNot);
            this.storeTodos();
        };
        this.storeTodos = () => {
            this.database.set("todos", [...this.itemsMap.values()]).write();
        };
        this.database = lowdb(new FileSync("Todos.json"));
        if (this.database.has("todos").value()) {
            let dbItems = this.database.get("todos").value();
            dbItems.forEach(record => this.itemsMap.set(record.id, new TodoItem_1.TodoItem(record.id, record.todo, record.complete)));
        }
        else {
            this.database.set("todos", todoItems).write();
            if (todoItems.length)
                todoItems.forEach(item => this.itemsMap.set(item.id, item));
        }
    }
}
exports.JsonTodoCollection = JsonTodoCollection;
