"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.item = void 0;
class item {
    constructor(id, name, task_completion = false) {
        this.id = id;
        this.name = name;
        this.task_completion = task_completion;
    }
    print() {
        console.log(`${this.id}\t ${this.name}\t ${this.task_completion ? "Completed" : ""}`);
    }
}
exports.item = item;
