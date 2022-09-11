export interface Job  {
    key: number,
    job: ()=> void;
}

export interface PrioriyQueue {
    insertAll:(jobs:Job[]) => void;
    insert:(job:Job)=> void
    maximum:() => Job
    extractMax:()=> Job
    increaseKey(x:Job,key:number):void
}