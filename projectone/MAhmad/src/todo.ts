export class Todo {
    
    public constructor(public id: number, public name: string, public status : boolean = false) {
        
    }

    public printTodo(): void {
        console.log(`${this.id} \t ${this.name} \t ${this.status? 'Completed': 'Incomplete'}`);
    }

}