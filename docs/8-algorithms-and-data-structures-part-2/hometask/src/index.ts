import { PrioriyQueue } from './interface/PriorityQueue';
import { CircularPriorityQueue } from './PriorityQueue/CircularPriorityQueue';
import { GenerateJobs, getRandomInt } from './Utils/Utils';


console.log("*** Circular job runner ***")

const circularPriorityQueue: PrioriyQueue = new CircularPriorityQueue();
const jobs = GenerateJobs(1000,1000,100);
circularPriorityQueue.insertAll(jobs)

while(circularPriorityQueue.maximum()){
  const currentJob = circularPriorityQueue.extractMax();
  if(currentJob !== undefined){
  const {isDone} = currentJob.job();
  if(isDone){
    circularPriorityQueue.remove(currentJob)
  }

  }

 //Increase the key of randon job randomly 
 const jobToIncrease = jobs[getRandomInt(jobs.length - 1)]
  circularPriorityQueue.increaseKey(jobToIncrease,jobToIncrease.key + getRandomInt(100));
}

console.log("*** All jobs were removed ***")





