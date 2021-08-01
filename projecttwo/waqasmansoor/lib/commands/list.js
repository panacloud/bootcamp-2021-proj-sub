"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const db_1 = require("../database/db");
const Table = require('cli-table');
class List extends command_1.Command {
    async run() {
        const table = new Table({
            head: [
                'index', 'todo', 'status'
            ]
        });
        const { args } = this.parse(List);
        const username = args.username;
        if (username) {
            if (db_1.tododb.userExist(username)) {
                const todos = db_1.tododb.getTodosByUser(username, true);
                for (let i = 0; i < todos.length; i++) {
                    const todo = todos[i];
                    table.push([todo.id, todo.name, todo.taskDone ? "Done" : "Not Done"]);
                }
            }
            else {
                this.log("Sorry User does not exist");
            }
            console.clear();
            this.log(table.toString());
        }
        else {
            console.log("Please specify user name");
        }
    }
}
exports.default = List;
List.description = 'Show Todos';
List.args = [{ name: 'username' }];
