export class TodoItem {
  constructor(
    public id: number,
    public todo: string,
    public isComplete?: boolean
  ) {}
}
