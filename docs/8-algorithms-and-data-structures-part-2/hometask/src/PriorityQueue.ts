export interface Job  {
    key: number,
    job: ()=> void;
}

export interface PrioriyQueue {
    insert:(job:Job)=> void
    maximum:() => Job
    extractMax:()=> Job
    increaseKey(x:Job,key:number):void
}