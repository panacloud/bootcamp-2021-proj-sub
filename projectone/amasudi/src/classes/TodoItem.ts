export class TodoItem {

    public constructor(public id: number, public todo: string, public complete: boolean = false) {

    }

    public printDetails = (): void => {
        console.log(`${this.id}\t${this.todo}\t\t${this.complete}`);
    }
}