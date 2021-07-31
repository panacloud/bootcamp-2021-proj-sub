"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
exports.JsonTodoCollection = void 0;
var todoItem_1 = require("./todoItem");
var todoCollection_1 = require("./todoCollection");
var lowdb = require("lowdb");
var FileSync = require("lowdb/adapters/FileSync");
var JsonTodoCollection = /** @class */ (function (_super) {
    __extends(JsonTodoCollection, _super);
    function JsonTodoCollection(userName, todoItems) {
        if (todoItems === void 0) { todoItems = []; }
        var _this = _super.call(this, userName, []) || this;
        _this.userName = userName;
        _this.database = lowdb(new FileSync("Todos.json"));
        if (_this.database.has("tasks").value()) {
            var dbItems = _this.database.get("tasks").value();
            dbItems.forEach(function (item) { return _this.itemMap.set(item.id, new todoItem_1.TodoItem(item.id, item.task, item.complete)); });
        }
        else {
            _this.database.set("tasks", todoItems).write();
            todoItems.forEach(function (item) { return _this.itemMap.set(item.id, item); });
        }
        return _this;
    }
    JsonTodoCollection.prototype.addTodo = function (task) {
        var result = _super.prototype.addTodo.call(this, task);
        this.storeTasks();
        return result;
    };
    JsonTodoCollection.prototype.markComplete = function (id, complete) {
        _super.prototype.markComplete.call(this, id, complete);
        this.storeTasks();
    };
    JsonTodoCollection.prototype.removeComplete = function () {
        _super.prototype.removeComplete.call(this);
        this.storeTasks();
    };
    JsonTodoCollection.prototype.storeTasks = function () {
        this.database.set("tasks", __spreadArray([], __read(this.itemMap.values()))).write();
    };
    return JsonTodoCollection;
}(todoCollection_1.TodoCollection));
exports.JsonTodoCollection = JsonTodoCollection;
