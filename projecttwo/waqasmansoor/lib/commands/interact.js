"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const db_1 = require("../database/db");
const inquirer = require("inquirer");
class Interact extends command_1.Command {
    async run() {
        const { args } = this.parse(Interact);
        const username = args.username;
        if (username) {
            if (db_1.tododb.userExist(username)) {
                inquirer.prompt({
                    type: "checkbox", name: "todo", message: "Update Todo",
                    choices: db_1.tododb.getTodosByUser(username, true).map(todo => ({
                        name: todo.name, value: todo.id, checked: todo.taskDone
                    }))
                }).then(answers => {
                    let completedTodo = answers["todo"];
                    db_1.tododb.taskDone(username, completedTodo);
                });
            }
            else {
                this.log("Sorry User does not exist");
            }
        }
        else {
            this.log("Please specify username");
        }
    }
}
exports.default = Interact;
Interact.description = 'Update Todos';
Interact.args = [{ name: 'username' }];
