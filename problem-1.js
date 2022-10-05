//Check Sum Zero- Problem-1
//[-5,-4,-3,-2,0,2,4,6,8] -> Input
let array=[-5,-4,-3,-2,0,2,4,6,8];

function sumPairZero(arr){
    for(let el of arr){
        console.log('Outer array');
        for(let j=1;j<arr.length;j++){
            console.log('inner array');
            if(el+ arr[j]===0){
                return [el,arr[j]];
            }
        }
    }
};


document.getElementById('test').innerHTML=sumPairZero(array);