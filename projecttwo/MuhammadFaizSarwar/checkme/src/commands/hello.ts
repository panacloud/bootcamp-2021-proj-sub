import {Command, flags} from '@oclif/command'

export default class Hello extends Command {
  static description = 'describe the command here'

  static examples = [  // --help jb call huga tb print huga ye
    `$ todo hello
hello world from ./src/hello.ts!
`,
  ]

  static flags = {   // prints when --help is called as options available 
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]   //setting name as arg

  async run() {
    const {args, flags} = this.parse(Hello)

    const name = flags.name ?? 'world'
    this.log(`hello ${name} from ./src/commands/hello.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
