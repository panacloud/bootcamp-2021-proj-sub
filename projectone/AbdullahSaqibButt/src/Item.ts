export class Item {
    constructor(public id : number ,  public task : string , public complete : boolean = false) {
        
    }

    /**
     * PrintDetails
  : void    */
    public PrintDetails() : void {
        console.log(`id = ${this.id }, \n task = ${this.task}, \n complete = ${this.complete} `)
    }
}