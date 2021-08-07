import {Command, flags} from "@oclif/command"

import {DataHandler} from '../utils'

const ID = () => {
    
return '_' + Math.random().toString(36).substr(2, 9);

};

export default class Add extends Command {
    static description = "Adds a new todo";

    static flags = {
        
        new_task: flags.string({char: 'n', description: 'a new task'}),
    }

    async run() {
        
        const {flags} = this.parse(Add)

        const data = DataHandler.db.getData('/')
        
        if (flags.new_task !== undefined) {
            if (flags.new_task in data) {
                throw Error('Todo already exists!')
            }
        }

        DataHandler.db.push(`/${flags.new_task}`, {done: false}, false)
        this.log(`Added new todo ${flags.new_task}`)
    }
}
