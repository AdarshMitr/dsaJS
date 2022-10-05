//Who is buying lunch


let names=["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whosPaying(names) {
    
    /******Don't change the code above*******/
        
        //Write your code here.
       names=names[Math.floor(Math.random()*(names.length))];
       
       let whoPay=names+' is going to buy lunch today!'
        return whoPay;
        
        
    
    
    /******Don't change the code below*******/    
    }
    console.log(whosPaying(names));