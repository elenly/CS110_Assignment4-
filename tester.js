const factorial = require('./factorial.js').factorial;
const GCD = require('./gcd.js').GCD;
const LCM = require('./lcm.js').LCM;
const hex = require('./tohexadecimal.js').toHexadecimal;

let num = 5;
console.log(num + "! = " + factorial(num));

let num1 = 27;
let num2 = 18;
console.log("gcd(" + num1 + ", " + num2 + ") = " + GCD(num1, num2));
console.log("lcm(" + num1 + ", " + num2 + ") = " + LCM(num1, num2));

let number = 1452;
console.log("Hexadecimal of " + number + " is " + hex(number));