import {Command, flags} from "@oclif/command"

import {Todo} from "./../todos"

var ID = function () {
    
return '_' + Math.random().toString(36).substr(2, 9);

};

export default class Add extends Command {
    static description = "Adds a new todo";

    static flags = {
        
        new_task: flags.string({char: 'n', description: 'a new task'}),
    }

    async run() {
        
        const { flags : {new_task} } = this.parse(Add)

        const result = await Todo.push({
            task: new_task,
            id: ID(),
            done: false,

        }).write();

        this.log(`Added new todo ${new_task}`)
    }

}