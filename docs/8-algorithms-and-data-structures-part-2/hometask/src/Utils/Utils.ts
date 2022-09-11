/**
 * Helper function to genereate randomInt
 * @param max 
 * @returns 
 */

export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  

  /**
   * Helper fucntion to generate basic job wich prints its priorirty
   * @param key 
   * @param initialIndex 
   * @returns 
   */
  export const createJob = (key:number, initialIndex:number, maxSteps?: number) => {
    let step =  0;
    return  {key,job:function(){
      const isDone = maxSteps ? step > maxSteps: false
      if(!isDone) console.log(`I am job, and I am running with priority ${this.key},  I had initial index: ${initialIndex},step:${step++}` );
      return {
        step: step,
        isDone,
      }
    }}
  }

  /**
   * Generate jobs
   * @param numberOfJobs 
   * @param maxPriority 
   * @param maxSteps : number of steps to set the job as done
   * @returns 
   */
  export const GenerateJobs =  (numberOfJobs: number,maxPriority:number,maxSteps:number) =>  new Array(numberOfJobs).fill(0).map((v,i)=> createJob(getRandomInt(maxPriority),i,maxSteps))

  