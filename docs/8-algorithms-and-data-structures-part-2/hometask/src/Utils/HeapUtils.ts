export type HasKey = {key:number}

export const heapSort = (array) => {
    // code
    createMaxHeap(array, array.length);
    for (let i = 1; i < array.length; i++) {
      swap(0, array.length - i, array);
      createMaxHeap(array, array.length - i);
    }
    return array;
  };

  export const swap = (index1:number, index2:number, array:any[]) => {
    [array[index1], array[index2]] = [array[index2], array[index1]];
    return array;
  };
  
  export const createMaxHeap = (array:HasKey[], heapSize:number) => {
    // code
    for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
      heapify(array, i, heapSize);
    }

  };
  
  export const heapify = (array:HasKey[], index:number, heapSize) => {
    // code
    if(index < 0){
      return
    }
    const iLeft = 2 * index + 1;
    const iRight = 2 * index + 2;
    
    const iShortest = [index,iLeft,iRight].reduce((p,c)=>{
        return index < heapSize && c < heapSize && p < heapSize && array[c].key < array[p].key ?c:p})
        
     if (iShortest !== index) {
        swap(iShortest, index, array);
        heapify(array,iShortest,heapSize);
       }

  };

  export const heapifyBottomUp = (array: HasKey[], index:number, heapSize:number)=>
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