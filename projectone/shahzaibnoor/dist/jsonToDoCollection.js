"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTodoCollection = void 0;
const TodoItem_1 = require("./TodoItem");
const todoCollection_1 = require("./todoCollection");
const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
class JsonTodoCollection extends todoCollection_1.todoCollection {
    constructor(username, todoItems = []) {
        super(username, []);
        this.database = lowdb(new FileSync('Todos.json'));
        if (this.database.has('tasks').value()) {
            let dbItems = this.database.get('tasks').value();
            dbItems.forEach(item => this.itemMap.set(item.id, new TodoItem_1.TodoItem(item.id, item.task, item.complete)));
        }
        else {
            this.database.set('tasks', todoItems).write();
            todoItems.forEach(item => this.itemMap.set(item.id, item));
        }
    }
    addTodo(task) {
        let result = super.addToDo(task);
        // super.addToDo(task);
        this.storeTasks();
        return result;
    }
    deleteTodo(id) {
        super.deleteToDo(id);
        this.storeTasks();
    }
    markComplete(id, complete) {
        super.markComplete(id, complete);
        this.storeTasks();
    }
    removeComplete() {
        super.removeComplete();
        this.storeTasks();
    }
    storeTasks() {
        // console.log('Tasks in db');
        // console.log(this.itemMap.values());
        this.database.set('tasks', [...this.itemMap.values()]).write();
    }
}
exports.JsonTodoCollection = JsonTodoCollection;
