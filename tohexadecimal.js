function toHexadecimal(number){
    let arr = number;
    let dec = 0;
    let result = "";
    let letters = "ABCDEF";

    if(number < 16){
        result = number;
    }
    else{
    while(arr){
        if(Math.floor(arr%16) < 10){
            dec = Math.floor(arr%16);
            result = dec + result;
            arr = Math.floor(arr/16);
        }
        else {
            result = letters[(arr%16)-10] + result;
            arr = Math.floor(arr/16);
        }
      }
    }   
    return result;
}

module.exports = {
    toHexadecimal: toHexadecimal
}