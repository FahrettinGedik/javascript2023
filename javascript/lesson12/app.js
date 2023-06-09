// Beden kitle endeksi hesaplama
/*
if (condition) {
    
} else if(condition){

} else if(condition){
 
} else {
    
}
*/
let kilo = Number(prompt("Please enter you kilo"));
let boy = Number(prompt("Please enter hight as a metre"));
let indexBoyKilo=kilo/(boy**2);

if (indexBoyKilo<18.5) {
    console.log("Ideal kilonun cok altinda");
    alert("indexBoyKilo " + indexBoyKilo + ". cok zayif");
} else if(indexBoyKilo>=18.5 && indexBoyKilo<=24.9){
    console.log("Ideal kilonun altinda");
    alert("indexBoyKilo " + indexBoyKilo + ". zayif");
} else if(indexBoyKilo>=25 && indexBoyKilo<=29.9){
    console.log("Ideal kiloda");
    alert("indexBoyKilo " + indexBoyKilo + ". ideal kilo");
} else if(indexBoyKilo>=30 && indexBoyKilo<=39.9){
    console.log("Ideal kilonun ustunde obez");
    alert("indexBoyKilo " + indexBoyKilo + ". obez");
} else if(indexBoyKilo>=40){
    console.log("Ideal kilonun cok ustunde morbid obez");
    alert("indexBoyKilo " + selectedRoad + ". morbid obez");
}









