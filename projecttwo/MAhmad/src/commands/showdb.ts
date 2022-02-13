import {Command} from '@oclif/command'
import todoAPI from '../api/todoAPI'

export default class Showdb extends Command {
  static description = 'Command to show db file'

  async run() {
    todoAPI.showdb();
  }
}
