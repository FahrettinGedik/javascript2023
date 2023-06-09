// Benzin Istasyonu

/**
 * Dizel : 24.53
 * Benzin : 22.25
 * LPG : 11.1
 *
 *
 * Gelen musteriden alacagimiz bilgiler
 * Yakit tipi
 * Yuklenecek yakit litresi
 */

let dizel = 24.53,
    benzin = 22.25,
    lpg = 11.1;
const newLine = "\r\n";

const fuelText = "1-Dizel" + newLine + "2-Benzin" + newLine + "3-LPG" +
        newLine + "Select fuel type";

let fuelType = prompt(fuelText);

if (fuelType == "1" || fuelType == "2" || fuelType == "3") {
    let fuelQuantitiy = Number(prompt("Enter the amount of fuel in liters"));
    let amountOfMoney = Number(
        prompt("Enter amount of money you want to buy fuel")
    )
    if (fuelType == "1") {
        // Dizel
        let payBalance = dizel * fuelQuantitiy;
        if (payBalance < amountOfMoney) {
            // Bakiyeniz yeterli
            amountOfMoney = amountOfMoney - payBalance;
            alert(
                "Yakit alma islemi basarili" + newLine + "Kalan bakiye : " + amountOfMoney
            );

        } else {
            // bakiye yeterli degil
            alert(
                "Bakiyeniz yeterli degildir." + newLine + "odenecek tutar : " + payBalance +
                newLine + "Bakiye :" + amountOfMoney + newLine + "Eksik tutar :" + (
                    payBalance - amountOfMoney
                )
            );
        }
    } else if (fuelType == "2") {
        // Benzin
        let payBalance = benzin * fuelQuantitiy;
        if (payBalance < amountOfMoney) {
            // Bakiyeniz yeterli
            amountOfMoney = amountOfMoney - payBalance;
            alert(
                "Yakit alma islemi basarili" + newLine + "Kalan bakiye : " + amountOfMoney
            );

        } else {
            // bakiye yeterli degil
            alert(
                "Bakiyeniz yeterli degildir." + newLine + "odenecek tutar : " + payBalance +
                newLine + "Bakiye :" + amountOfMoney + newLine + "Eksik tutar :" + (
                    payBalance - amountOfMoney
                )
            );
        }
    } else if (fuelType == "2") {
        // LPG
        let payBalance = lpg * fuelQuantitiy;
        if (payBalance < amountOfMoney) {
            // Bakiyeniz yeterli
            amountOfMoney = amountOfMoney - payBalance;
            alert(
                "Yakit alma islemi basarili" + newLine + "Kalan bakiye : " + amountOfMoney
            );

        } else {
            // bakiye yeterli degil
            alert(
                "Bakiyeniz yeterli degildir." + newLine + "odenecek tutar : " + payBalance +
                newLine + "Bakiye :" + amountOfMoney + newLine + "Eksik tutar :" + (
                    payBalance - amountOfMoney
                )
            );
        }
    }
}
else{
        alert("Lutfen gecerli bir yakit turu seciniz!");
}
