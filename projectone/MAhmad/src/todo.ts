export class Todo {
    
    public constructor(public id: number, public name: string, public status : boolean = false) {
        
    }

    public printTodo(): void {
        console.log(`ID: ${this.id} \t Name: ${this.name} \t Status: ${this.status}`);
    }

}