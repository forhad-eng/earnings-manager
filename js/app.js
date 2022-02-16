function getInput(id) {
    const input = document.getElementById(id);
    const inputText = input.value;
    const inputValue = parseInt(inputText);

    if (inputText == '') {
        alert(`${id.toUpperCase()} field is Empty!`);   // empty field validation
        return;
    }
    if (!isNaN(inputValue)) {
        if (inputValue < 0) {
            alert(`Please insert a Positive value in ${id.toUpperCase()} field`);  //Negative number validation
        } else {
            return inputValue;
        }
    } else {
        alert(`Can't be processed! String inserted in ${id.toUpperCase()} field`);   // String validation
        return;
    }
}
//Calculate Button Event Handler
document.getElementById('calculate').addEventListener('click', function () {
    const income = getInput('income');
    const foodCost = getInput('food');
    const rentCost = getInput('rent');
    const clothesCost = getInput('clothes');
    const totalCost = foodCost + rentCost + clothesCost;

    //Total Cost vs Income Validation
    if (totalCost < income) {
        document.getElementById('total-expense').innerText = totalCost;
        document.getElementById('balance').innerText = income - totalCost;
    }
    if (totalCost > income) {
        alert('Sorry! Insufficient Income');
    }
})

//Save button event handler
document.getElementById('save-btn').addEventListener('click', function () {
    const income = getInput('income');
    const balanceText = document.getElementById('balance').innerText;
    const balanceValue = parseInt(balanceText);   //current balance

    const saving = document.getElementById('save');
    const savingPercent = parseInt(saving.value);   //savings in percent
    const savingAmount = (income / 100) * savingPercent;   //savings in amount
    saving.value = '';

    if (!isNaN(savingPercent)) {
        if (savingPercent < 0) {
            alert('Negative input given!');  //negative input validation...
            return;
        }
        if (savingAmount <= balanceValue) {   //savingAmount vs current balance checking
            document.getElementById('saving-amount').innerText = savingAmount;
            document.getElementById('remaining-balance').innerText = balanceValue - savingAmount;
        } else {
            alert('insufficient Balance!');
        }
    } else {
        alert('Number required!')   //string checking...
    }
})