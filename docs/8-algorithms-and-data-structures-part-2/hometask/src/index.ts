import { PrioriyQueue } from 'PriorityQueue';
import { PriorityQueueBasic } from './PriorityQueueBasic';
console.log("Hello")


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const createJob = (key:number, initialIndex:number) => {
  let step =  0;
  return  {key,job:function(){
    console.log(`I am job 1, and I am running with priority ${this.key},  I had initial index: ${initialIndex},step:${step++}` );
  }}
}

const jobs = new Array(1000).fill(0).map((v,i)=> createJob(getRandomInt(10000),i))

const priorityQueue: PrioriyQueue = new PriorityQueueBasic();

 while(true){

jobs.forEach(job => {
  priorityQueue.insert(job)
})

let currentJob = priorityQueue.extractMax();

while(currentJob){
  currentJob.job()

  // if(Math.random()> 0.5){
  //   const job = priorityQueue.maximum();
  //   if(job){priorityQueue.increaseKey(job,job.key+1)}
  // }
  currentJob = priorityQueue.extractMax();
}


}




