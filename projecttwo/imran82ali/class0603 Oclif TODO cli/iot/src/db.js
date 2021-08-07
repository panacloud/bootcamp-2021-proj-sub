"use strict";
exports.__esModule = true;
exports.Todo = exports.db = void 0;
var low = require("lowdb");
var FileSync = require("lowdb/adapters/FileSync");
var adapter = new FileSync('db.json');
var db = low(adapter);
exports.db = db;
// Set some defaults (required if your JSON file is empty)
db.defaults({ todos: [] }).write();
var Todo = db.get('todos');
exports.Todo = Todo;
