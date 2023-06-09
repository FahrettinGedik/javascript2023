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

    const fuelTypes = ['diesel', 'gasoline', 'lpg'];
    const selectedFuelType = fuelTypes[fuelType - 1];
    const fuelPrice = fuelPrices[selectedFuelType];
    const fuelCost = fuelPrice * fuelQuantity;

    if (amountOfMoney >= fuelCost) {
        const remainingBalance = amountOfMoney - fuelCost;
        alert(
            "Fuel purchase successful.\nRemaining balance: " + remainingBalance.toFixed(2)
        );
    } else {
        const insufficientAmount = fuelCost - amountOfMoney;
        alert(
            "Insufficient funds.\nAmount to be paid: " + fuelCost.toFixed(2) + "\nRemaining" +
            " balance: " + amountOfMoney.toFixed(2) + "\nShortage: " +
            insufficientAmount.toFixed(2)
        );
    }
} else {
    alert("Please select a valid fuel type!");
}
