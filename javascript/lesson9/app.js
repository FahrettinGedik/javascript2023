// Diyalog Kutulari
/*
    - Alert
    - Prompt
    - Confirm
*/

console.log(window);

window.alert();
alert();

window.prompt();
prompt();

window.confirm();
confirm();

alert("Save your changes");
console.log();

let myName = prompt("Enter your name : ");
let myAge = prompt("Enter your age : ");
console.log("Your Name : " + myName);
console.log("Your Age : " + myAge);

console.log(typeof myName);
console.log(typeof myAge);

let resultConfirm = confirm("Are you sure delete?");
console.log(resultConfirm);

