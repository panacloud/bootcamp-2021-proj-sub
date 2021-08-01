"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const db_1 = require("../database/db");
class Add extends command_1.Command {
    async run() {
        const { args, flags } = this.parse(Add);
        const username = args.username;
        const newTodo = args.todoname;
        if (username) {
            if (newTodo) {
                if (db_1.tododb.userExist(username)) {
                    if (flags.done) {
                        db_1.tododb.addUserTodo(username, newTodo, true);
                    }
                    else {
                        db_1.tododb.addUserTodo(username, newTodo);
                    }
                    this.log("Successfully added todo");
                }
                else {
                    this.log("Sorry User does not exist");
                }
            }
            else {
                this.log("Please specify Todo to add");
            }
        }
        else {
            this.log("Please specify username");
        }
    }
}
exports.default = Add;
Add.description = 'Add todo';
Add.args = [{ name: 'username' }, { name: 'todoname' }];
Add.flags = {
    done: command_1.flags.boolean({ char: 'd' })
};
