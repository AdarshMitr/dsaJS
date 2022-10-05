// Find the index of a given number'12' in a sorted array
//[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
//index->output

function searchAlgo(array,num){
    let min=0;
    let max=array.length-1;
    while(min<=max){
        let midIndex=Math.floor((min+max)/2);
        if(array[midIndex]<num){
            min=midIndex+1;
        }else if(array[midIndex]>num){
           max=midIndex-1; 
        }else{
            return midIndex;
        }
    }//while(min<=max){
    return -1;
}//function searchAlgo(array,num){

const result=searchAlgo([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],12);

console.log(result);




//direct function to find index of element
//console.log([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].indexOf(13))