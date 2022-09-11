import { Job, PrioriyQueue } from "../interface/PriorityQueue";
import { heapify, heapifyBottomUp, swap } from "../Utils/HeapUtils";

/**
 * Basic Priority queue, it is not circular
 */
export class PriorityQueueBasic implements PrioriyQueue {
    jobsHeap:Job[]=[];
    protected heapSize = 0;

    insert(job:Job){
        if(job){
            this.heapSize++;
            this.jobsHeap.push(job);
            heapifyBottomUp(this.jobsHeap,this.heapSize-1,this.heapSize)        
        }  
    }

    insertAll(jobs:Job[]){
       jobs.forEach(job => this.insert(job))
     }

    maximum() {
        return this.jobsHeap?this.jobsHeap[0]:undefined;
    }

    extractMax(){
        if(this.jobsHeap.length === 0)
        { return undefined}
        swap(0,this.heapSize-1,this.jobsHeap)
        this.heapSize--;
      
        const jop = this.jobsHeap.pop();
        heapify(this.jobsHeap,0,this.heapSize)
        return jop;
    }
    increaseKey(x:Job,key:number){
        if(x && key > x.key ){
        x.key = key
        const index = this.jobsHeap.indexOf(x);
        heapify(this.jobsHeap,index,this.heapSize);
        heapifyBottomUp(this.jobsHeap,index,this.heapSize)
        }      
    }
}









