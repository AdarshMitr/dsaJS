/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    
arr.sort((a,b)=>a-b);
let max=arr[arr.length-1];
let min=arr[0];
let sum=0;
for(let i=0;i<arr.length;i++){
    sum+=arr[i];
}

let sumMin=sum-max;

let sumMax=sum-min;
return [sumMin,sumMax];
}

let output= miniMaxSum([1,2,0,4,5]);

document.getElementById('test').innerHTML=output;