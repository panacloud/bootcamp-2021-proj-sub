"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const db_1 = require("../database/db");
class Create extends command_1.Command {
    async run() {
        const { args } = this.parse(Create);
        const username = args.username;
        if (username) {
            if (db_1.tododb.createTodoList(username)) {
                this.log(`Successfully created ${username} todo list`);
            }
            else {
                this.log("User already exist");
            }
        }
        else {
            this.log("Please specify user name");
        }
    }
}
exports.default = Create;
Create.description = 'Create new user todo list';
Create.args = [{ name: 'username' }];
