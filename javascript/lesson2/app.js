// var-let-const
/*
SCOPE
Global Scope
Function Scope
Block Scope
*/

var variableName = 10;
console.log(variableName);


var a= 5;

if (a>3) {
    var b=10;
    console.log(a)
    
}
function nameGlobal() {
    console.log(a)
    var c = 15;
}
nameGlobal()
nameGlobal()
console.log(b);
// console.log(c);
sumTotal = 0;
function sumMethod() {
    var d = 50;
    var e = 20;
    sumTotal = d+e;
}
console.log(sumTotal);
sumMethod();
console.log(sumTotal);

// Block Scope

function name(params) {
    var a = 5; // function scope
    if (condition) {
        var b = 15; // block scope
    }
    
    while (condition) {
        
    }

    if (condition) {
        
    }
}