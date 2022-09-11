import { Job, PrioriyQueue } from "../interface/PriorityQueue";
import { PriorityQueueBasic } from "./PriorityQueueBasic";


/**
 * CircularPriorityQueue uses Priority Queue Basic
 */
export class CircularPriorityQueue  implements PrioriyQueue{
    initialJobsHeap:PrioriyQueue =  new PriorityQueueBasic()
    secondJobsHeap:PrioriyQueue = new PriorityQueueBasic()

    insert(job:Job){
       this.initialJobsHeap.insert(job)
    }

    insertAll(jobs:Job[]){
        this.initialJobsHeap.insertAll(jobs)
     }

    maximum() {
       return this.initialJobsHeap.maximum() || this.secondJobsHeap.maximum();
    }

    extractMax(){
        const job = this.initialJobsHeap.extractMax();
        if(job !== undefined){
            // TODO, in future if we have performance issues we could try to only push on the jobsHeap 
            // as it may alreay fullfill heap condition
            this.secondJobsHeap.insert(job);
           // console.log({job})
            return job;
        } else {
            const secondJob = this.secondJobsHeap.extractMax();
            if( secondJob !== undefined){
            this.initialJobsHeap = this.secondJobsHeap;
            this.secondJobsHeap = new PriorityQueueBasic();
            
            //Reinsert the recent extracted
            this.secondJobsHeap.insert(secondJob);
            return secondJob;    
            }
        }
      
    }
    increaseKey(x:Job,key:number){
        if(x && key > x.key){
        if(this.initialJobsHeap.maximum) this.initialJobsHeap.increaseKey(x,key)  
        if(this.secondJobsHeap.maximum) this.secondJobsHeap.increaseKey(x,key)
        }
     
    }
    
}