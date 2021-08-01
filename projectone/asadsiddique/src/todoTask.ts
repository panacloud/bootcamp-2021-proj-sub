export class todoTask {
  public constructor(
    public id: number,
    public task: string,
    public isCompleted: boolean = false
  ) {
    this.id = id;
    this.task = task;
    this.isCompleted = isCompleted;
  }

  public printDetails() {
    console.log(`${this.id}\t${this.task}\t${this.isCompleted}`);
  }
}
