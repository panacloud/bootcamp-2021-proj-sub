"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
class Item {
    constructor(id, task, complete = false) {
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    /**
     * PrintDetails
  : void    */
    PrintDetails() {
        console.log(`id = ${this.id}, \n task = ${this.task}, \n complete = ${this.complete} `);
    }
}
exports.Item = Item;
