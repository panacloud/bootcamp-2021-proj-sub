import { TodoItem } from "./todoItem"
import { TodoList } from "./todoList"
import * as lowbd from "lowdb"
import * as FileSync from "lowdb/adapters/FileSync"

//----------------------------------------------------------definined  pattren to store data
type schemaType = {
    tasks: {
        id: number,
        task: string,
        complete: boolean
    }[]
}
//--------------------------------------------------------------------------------store data in json
export class JsonTodoList extends TodoList {
    private database: lowbd.LowdbSync<schemaType>
    constructor(public userName: string, todoItems: TodoItem[]) {

        super(userName, [])
        this.database = lowbd(new FileSync("Todos.Json"))
        if (this.database.has("tasks").value()) {
            let dbitems = this.database.get("tasks").value()
            dbitems.forEach(item => this.itemMap.set(item.id, new TodoItem(item.id, item.task, item.complete)))
        }
        else {
            this.database.set("tasks", todoItems).write();
            todoItems.forEach(item => this.itemMap.set(item.id, item))
        }
    }

    //-------------------------------------------------------------------store todo to database
    private storeTasks() {
        this.database.set("tasks", [...this.itemMap.values()]).write();
    }
//---------------------------------------------=---------------------------------------add todo
    addTodo(task: string): number {
        let result = super.addTodo(task)
        this.storeTasks()
        return result
    }
    //----------------------------------------------------------------------------------task compeltion in jason
    markComplete(id: number, complete: boolean): void {
        super.markComplete(id, complete);
        this.storeTasks();
    }
    //-------------------------------------------------------------------------------------removing todo
    removeComplete(): void {
        super.removeComplete();
        this.storeTasks();
    }
    //--------------------------------------------------------------------------------------------update todo 
    updateTodo(id: number,item:TodoItem):void{
        super.updateTodo(id,item);
        this.storeTasks()
    }

}