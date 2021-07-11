
class Todos {
    constructor(public items: Array<Object>) {

    }

    public push(task: string | undefined, id: number) {
        this.items.push({
            task: task,
            id: id,
        });
    }
}

let todos = new Todos(new Array());

export { todos };
