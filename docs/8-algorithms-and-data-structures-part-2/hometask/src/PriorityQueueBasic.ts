import { Job, PrioriyQueue } from "PriorityQueue";

const heapSort = (array) => {
    // code
    createMaxHeap(array, array.length);
    for (let i = 1; i < array.length; i++) {
      swap(0, array.length - i, array);
      createMaxHeap(array, array.length - i);
    }
    return array;
  };

  
  const swap = (index1:number, index2:number, array:any[]) => {
    [array[index1], array[index2]] = [array[index2], array[index1]];
    return array;
  };
  
  const createMaxHeap = (array:Job[], heapSize:number) => {
    // code
    for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
      heapify(array, i, heapSize);
    }

  };
  
  const heapify = (array:Job[], index:number, heapSize) => {
    // code
    const iLeft = 2 * index + 1;
    const iRight = 2 * index + 2;
    
    const iShortest = [index,iLeft,iRight].reduce((p,c)=>{
        return c < heapSize && p < heapSize && array[c].key < array[p].key ?c:p})

     if (iShortest !== index) {
        swap(iShortest, index, array);
        heapify(array,iShortest,heapSize);
       }

  };

  const heapifyBottomUp = (array: Job[], index:number, heapSize:number)=>
    {
    // Find parent
    const parent = Math.floor((index - 1) / 2) ;
 
    if (parent >= 0) {

        if ( array[parent].key > array[index].key) {
            swap(index, parent,array);
            // Recursively heapify the parent node
            heapifyBottomUp(array, parent,heapSize);
        }
    }
}

export class PriorityQueueBasic implements PrioriyQueue {
    jobsHeap:Job[]=[];
    private heapSize = 0;

    insert(job:Job){
        if(job){
            this.heapSize++;
            this.jobsHeap.push(job);
            heapifyBottomUp(this.jobsHeap,this.heapSize-1,this.heapSize)        
        }  
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



