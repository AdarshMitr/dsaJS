// Bubble Sort
// A Sorting Algorithm when the largest values bubble up at the top

function bubbleSort(array) {
    for (let i = array.length; i > 0; i--) {
        let isSwapped;
        for (let j = 0; j < i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
                isSwapped=true;
            }
        }
        if(!isSwapped){
            break;
        }
    } 
    return array;
}
const res = bubbleSort([5, 3, 4, 1, 2, 8, 6, 7]);
console.log(res);


//The bubble script runs as follows:
/*
  [5,3,4,1,2,8,6,7]
  [3,5,4,1,2,8,6,7]
  [3,4,5,1,2,8,6,7]
  [3,4,1,5,2,8,6,7]
  [3,4,1,2,5,8,6,7]
  [3,4,1,2,5,6,8,7]
  [3,4,1,2,5,6,7,8]
  [3,1,4,2,5,6,7,8]
  [3,1,2,4,5,6,7,8]
  [1,3,2,4,5,6,7,8]
  [1,2,3,4,5,6,7,8] 
*/