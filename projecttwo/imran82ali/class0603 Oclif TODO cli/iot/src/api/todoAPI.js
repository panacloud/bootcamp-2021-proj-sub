"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var os = require("os");
var todoFile = path.join(os.homedir(), '/bc2021/class0603/iot', 'todos.json');
var TodoAPI = /** @class */ (function () {
    function TodoAPI() {
        this.todos = [];
        this.todos = JSON.parse(fs.readFileSync(todoFile, { encoding: 'utf-8' }));
    }
    TodoAPI.prototype.saveTodos = function () {
        // make folder for the first run
        console.log("yes");
        if (!fs.existsSync(path.dirname(todoFile))) {
            console.log("in if");
            fs.mkdirSync(path.dirname(todoFile));
        }
        console.log("out if");
        var data = JSON.stringify(this.todos);
        fs.writeFileSync(todoFile, data, { encoding: 'utf-8' });
    };
    TodoAPI.prototype.add = function (todo) {
        var newTodo = { done: false, todo: todo };
        this.todos.push(newTodo);
        this.saveTodos();
    };
    TodoAPI.prototype.remove = function (index) {
        this.todos.splice(index, 1);
        this.saveTodos();
    };
    TodoAPI.prototype.list = function () {
        return this.todos;
    };
    TodoAPI.prototype.get = function (index) {
        return this.todos[index];
    };
    TodoAPI.prototype.done = function (index) {
        this.todos[index].done = true;
        this.saveTodos();
    };
    TodoAPI.prototype.undone = function (index) {
        this.todos[index].done = false;
        this.saveTodos();
    };
    return TodoAPI;
}());
var api = new TodoAPI;
exports["default"] = api;
