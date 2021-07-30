"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todocollection = void 0;
const itemtodo_1 = require("./itemtodo");
class todocollection {
    constructor(username, todotasks = []) {
        this.username = username;
        this.todotasks = todotasks;
        this.id = 1;
        this.itemMap = new Map();
        todotasks.forEach(item => this.itemMap.set(item.id, item));
    }
    addtodo(task) {
        //this.todotasks.push(new itemtodo(this.id,task));
        while (this.gettodobyid(this.id)) {
            this.id++;
        }
        this.itemMap.set(this.id, new itemtodo_1.itemtodo(this.id, task));
        return this.id;
    }
    gettodobyid(id) {
        return this.itemMap.get(id);
    }
    gettodoitems(incompletetasks) {
        return [...this.itemMap.values()]
            .filter(item => incompletetasks || !item.complete);
    }
    markcomplete(id, complete) {
        let newtask = this.gettodobyid(id);
        if (newtask.complete == false) {
            newtask.complete = true;
        }
    }
    removeCompleteitem() {
        this.itemMap.forEach(item => {
            if (item.complete) {
                this.itemMap.delete(item.id);
            }
        });
    }
    getitemcountss() {
        return { size: this.itemMap.size,
            incomplete: this.gettodoitems(false).length };
    }
}
exports.todocollection = todocollection;
