let newLine = "\r\n";
let textDay = "1-Monday" + newLine + "2-Tuesday" +
        newLine + "3-Wendsday" + newLine + "4-Thirsday" + newLine + "5-Friday" +
        newLine + "6-Saturday" + newLine + "7-Sunday" + newLine +
        "Please select a day";

let valueEntry = prompt(textDay);
switch (valueEntry) {
    case "1":
        console.log("Monday");
        break;
    case "2":
        console.log("Tuesday");
        break;
    case "3":
        console.log("wendsday");
        break;
    case "4":
        console.log("Thirsday");
        break;
    case "5":
        console.log("Friday");
        break;
    case "6":
        console.log("Saturday");
        break;
    case "7":
        console.log("Sunday");
        break;
    default:
        console.log("Please enter valid numbe between 1 to 7");
        break;
}
