"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
class Hello extends command_1.Command {
    async run() {
        var _a;
        const { args, flags } = this.parse(Hello);
        const name = (_a = flags.name) !== null && _a !== void 0 ? _a : 'world';
        this.log(`hello ${name} from ./src/commands/hello.ts`);
        if (args.file && flags.force) {
            this.log(`you input --force and --file: ${args.file}`);
        }
    }
}
exports.default = Hello;
Hello.description = 'describe the command here';
Hello.examples = [
    `$ todocli hello
hello world from ./src/hello.ts!
`,
];
Hello.flags = {
    help: command_1.flags.help({ char: 'h' }),
    // flag with a value (-n, --name=VALUE)
    name: command_1.flags.string({ char: 'n', description: 'name to print' }),
    // flag with no value (-f, --force)
    force: command_1.flags.boolean({ char: 'f' }),
};
Hello.args = [{ name: 'file' }];
