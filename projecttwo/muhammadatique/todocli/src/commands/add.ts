import {Command} from '@oclif/command';



export default class Add extends Command{
  static description="This will add new ToDo in list"
  static args =[{name:'todo'}]

  async run(){
    const {args}=this.parse(Add)
    const todo = args.todo

    if(todo){
      this.log(`[Success] Added new Task:${todo}`)
    }
    else{
      this.error('Please specify the New Todo')
    }
  }
}






























// import {Command, flags} from '@oclif/command'

// export default class Add extends Command {
//   static description = 'describe the command here'

//   static flags = {
//     help: flags.help({char: 'h'}),
//     // flag with a value (-n, --name=VALUE)
//     name: flags.string({char: 'n', description: 'name to print'}),
//     // flag with no value (-f, --force)
//     force: flags.boolean({char: 'f'}),
//   }

//   static args = [{name: 'file'}]

//   async run() {
//     const {args, flags} = this.parse(Add)

//     const name = flags.name ?? 'world'
//     this.log(`hello ${name} from /media/muhammad-atique/New Volume/bootcamp2021/bootcamp projects/todocli/src/commands/add.ts`)
//     if (args.file && flags.force) {
//       this.log(`you input --force and --file: ${args.file}`)
//     }
//   }
// }
