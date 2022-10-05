let output=[];
let num=1;
function fizzbuzz(){
   
    for(let num=1;num<=100;num++){
        if(num%3===0 && num%5===0){
            output.push('fizzbuzz');
         }else if(num%3===0){
            output.push('fizz');
         }else if(num%5===0){
            output.push('buzz');
         } else{
            output.push(num);
         }
    }
    
     return output;
      };
      
console.log(fizzbuzz());

document.getElementById('test').innerHTML=output;

