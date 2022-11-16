function toHexadecimal(number){
    let decimal = number;
    let dec = 0;
    let result = "";
    let letters = "ABCDEF";

    if(number < 16){
        result = number;
    }
    else{
    while(decimal){
        if(Math.floor(decimal%16) < 10){
            dec = Math.floor(decimal%16);
            result = dec + result;
            decimal = Math.floor(decimal/16);
        }
        else {
            result = letters[(decimal%16)-10] + result;
            decimal = Math.floor(decimal/16);
        }
      }
    }   
    return result;
}

module.exports = {
    toHexadecimal: toHexadecimal
}