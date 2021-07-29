// export class Todo
// {
//     private taskID: number = 0;
//     private taskName: string;
//     private taskStatus: boolean;        
//     // public task_list:Todo[] = [];

    
//     public constructor(tId:number, t_Name:string, t_status?:boolean)
//     {           
//         this.taskID = tId;      
//         this.taskName = t_Name;
//         this.taskStatus = false;            

//         // in case if user explicitly provide status
//             if(t_status)
//                 { this.taskStatus = t_status;}
     
//         // in case if user don't provide status            
//             else
//                 {this.taskStatus = false;}
     
//     }

//     public returnTaskName(): string
//     {
//         return this.taskName;
//     }

//     public returnTaskID(): number
//     {
//         return this.taskID;
//     }

//     public returnTaskStatus(): boolean
//     {
//         return this.taskStatus;
//     }

//     public changeTaskStatus()
//     {
//         this.taskStatus = !this.taskStatus;
//     }

//     public displayTask()
//     {
//         console.log(`${this.taskID}\t${this.taskName}\t${this.taskStatus}`);
//     }

// }

export class TodoItem {
    constructor(public id: number,
                public task: string,
                public complete: boolean = false) {}
                
                
    printDetails() : void {
        console.log(`${this.id}\t${this.task} ${this.complete
            ? "\t(complete)": ""}`);
    }


    
}