const fuelPrices = {
    diesel: 24.53,
    gasoline: 22.25,
    lpg: 11.1
};

const fuelOptions = "1-Diesel\n2-Gasoline\n3-LPG\nSelect fuel type:";
const fuelType = parseInt(prompt(fuelOptions));

if (fuelType >= 1 && fuelType <= 3) {
    const fuelQuantity = parseFloat(prompt("Enter the amount of fuel in liters:"));
    const amountOfMoney = parseFloat(
        prompt("Enter the amount of money you want to spend on fuel:")
    );

    switch (fuelType) {
        case 1: // Diesel
            const dieselPrice = fuelPrices.diesel;
            const dieselCost = dieselPrice * fuelQuantity;

            if (amountOfMoney >= dieselCost) {
                const remainingBalance = amountOfMoney - dieselCost;
                alert(
                    "Fuel purchase successful.\nRemaining balance: " + remainingBalance.toFixed(2)
                );
            } else {
                const insufficientAmount = dieselCost - amountOfMoney;
                alert(
                    "Insufficient funds.\nAmount to be paid: " + dieselCost.toFixed(2) + "\nRemaini" +
                    "ng balance: " + amountOfMoney.toFixed(2) + "\nShortage: " +
                    insufficientAmount.toFixed(2)
                );
            }
            break;

        case 2: // Gasoline
            const gasolinePrice = fuelPrices.gasoline;
            const gasolineCost = gasolinePrice * fuelQuantity;

            if (amountOfMoney >= gasolineCost) {
                const remainingBalance = amountOfMoney - gasolineCost;
                alert(
                    "Fuel purchase successful.\nRemaining balance: " + remainingBalance.toFixed(2)
                );
            } else {
                const insufficientAmount = gasolineCost - amountOfMoney;
                alert(
                    "Insufficient funds.\nAmount to be paid: " + gasolineCost.toFixed(2) + "\nRemai" +
                    "ning balance: " + amountOfMoney.toFixed(2) + "\nShortage: " +
                    insufficientAmount.toFixed(2)
                );
            }
            break;

        case 3: // LPG
            const lpgPrice = fuelPrices.lpg;
            const lpgCost = lpgPrice * fuelQuantity;

            if (amountOfMoney >= lpgCost) {
                const remainingBalance = amountOfMoney - lpgCost;
                alert(
                    "Fuel purchase successful.\nRemaining balance: " + remainingBalance.toFixed(2)
                );
            } else {
                const insufficientAmount = lpgCost - amountOfMoney;
                alert(
                    "Insufficient funds.\nAmount to be paid: " + lpgCost.toFixed(2) + "\nRemaining " +
                    "balance: " + amountOfMoney.toFixed(2) + "\nShortage: " +
                    insufficientAmount.toFixed(2)
                );
            }
            break;
    }
} else {
    alert("Please select a valid fuel type!");
}
