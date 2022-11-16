const num =5;

function factorial(num){
    
    let factorial = 1;

    for(let count = 2; count <= num; count++){
        factorial *= count; 
    }
    return factorial;
}

console.log(factorial(num))
