//Check Sum Zero- Problem-1
//[-5,-4,-3,-2,0,2,4,6,8] -> Input
let array=[-5,-4,-3,-2,0,2,4,6,8];

function sumPairZero(arr){
  let left =0;
  let right= arr.length-1;

  while(left<right){
    sum= arr[left]+arr[right];
    if(sum===0){
        return [arr[left],arr[right]];
    }else if(sum>0){
        right--;
    }else{
        left++;
    }
  }
};


document.getElementById('test').innerHTML=sumPairZero(array);