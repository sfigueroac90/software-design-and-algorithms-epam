export interface Job  {
    key: number,
    job: ()=> void | any;
}

export interface PrioriyQueue {
    insertAll:(jobs:Job[]) => void;
    insert:(job:Job)=> void
    maximum:() => Job
    extractMax:()=> Job
    remove:(job:Job)=>void
    increaseKey(x:Job,key:number):void
}