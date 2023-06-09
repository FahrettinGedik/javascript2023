document.writeln("Hellom World");
// var-let-const
// Degisken nedir?
// var-let-const variable = valueVariable:
// let numberAge = 10;
// var : function scope... ram bellekte cok fazla yer kaplar.

// let-const : block scope ozelligine sahiptir


function sumTotal() {
    var sumA = 10 + 15; // function scope
    console.log(sumA)
    if (true) {
        var b = 20;
    }
    console.log(b);
    console.log(sumA);
}
sumTotal();

function sumTotalOther() {
    var sumB = 10 + 15; // function scope
    console.log(sumB)
    if (true) {
        let d = 23;
        console.log(d);
    }
    // console.log(d); // hata veriyor.
    console.log(sumB);
}
sumTotalOther();

var e = 5;
var e = 10;
console.log(e);

// let f = 5;
// let f = 10;
// console.log(f);
if (true) {
    let a = 5;
    let b = 10;
    console.log(a);
}

// let & const arasindaki fark
// const (constant) : sabit, degismez

const a = 10;
// a = 15; // hata veriyor
console.log(a);

let b = 7;
b = 5; // hata vermez
console.log(b);

const user = {
    userName: 'fahri',
    password: '123'
}
console.log(user);
user.userName = 'fahri gedik';
console.log(user);

let userSecond = {
    userName: 'fahri',
    password: '123'
}
console.log(userSecond);

userSecond = {};
console.log(userSecond);
userSecond = {age: 23};
console.log(userSecond);

