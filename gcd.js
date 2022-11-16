//num1 = 21;
//num2 = 14;


function GCD(num1, num2){
    
    function resultGCD(num1, num2){
        let result = 0;
        while((num2%num1) !== 0){
            result = num2%num1;
            num2 = num1;
            num1 = result;
        }
        return result;
    }

    if(num1 === num2){
        result = num1;
    }
    else if(num1 > num2){
        if(num1%num2 === 0){
            result = num2;
        }
        else{ 
            result = resultGCD(num2, num1);
        }
    }
    else if(num1 < num2){
        if(num2%num1 === 0){
            result = num1;
        }
        else {
            result = resultGCD(num1, num2);
        }
    }
    return result;
}


console.log(GCD(21,14))