import {Command, flags} from "@oclif/command"

import {todos} from "./../todos"

export default class Add extends Command {
    static description = "Adds a new todo";

    private static nextId: number = 1;

    static flags = {
        new_task: flags.string({char: 'n', description: 'task'}),
    }

    async run() {
        const { flags : {new_task} } = this.parse(Add)

        todos.push(new_task, Add.nextId);

        Add.nextId++;
        
        this.log(new_task, Add.nextId);
    }

}