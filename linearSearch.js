const users=[{username:'Amit',email:'amitxyz@gmail.com'},
{username:'Sneha', email:'sneha456@gmail.com'},
{username:'Babu', email:'babubhai21@gmail.com'}];

function isUserExist(arr,val){
    for(let item of arr){
        if(item['username']===val){
            return true;
        }
    }
    return false;
}

const res=isUserExist(users,'Babu');
console.log(res);