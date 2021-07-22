"use strict";
exports.__esModule = true;
var fs = require("fs");
var os = require("os");
var path = require("path");
var todoFilePath = path.join(os.homedir(), 'todo', 'todos.json');
var TodoAPI = /** @class */ (function () {
    function TodoAPI() {
        this.todos = [];
        this.todos = JSON.parse(fs.readFileSync(todoFilePath, { encoding: 'utf8' }));
    }
    TodoAPI.prototype.fileMethod = function () {
        // make folder for the first run
        if (!fs.existsSync(path.dirname(todoFilePath))) {
            fs.mkdirSync(path.dirname(todoFilePath));
        }
        // save todos on that file
        var data = JSON.stringify(this.todos);
        fs.writeFileSync(todoFilePath, data, { encoding: 'utf8' });
    };
    TodoAPI.prototype.add = function (task) {
        var newTodo = { task: task, done: false };
        this.todos.push(newTodo);
        this.fileMethod();
    };
    TodoAPI.prototype.remove = function (index) {
        this.todos.splice(index, 1);
        this.fileMethod();
    };
    TodoAPI.prototype.list = function () {
        return this.todos;
    };
    TodoAPI.prototype.get = function (index) {
        return this.todos[index];
    };
    TodoAPI.prototype.done = function (index) {
        this.todos[index].done = true;
        this.fileMethod();
    };
    TodoAPI.prototype.undone = function (index) {
        this.todos[index].done = false;
        this.fileMethod();
    };
    return TodoAPI;
}());
var api = new TodoAPI;
exports["default"] = api;
