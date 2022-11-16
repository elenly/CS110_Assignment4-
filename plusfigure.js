function plusfigure(s, p){
    let string = "";
    for(let i = 0; i < s; i++){
        string += " ";
    }
    for(let j = 0; j < p; j++){
        string += "+";
    }
    return string;
}

const num = 5;

let space = num - 1;

while(space >= 0){
    let plus = num - space;
    console.log(plusfigure(space, plus));
    space--;
}