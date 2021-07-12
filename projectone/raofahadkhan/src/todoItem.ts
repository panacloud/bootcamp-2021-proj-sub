export class TodoItem {
	public constructor(
		public id: number,
		public task: string,
		public complete: boolean = false
	) {
		// no code required because of typescripts concise code syntax
	}

	printDetails(): void {
		console.log(
			`${this.id}\t${this.task}\t ${this.complete ? "\t(complete)" : ""} `
		);
	}
}
