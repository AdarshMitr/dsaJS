const arr= [8,2,4,1,3];

// Steps
//1. consider 2nd element, arr[1]->start of the loop
//2 while(j>curr) ->swapping will be performed

const sorted=(arr)=>{
    for (let i=1; i<arr.length;i++){
        let curr=arr[i]; //2
        let j=i-1;//0
        while(j>=0 && arr[j]>curr){
            arr[j+1]=arr[j]; // tmp [8,8,4,1,3]
            j--;
        }
        arr[j+1]=curr; //[2,8,4,1,3];
    }
    return arr;
}
const res=sorted(arr);
console.log(res);

//1st iteration //[2,8,4,1,3];
//2nd iteration :[2,4,8,1,3];
