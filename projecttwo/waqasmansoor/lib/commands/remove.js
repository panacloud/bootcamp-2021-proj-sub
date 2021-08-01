"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const db_1 = require("../database/db");
class Remove extends command_1.Command {
    async run() {
        const { args } = this.parse(Remove);
        const username = args.username;
        const index = args.index;
        if (username) {
            if (db_1.tododb.userExist(username)) {
                this.log(db_1.tododb.removeTodo(username, index));
            }
            else {
                this.log("Sorry user does not exist");
            }
        }
        else {
            this.log("Please Specify user name");
        }
    }
}
exports.default = Remove;
Remove.description = 'Remove Todo';
Remove.args = [{ name: 'username' }, { name: "index" }];
