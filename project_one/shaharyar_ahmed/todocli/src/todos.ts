import * as low from 'lowdb'
import * as FileSync from 'lowdb/adapters/FileSync'

const adapter = new FileSync('todos.json')
const todos_json = low(adapter)


todos_json.defaults({todos: []}).write()
const Todo = todos_json.get('todos')

export {Todo}