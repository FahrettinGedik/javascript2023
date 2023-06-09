// mantiksal operatorler
/*

    &&  and
    ||  or
    !   not

*/
myArray = []
let ageA = 38;
let moneyA = 3000;
let healtA = true;
let healtC = false;
let numberToTry = 2;

console.log("Ehliyet alabilirsin : " +(ageA>18&&moneyA>4000&&healtA==true));

let age = 40;
let money = 5000;
let healt = true;

console.log("Ehliyet alabilirsin : " +(age>18&&money>4000&&healt==true));

// || or
console.log((5>2)||(2>3));
console.log(!(5>2)||(2>3));
console.log(!(5>2)||!(2>3));

console.log(!(5>2));

console.log( (money>3000 && numberToTry>1) || (ageA>18 && healtC) );

