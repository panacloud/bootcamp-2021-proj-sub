import { TodoItem } from "./todoItem";


type ItemCounts = {
    total: number,
    incomplete: number
    }

export class TodoCollection {
    private nextId: number = 1;
    protected itemMap = new Map<number, TodoItem>(); 
    // The JavaScript Map, for example, is a general-purpose collection that stores key/value pairs. formore details go to JavaScript Map in readme.md file
    
    
    constructor(public userName: string, todoItems: TodoItem[] = []) {
    todoItems.forEach(item => this.itemMap.set(item.taskId, item));
}

addTodo(task: string): number {    
    // The type information for the addTodo method tells the TypeScript compiler that the task parameter
    // must be a string and that the result will be a number.
    while (this.getTodoById(this.nextId)) {
    this.nextId++;
    }
    this.itemMap.set(this.nextId, new TodoItem(this.nextId, task));
    return this.nextId;
}

getTodoById(id: number) : TodoItem {
    return this.itemMap.get(id);
}

getTodoItems(includeComplete: boolean): TodoItem[] {
                        // The getTodoItems method gets the objects from the Map using its values method formore details go to getTodoItems in readme.md file
    return [...this.itemMap.values()]
    .filter(item => includeComplete || !item.complete); 
    // the compiler knows that the function passed to the filter
    // method will be processing TodoItem objects and knows that each object will define a complete property.
    
}

markComplete(id: number, complete: boolean) {
    // Completing a task is a two-stage process that requires the user to select the item they want to complete.formore details go to Marking Tasks Complete in readme.md file
    
    const todoItem = this.getTodoById(id);
    if (todoItem) {
    todoItem.complete = complete;
}
}

removeComplete() {
    // The removeComplete method uses the Map.forEach method to inspect each TodoItem formore details go to removeComplete in readme.md file
    this.itemMap.forEach(item => {
    if (item.complete) {
    this.itemMap.delete(item.taskId);
    }
})
}

getItemCounts(): ItemCounts {
    // The type keyword is used to create a type alias, which is a convenient way to assign a name to a shape type. formore details go to getItemCounts in readme.md file
    return {
    total: this.itemMap.size,
    incomplete: this.getTodoItems(false).length
    };
    }

}