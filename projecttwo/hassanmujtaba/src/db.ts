import * as low from 'lowdb'
import * as FileSync from 'lowdb/adapters/FileSync'

const adapter = new FileSync('db.json')
const db = low(adapter)

// Set some defaults (required if your JSON file is empty)
db.defaults({todos: []}).write()
const Todo: any = db.get('todos')

export {
  db,
  Todo,
}
