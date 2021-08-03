import * as lowdb from 'lowdb';
import * as FileSync from 'lowdb/adapters/FileSync'

const adapter =new FileSync('tododb.json')
const data = lowdb(adapter)

data.defaults({todos:[]}).write()
const Todos =data.get('todos')



export {
data,
Todos
}
