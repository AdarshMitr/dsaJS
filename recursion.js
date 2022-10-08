//Recursion: When function calls itself
//otherwise it will get called for infinite time
// If a function call itself then there must be an end point

let counter=1;
function demo(number){
    if(counter>number){
        return;
    }
    
    console.log('Like me'+counter)
    counter++;
    demo(number);//recursion function

}
demo(10); //calling

// the function will be called 10 times 

