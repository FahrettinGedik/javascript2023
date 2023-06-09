// else if Kosul Yapilari
/*
if (condition) {
    
} else if(condition){

} else if(condition){
 
} else {
    
}
*/
let selectedRoad = prompt("Please select your road 1,2,3");
if (selectedRoad==1) {
    alert("SelectedRoad " + selectedRoad + ". road");
} else if(selectedRoad==2){
    alert("SelectedRoad " + selectedRoad + ". road");
} else if(selectedRoad==3){
    alert("SelectedRoad " + selectedRoad + ". road");
} else {
    alert("Please select road !!!");  
}


// coklu if yapisi
/**
 * adi ve tckn
 * ad bos gecilemez
 * tckn 11 karakterden olusur
 */


let nameA = prompt("Enter your name : ");
let tcNo = prompt("Enter your tcNo : ");
console.log(nameA);
console.log(tcNo);

function checkName(nameA,tcNo) {
    if (nameA!= "") {
        if (tcNo.length==11) {
            console.log("name and tcNo entered correctly");
        }else{
            console.log("Please enter 11 decimal for tcNo !");
        
        }
    }else{
        console.log("Please enter the name !")
    }
}
checkName(nameA,tcNo);


let nameB = prompt("Enter your name : ");
let tcNoB = prompt("Enter your tcNo : ");
console.log(nameB);
console.log(tcNoB);
checkNameSec(nameB,tcNoB);

function checkNameSec(nameB,tcNoB) {
    if (nameB=="") {
        console.log("Please enter your name");
        alert("Please enter your name correctly");

        return;
    
    }if (tcNoB.length!=11) {
        console.log("Please enter your tcNo correctly");
        alert("Please enter your tcNo correctly");
        return;
    }
    console.log("name and tcNo is entered correctly");
    alert("You entered your name and tcNo correctly");


}



