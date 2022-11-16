let GCD = require('./gcd.js').GCD;

function LCM(num1, num2){

    lcm = num1*num2/GCD(num1, num2);

    return lcm;
}

//console.log(LCM(num1, num2))
module.exports = {
    LCM: LCM
}