"use strict";
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
exports.TodoCollection = void 0;
var todoItem_1 = require("./todoItem");
var TodoCollection = /** @class */ (function () {
    function TodoCollection(userName, todoItems) {
        var _this = this;
        if (todoItems === void 0) { todoItems = []; }
        this.userName = userName;
        this.nextId = 1;
        this.itemMap = new Map();
        todoItems.forEach(function (item) { return _this.itemMap.set(item.id, item); });
    }
    TodoCollection.prototype.addTodo = function (task) {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        this.itemMap.set(this.nextId, new todoItem_1.TodoItem(this.nextId, task));
        return this.nextId;
    };
    TodoCollection.prototype.getTodoById = function (id) {
        return this.itemMap.get(id);
    };
    TodoCollection.prototype.getTodoItems = function (includeComplete) {
        return __spreadArray([], __read(this.itemMap.values())).filter(function (item) { return includeComplete || !item.complete; });
    };
    TodoCollection.prototype.markComplete = function (id, complete) {
        var todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.complete = complete;
        }
    };
    TodoCollection.prototype.removeComplete = function () {
        var _this = this;
        this.itemMap.forEach(function (item) {
            if (item.complete) {
                _this.itemMap["delete"](item.id);
            }
        });
    };
    TodoCollection.prototype.getItemCounts = function () {
        return {
            total: this.itemMap.size,
            incomplete: this.getTodoItems(false).length
        };
    };
    return TodoCollection;
}());
exports.TodoCollection = TodoCollection;
