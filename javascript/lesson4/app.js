document.writeln("Helolom World");
// Veri Tipleri
/*
1-String
2-Number
3-Boolean
4-Null
5-Undefined
6-Object
7-Function
*/
let nameF = "Fahrettin Gedik 47 yasindadir";
console.log(nameF);
console.log(typeof nameF);

let number1 = 10;
let number2 = 5;
let number3 =10.5;

sum12 = number1 + number2;
console.log(sum12);
console.log(typeof sum12);
console.log(typeof number3);



let a = "5";
let b = "2";
console.log(typeof a);
console.log(a+b);

// Yasiniz : 47 dir.
let statement = "Yasiniz : ";
let age = 47;
console.log(statement + age);

// Boolean : true ve false 
console.log(5<3);
console.log(5>3);
let bigger = 5>3;
console.log(typeof bigger);

let a1 = 3;
let b1 = 12;

let resultTotal = a1+b1;
console.log(resultTotal);
console.log(resultTotal>20);
console.log(resultTotal<20);
console.log(resultTotal==20);
console.log(resultTotal==15);
console.log(resultTotal!=15);
console.log(resultTotal!=20);


let f = null; // bos empty

f = 47;
console.log(f);

// undefined
let g;
console.log(g);
console.log(typeof g);

// object
let human = {
    nameHuman:"Fahri",
    surName:"Gedik",
    ageHuman: 47
}
console.log(human);
console.log(typeof human);

let numberList= [1,2,3,4,5,6,7,8];
console.log(numberList);
console.log(typeof human);
console.log(typeof numberList);


let myFunction = function(){
    console.log("Hello");
}
console.log(typeof myFunction);
myFunction()