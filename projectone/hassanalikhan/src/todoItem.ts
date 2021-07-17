export class TodoItem {
  // No need to define variables in the start
  // Can be defined in the constructor

  public constructor(
    public id: number,
    public task: string,
    public complete: boolean = false
  ) {
    // no statements required here
    // TS compiler will auto genrate these
  }

  // Method to display details of a todo item in the console
  printDetails(): void {
    console.log(
      `ID : ${this.id}\t\tTask : ${this.task}\t\tCompleted : ${
        this.complete ? "Yes" : "No"
      }`
    );
  }
}
