// Kosul Yapilari
/*
if (condition) {
    
} else {
    
}
*/
let note = 65;
if (note>50) {
    console.log("You passed exam : " + note);
} else {
    console.log("You failed the exam : " + note);
}
let noteStudent10 = 45;
if (noteStudent10>50) {
    console.log("You passed exam : " + noteStudent10);
} else {
    console.log("You failed the exam : " + noteStudent10);
}

let ageA = prompt("Enter your age : ");
console.log(typeof ageA);
let ageB = Number(prompt("Enter your age : "));
console.log(typeof ageB);
let moneyA = prompt("Your budget : ");
let moneyB = prompt("Your budget : ");

if (ageB>18 && moneyB>3000 ) {
    alert("You can take the exam!");
} else {
    alert("You can't take the exam!") 
}
// not ortalamasini bulma
// vize1 30%, vize2 %30, final %40

let vize1 = Number(prompt("Vize1 notunu giriniz"));
let vize2 = Number(prompt("Vize2 notunu giriniz"));
let final = Number(prompt("Final notunu giriniz"));

let averageNote = (vize1*0.3) + (vize2*0.3) + (final*0.4);
if (averageNote>=60) {
    alert("You passed the class !");
    console.log("You passed the exam !");
} else {
    alert("You failed");
    console.log("You failed");
}